const GenericDAO = require("./generic.dao")

class UsersDAO extends GenericDAO{

    constructor(){
        super("user")
    }

    async insertUser(name, password){
        this._name = name
        this._password = password
        // INSERT INTO USERS (name, password) VALUES (name, password)
        const [results] = await global.connection.promise()
            .query("INSERT INTO ?? (nombre, password) VALUES (?, ?)", [this.tabla, this._name, this._password])
        return {name: name, password: password}
    }

    async updateUser(id, password){
        this._id = id
        this._password = password
        // UPDATE USER SET password = password WHERE id = id;
        const [results] = await global.connection.promise()
            .query("UPDATE ?? SET password = ? WHERE  id = ?", [this.tabla, this._password,  this._id])
        return results
    }

}

module.exports = UsersDAO