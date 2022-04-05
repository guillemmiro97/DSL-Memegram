class GenericDAO {

    constructor(tabla) {
        this.tabla = tabla;
    }

    async getAll() {
        // SELECT * FROM tabla
        const [results] = await global.connection.promise().query("SELECT * FROM ??", [this.tabla])
        return results;
    }

    get(id) {
        // SELECT * FROM ?? WHERE id = 'params.id'
        return {};
    }

    post(user) {
        // INSERT INTO ?? (??) values (??)
        return {}
    }

    update(id, data) {
        // UPDATE ?? SET ?? = ? WHERE id = ?
        return {}
    }

    delete(id) {
        // DELETE FROM ?? WHERE id = ?
        return {}
    }

}

module.exports = GenericDAO