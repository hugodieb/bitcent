import Transacao from "@/logica/core/financas/Transacao";
import { useState } from "react";

export default function useFormulario(transacaoInicial: Transacao) {
    const [transacao, setTransacao] = useState(transacaoInicial)

    return {
        transacao,
        setTransacao,
    }
}