import Usuario from "@/logica/core/usuario/Usuario"

interface AutenticacaoProps {
    carregando: boolean
    usuario: Usuario | null
    loginGoogle: () => Promise<Usuario | null>
    logout: () => Promise<void>
}