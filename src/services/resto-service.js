export default class RestoService {
    constructor() {
        this._dataBase = 'http://localhost:3000/menu';
    }

    async getMenuItems() {
        const res = await fetch(`${this._dataBase}`);

        if (!res.ok) {
            throw new Error(`Could not fetch, status ${res.status}`);
        }

        return await res.json();
    };
}

