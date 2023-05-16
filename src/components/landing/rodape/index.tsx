import Area from "../comum/area";
import Logo from "../comum/logo";
import RedesSociais from "./redesSociais";


export default function Rodape() {
    return (
        <Area className="bg-black py-20">
            <div className="flex flex-col items-center md:items-start">
                <Logo className="text-3xl" />
                <div className="mt-3 text-zinc-400 text-center md:text-left">
                    <div>Plataforma financeira</div>
                    <div className="flex gap-1.5">que
                        <span className="font-black text-transparent bg-clip-text bg-gradient-to-r
                        from-indigo-600 to-cyan-600"                    
                        >simplifica</span>
                        sua vida
                    </div>
                </div>
            </div>
            <div className=" flex flex-col items-center md:flex-row md:justify-between mt-14">
                <RedesSociais />
                <div className="flex items-center justify-around">                    
                    <Logo className="text-sm"/> <span className="m-1">®</span> {new Date().getFullYear()} - Todos os direitos reservados
                </div>
            </div>
        </Area>
    )
}