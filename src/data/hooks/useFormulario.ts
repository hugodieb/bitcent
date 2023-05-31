import Transacao from "@/logica/core/financas/Transacao";
import { useState } from "react";

export default function useFormulario(dadosIniciais: Transacao) {
    const [dados, setDados] = useState(dadosIniciais)

    function alterarAtributo(atributo: string, fn?: Function) {
        return (valorOuEvento: any) => {
            debugger
            const v = valorOuEvento?.target?.value ?? valorOuEvento
            setDados({...dados, [atributo]: fn?.(v) ?? v })
        }
    }

    return {
        dados,
        alterarDados: setDados,
        alterarAtributo,
    }
}