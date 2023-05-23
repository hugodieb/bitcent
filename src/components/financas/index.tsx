import Cabecalho from "@/components/template/Cabecalho"
import Pagina from "@/components/template/Pagina"
import Conteudo from "@/components/template/Conteudo"
import { useState } from "react"
import Transacao from "@/logica/core/financas/Transacao"
import transacoesFalsas from "@/data/constants/transacoesFalsas"
import Lista from "./Lista"
import Formulario from "@/components/financas/Formulario"

export default function Financas() {
    const [transacoes, setTransacoes] = useState<Transacao[]>(transacoesFalsas)
    const [transacao, setTransacao] = useState<Transacao | null>(null)
    
    function salvar(transacao: Transacao) {

    }

    function excluir(transacao: Transacao) {
        console.log('excluir', transacao)
        const outrasTransacoes = transacoes.filter(t => t.id!== transacao.id)
        setTransacoes(outrasTransacoes)
        setTransacao(null)
    }

    return (
        <Pagina>
            <Cabecalho />
            <Conteudo className="gap-5">
                -3:39               
               { transacao ? (
                    <Formulario transacao={transacao}
                        salvar={salvar}
                        excluir={excluir}
                        cancelar={() => setTransacao(null)}
                    />
                ) : (<Lista transacoes={transacoes} selecionarTransacao={setTransacao} />)
                }
            </Conteudo>
        </Pagina>
    )
}