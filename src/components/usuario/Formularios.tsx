import useFormulario from "@/data/hooks/useFormulario";
import MiniFormulario from "../template/MiniFormulario";
import usuarioMoc from "@/data/constants/usuarioFalso";
import Usuario from "@/logica/core/usuario/Usuario";
import { TextInput } from "@mantine/core";
import Texto from "@/logica/utils/Texto";
import Cpf from "@/logica/utils/Cpf";
import Telefone from "@/logica/utils/Telefone";

export default function Formularios() {
    const{ dados, alterarAtributo } = useFormulario<Usuario>(usuarioMoc)

    return (
        <div className="flex flex-col gap-5">
            3:04
            <MiniFormulario
                titulo="Seu Nome"
                descricao="Entre com seu nome para a aplicação"
                msgRodape="O nome deve ter entre 3 e 80 caracteres"
                podeSalvar={Texto.entre(dados.nome, 3, 80)}
                salvar={() => {}}
            >
                <TextInput
                    value={dados.nome}
                    onChange={alterarAtributo('nome')}
                />                
            </MiniFormulario>
            <MiniFormulario
                titulo="CPF"
                descricao="Seu cpf é usado internamente no sistema"
                msgRodape="Pode relaxar, daqui ele não sai!"
                podeSalvar={true}
                salvar={() => {}}
            >
                <TextInput
                    value={Cpf.formatar(dados.cpf ?? '')}
                    onChange={alterarAtributo('cpf', Cpf.desformatar)}
                />                
            </MiniFormulario>
            <MiniFormulario
                titulo="Telefone"
                descricao="Usado para notificações importantes sobre sua conta"
                msgRodape="Se receber ligação á cobrar, não foi a gente!"
                podeSalvar={true}
                salvar={() => {}}
            >
                <TextInput
                    value={Telefone.formatar(dados.telefone ?? '')}
                    onChange={alterarAtributo('telefone', Telefone.desformatar)}
                />                
            </MiniFormulario>
        </div>
    )
}