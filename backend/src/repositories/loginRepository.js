import db from "../config/db.js";

class LoginRepository {

    async consultarUsuarios(email, senha) {
        const [usuarios] = await db.query(
            'SELECT * FROM usuario WHERE email = ?, senha = ?', [email, senha]
        )
        return usuarios;
    }

    async buscarUsuario(id) {
        const [usuario] = await db.query(
            'SELECT * FROM usuario WHERE id = ?', [id]
        );
        return usuario;
    }

    async criarUsuario(nome, email, senha) {
        const [usuario] = await db.query(
            'INSERT INTO usuario (nome, email, senha) VALUES (?, ?, ?)', [nome, email, senha]
        )
        return usuario;
    }
}

export const loginRepository = new LoginRepository();