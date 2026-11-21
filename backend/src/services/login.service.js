import { loginRepository } from "../repositories/loginRepository.js";

class LoginService {

    verificarCamposCadastro(nome, email, senha) {
        if (!nome && !email && !senha) return { success: false, message: "Os campos são obrigatórios." }
    }

    verificarCamposLogin(email, senha) {
        if (!email && !senha) return { success: false, message: "Os campos são obrigatórios." }
    }

    verificarSenhaLimite(senha) {
        if (senha.length < 8) return { success: false, message: "A senha deve ser maior que 8 caracteres." }
    }

    async verificarSeUsuarioExiste(email, senha) {
        const [usuario] = await loginRepository.consultarUsuarios(email, senha)

        if (usuario.length === 0) return { success: false, message: "Usuário não existe." }
    }
}

export const loginService = new LoginService()