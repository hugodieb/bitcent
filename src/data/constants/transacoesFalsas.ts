import Id from "@/logica/core/comum/Id";
import { TipoTransacao } from "@/logica/core/financas/TipoTransacao";
import Transacao from "@/logica/core/financas/Transacao";

const transacoesFalsas: Transacao[] = [
    {
        id: Id.novo(),
        descricao: 'Salário',
        data: new Date(2023, 4, 1),
        valor: 7123.44,
        tipo: TipoTransacao.RECEITA
    },
    {
        id: Id.novo(),
        descricao: 'Conta de luz',
        data: new Date(2023, 4, 3),
        valor: 320.98,
        tipo: TipoTransacao.DESPESA
    },
    {
        id: Id.novo(),
        descricao: 'Aluguel + condomínio',
        data: new Date(2023, 4, 15),
        valor: 2120.56,
        tipo: TipoTransacao.DESPESA
    },
    {
        id: Id.novo(),
        descricao: 'Conta de água',
        data: new Date(2023, 4, 10),
        valor: 121.23,
        tipo: TipoTransacao.DESPESA
    },
    {
        id: Id.novo(),
        descricao: 'Cartão de crédito',
        data: new Date(2023, 4, 20),
        valor: 1212.44,
        tipo: TipoTransacao.DESPESA
    }
]