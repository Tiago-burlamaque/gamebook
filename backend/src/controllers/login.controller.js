import { loginService } from "../services/login.service.js";

class UsuarioController {
    async login(req, res) {
        try {

            const { email, senha } = req.body;

            const campos = loginService.verificarCamposLogin(email, senha);
            if (campos.success == false) return res.status(400).json({
                message: campos.message
            })

            const usuarioexiste = await loginService.verificarSeUsuarioExiste(email, senha)
            if (usuarioexiste.success === false) return res.status(400).json({
                message: usuarioexiste.message
            })

            return res.status(200).json({
                message: "Usuário logado com sucesso.",
                usuarioexiste
            })
        } catch (error) {
            console.log(error)
            return res.status(500).json({
                message: "Erro interno no servidor."
            })
        }

    }
}

export const usuarioController = new UsuarioController();