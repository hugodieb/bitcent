import Transacao from "@/logica/core/financas/Transacao";

interface ListaProps {
    transacoes: Transacao[]
}

export default function Lista(props: ListaProps) {
    function renderizarLista(transacao: Transacao) {
        return (
            <div key={transacao.id}>
                <span>{transacao.descricao}</span>
                <span>{transacao.valor}</span>                                
            </div>
        )
    }

    return (
        <div>
            {props.transacoes.map(renderizarLista)}
        </div>
    )
}