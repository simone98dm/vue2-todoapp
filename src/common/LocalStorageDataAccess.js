export default class LocalStorageDataAccess {
    _localStorage() {
        if (!localStorage) {
            throw new Error("Localstorage not supported");
        }
        const data = localStorage.getItem(this.connectionString);
        if (data) {
            return JSON.parse(data);
        }
        return null;
    }

    _save(data) {
        if (!localStorage) {
            throw new Error("Localstorage not supported");
        }
        const parsed = JSON.stringify(data);
        localStorage.setItem(this.connectionString, parsed);
    }

    constructor(connectionString) {
        this.connectionString = connectionString;
    }

    add = (item) => {
        let cart = this._localStorage();
        if (!cart) {
            cart = [];
        }
        const hasFound = cart?.find(x => x.id === item.id);
        if (!hasFound) {
            cart?.push(item);
        }
        this._save(cart);
    }

    addRange = (items) => {
        for (const item of items) {
            this.add(item);
        }
    }

    remove = (item) => {
        let cart = this._localStorage();
        if (!cart) {
            cart = [];
        }
        const hasFound = cart?.findIndex(x => x.id === item.id);
        if (hasFound >= 0) {
            cart?.splice(hasFound, 1);
        }
        this._save(cart);
    }

    update = (oldItem, newItem) => {
        let cart = this._localStorage();
        if (!cart) {
            cart = [];
        }
        const newCart = cart?.map(x => {
            if (x.id === oldItem.id) {
                x = newItem;
            }
            return x;
        })
        this._save(newCart);
    }

    retrieve = (id) => {
        const cart = this._localStorage();
        return cart?.find(x => x.id === id) || null;
    }

    retrieveAll = () => {
        return this._localStorage() || null;
    }
}