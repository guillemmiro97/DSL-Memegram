const GenericDAO = require("./generic.dao");

class PostsDAO extends GenericDAO {
    constructor() {
        super("post")
    }

    async getPostsByUser(id){
        this._id = id;
        // SELECT * FROM ?? WHERE id = 'params.id'
        const [results] = await global.connection.promise().query("SELECT * FROM ?? WHERE idUser = ?", [this.tabla, this._id])
        return results;
    }

    async howManyPosts(id){
        this._id = id;
        // SELECT COUNT(*) FROM ?? WHERE id = 'params.id'
        const [results] = await global.connection.promise().query("SELECT COUNT(*) FROM ?? WHERE idUser = ?", [this.tabla, this._id])
        return results;
    }

    async insertPost(userid, uidimagen){
        this._userid = userid
        this._uidimagen = uidimagen
        // insert into post (iduser, uidimagen) values (?, ?);
        const [results] = await global.connection.promise()
            .query("INSERT INTO ?? (iduser, uidimagen) VALUES (?, ?)", [this.tabla, this._userid, this._uidimagen])
        return results;
    }

    async updatePost(id, imageId){
        this._id = id
        this._imageId = imageId
        // UPDATE POST SET UIDimagen = imageId WHERE id = id;
        const [results] = await global.connection.promise()
            .query("UPDATE ?? SET UIDimagen = ? WHERE  id = ?", [this.tabla, this._imageId,  this._id])
        return results
    }
}

module.exports = PostsDAO