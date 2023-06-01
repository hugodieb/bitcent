import MiniFormulario from "../template/MiniFormulario";

export default function Formularios() {
    return (
        <div>
            <MiniFormulario
                titulo="Seu Nome"
                descricao="Entre com seu nome para a aplicação"
                msgRodape="O nome deve ter entre 3 e 80 caracteres"
                podeSalvar={true}
                salvar={() => {}}
            >
                2:54
            </MiniFormulario>
        </div>
    )
}