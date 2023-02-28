const { generateError } = require('../helpers');
const { getConnection } = require('./db');

const insertLink = async (link) => {
    let connection;
    try {
        connection = await getConnection();

        const { title, url, description, idUser } = link;

        const [{ insertId }] = await connection.query(
            `INSERT INTO links (title, url, description, id_user) VALUES (?,?,?,?)`,
            [title, url, description, idUser]
        );
        return insertId;
    } finally {
        if (connection) connection.release();
    }
};

const getAllLinks = async (loggedUserId) => {
    let connection;

    try {
        connection = await getConnection();

        const [result] = await connection.query(
            `
        SELECT u.nombre userName, l.*, AVG(v.voto) avgVotos, MAX(v2.voto) loggedUserVote FROM links l LEFT JOIN votos v ON l.id = v.id_links LEFT JOIN votos v2 ON (l.id = v2.id_links AND v2.id_users = ?) LEFT JOIN users u ON l.id_user = u.id GROUP BY l.id  ORDER BY createdLink DESC
      `,
            [loggedUserId]
        );

        return result;
    } finally {
        if (connection) connection.release();
    }
};

const getLinkById = async (id) => {
    let connection;

    try {
        connection = await getConnection();

        const [result] = await connection.query(
            ` SELECT u.nombre userName, l.*, AVG(v.voto) avgVotos FROM links l LEFT JOIN votos v ON l.id = v.id_links LEFT JOIN users u ON l.id_user = u.id WHERE l.id = ?`,
            [id]
        );

        if (result.length === 0) {
            throw generateError(`El link con id: ${id} no existe`, 404);
        }

        return result[0];
    } finally {
        if (connection) connection.release();
    }
};

const deleteLinkById = async (id) => {
    let connection;

    try {
        connection = await getConnection();

        await connection.query(
            `
        DELETE FROM links WHERE id = ?
      `,
            [id]
        );

        return;
    } finally {
        if (connection) connection.release();
    }
};

module.exports = { insertLink, getAllLinks, getLinkById, deleteLinkById };
