const GenericDAO = require("./generic.dao")

class UsersDAO extends GenericDAO{

    constructor(){
        super("user")
    }

    getAllAbove18(){
        // SELECT * FROM USERS WHERE age > 18
        return [{name: "alice"} , {name: "bob"} , {name: "charlie"}]
    }

}

module.exports = UsersDAO