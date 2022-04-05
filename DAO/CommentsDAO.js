const GenericDAO = require("./generic.dao");

class CommentsDAO extends GenericDAO {
    constructor() {
        super("comment")
    }

     async insertComment(idUser, idPost, idComent, contenido){
        const query = `INSERT INTO comment (idUser, idPost, idComent, contenido) VALUES (${idUser}, ${idPost}, ${idComent}, '${contenido}')`;
        //insert into comment (idUser, idPost, idComent, contenido) values (1,1,1,"Las flores huelen bien");
        const [results] = await global.connection.promise().query(query);
        return results;
    }

    async updateComment (id, contenido) {
        const query = `UPDATE comment SET contenido = '${contenido}' WHERE id = ${id}`;
        const [results] = await global.connection.promise().query(query);
        return results;
    }

    async getCommentsByPost(idPost) {
        const query = `SELECT * FROM comment WHERE idPost = ${idPost}`;
        const [results] = await global.connection.promise().query(query);
        return results;
    }

    async getNumberOfCommentsByUser(idUser) {
        const query = `SELECT COUNT(*) FROM comment WHERE idUser = ${idUser}`;
        const [results] = await global.connection.promise().query(query);
        return results;
    }

    async getNumberOfCommentsByPost(idPost) {
        const query = `SELECT COUNT(*) FROM comment WHERE idPost = ${idPost}`;
        const [results] = await global.connection.promise().query(query);
        return results;
    }
}

module.exports = CommentsDAO