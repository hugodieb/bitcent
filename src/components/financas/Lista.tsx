import Transacao from "@/logica/core/financas/Transacao";
import Data from "@/logica/utils/Data";
import Dinheiro from "@/logica/utils/Dinheiro";
import { IconTrendingDown, IconTrendingUp } from "@tabler/icons-react";

interface ListaProps {
    transacoes: Transacao[]
    selecionarTransacao?: (transacao: Transacao) => void
}

export default function Lista(props: ListaProps) {

    function renderizarTipo(transacao: Transacao) {
        return (
            <span className={`
                flex justify-center items-center
                h8 w8 sm:w-10 sm:h-10 p-1.5 rounded-full
                ${transacao.tipo === 'receita' ? 'bg-green-500' : 'bg-red-500'}
            `}>
                {transacao.tipo === 'receita' ? <IconTrendingUp /> : <IconTrendingDown />}
            </span>
        )
    }

    function renderizarLinha(transacao: Transacao, indice: number) {
        return (
            <div key={transacao.id} className={`
                flex items-center gap-3 p-3 cursor-pointer
                ${indice % 2 === 0 ? 'bg-zinc-900' : 'bg-zinc-800'}
            `} onClick={() => props.selecionarTransacao?.(transacao)}>
                {renderizarTipo(transacao)}
                <span className="w-full md:w-1/2">{transacao.descricao}</span>
                <span className="hidden md:inline flex-1">{ Data.ddmmyy.formatar(transacao.data) }</span>
                <span>{ Dinheiro.formatar(transacao.valor)}</span>                                
            </div>
        )
    }

    return (
        <div className={`
            flex flex-col border border-zinc-700
            rounded-xl overflow-hidden
        `}>
            {props.transacoes.map(renderizarLinha)}
        </div>
    )
}