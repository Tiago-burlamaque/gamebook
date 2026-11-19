import db from "../config/db.js";

class UsuarioRepository {

    async consultarUsuario() {
        const [usuarios] = await db.query(
            'SELECT * FROM usuario'
        )
        return usuarios;
    }

    async buscarUsuario(id) {
        const [usuario] = await db.query(
            'SELECT * FROM usuario WHERE id = ?', [id]
        );
        return usuario;
    }

    async criarUsuario() {
        const [usuario] = await db.query(
            'INSERT INTO'
        )
    }
}