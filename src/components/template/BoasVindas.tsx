// https://unicode-table.com/en/1F44B/

export default function BoasVindas() {    

    const usuario = {nome: 'João da Silva'}
    function renderizarNome() {
        return (
            <span className="hidden sm:inline">
                {usuario?.nome?.split(' ')[0]}
            </span>
        )
    }

    return (
        <div className={`text-3xl font-black`}>
            Olá {renderizarNome()} 👋
        </div>
    )
}