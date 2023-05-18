import Cabecalho from "@/components/template/Cabecalho"
import Pagina from "@/components/template/Pagina"
import Conteudo from "@/components/template/Conteudo"
import { useState } from "react"
import Transacao from "@/logica/core/financas/Transacao"
import transacoesFalsas from "@/data/constants/transacoesFalsas"
import Lista from "./Lista"

export default function Financas() {
    const [transacoes, setTransacoes] = useState<Transacao[]>(transacoesFalsas)

    return (
        <Pagina>
            <Cabecalho />
            <Conteudo>
               <Lista transacoes={transacoes} />
            </Conteudo>
        </Pagina>
    )
}