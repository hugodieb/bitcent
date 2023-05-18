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

    return (
        <Pagina>
            <Cabecalho />
            <Conteudo className="gap-5">
               <Lista transacoes={transacoes} />
               <Formulario transacao={transacoes[0]} />
            </Conteudo>
        </Pagina>
    )
}