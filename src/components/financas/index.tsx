import Cabecalho from "@/components/template/Cabecalho"
import Pagina from "@/components/template/Pagina"
import Conteudo from "@/components/template/Conteudo"
import { useState } from "react"
import Transacao, { transacaoVazia } from "@/logica/core/financas/Transacao"
import transacoesFalsas from "@/data/constants/transacoesFalsas"
import Lista from "./Lista"
import Formulario from "@/components/financas/Formulario"
import NaoEncontrado from "../template/NaoEncontrado"
import Id from "@/logica/core/comum/Id"
import { IconPlus } from "@tabler/icons-react"
import { Button } from "@mantine/core"

export default function Financas() {
    const [transacoes, setTransacoes] = useState<Transacao[]>(transacoesFalsas)
    const [transacao, setTransacao] = useState<Transacao | null>(null)
    
    function salvar(transacao: Transacao) {
        
        const outrasTransacoes = transacoes.filter(t => t.id!== transacao.id)
        setTransacoes([...outrasTransacoes, {
            ...transacao,
            id: transacao.id ?? Id.novo()
        }])
        setTransacao(null)
    }

    function excluir(transacao: Transacao) {        
        const outrasTransacoes = transacoes.filter(t => t.id!== transacao.id)
        setTransacoes(outrasTransacoes)
        setTransacao(null)
    }

    return (
        <Pagina>
            <Cabecalho />
            <Conteudo className="gap-5">

                <Button
                    className="bg-blue-500"
                    leftIcon={<IconPlus />}
                    onClick={() => setTransacao(transacaoVazia)}                    
                >
                    Nova Transação
                </Button>               
               { transacao ? (
                    <Formulario transacao={transacao}
                        salvar={salvar}
                        excluir={excluir}
                        cancelar={() => setTransacao(null)}
                    />
                ) : transacoes.length ? (<Lista transacoes={transacoes} selecionarTransacao={setTransacao} />
                
                ) : 
                    <NaoEncontrado>
                        Nenhuma Transação foi encontrada!
                    </NaoEncontrado>                
                }
            </Conteudo>
        </Pagina>
    )
}