import Transacao from "@/logica/core/financas/Transacao";
import { useState } from "react";

export default function useFormulario(dadosIniciais: Transacao) {
    const [dados, setDados] = useState(dadosIniciais)

    return {
        dados,
        alterarDados: setDados,
    }
}