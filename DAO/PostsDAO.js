const GenericDAO = require("./generic.dao");

class PostsDAO extends GenericDAO {
    constructor() {
        super("post")
    }
}

module.exports = PostsDAO