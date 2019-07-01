export default class RestoService {
    constructor() {
        this._dataBase = 'http://localhost:3000/menu';
    }

    async getMenuItems() {
        const res = await fetch(`${this._dataBase}`);
        return await res.json();
    };
}

