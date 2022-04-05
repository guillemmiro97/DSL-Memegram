class GenericDAO {

    constructor(tabla) {
        this.tabla = tabla;
    }

    async getAll() {
        // SELECT * FROM tabla
        const [results] = await global.connection.promise().query("SELECT * FROM ??", [this.tabla])
        return results;
    }

    async get(id) {
        this._id = id;
        // SELECT * FROM ?? WHERE id = 'params.id'
        const [results] = await global.connection.promise().query("SELECT * FROM ?? WHERE id = ?", [this.tabla, this._id])
        return results;
    }

    async delete(id) {
        this._id = id;
        // DELETE FROM ?? WHERE id = 'params.id'
        const [results] = await global.connection.promise().query("DELETE FROM ?? WHERE id = ?", [this.tabla, this._id])
        return results;
    }

}

module.exports = GenericDAO