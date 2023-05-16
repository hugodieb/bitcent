import Area from "../comum/area";
import Logo from "../comum/logo";
import Menu from "./menu";

export default function Cabecalho() {
    return (
        <Area className="bg-black fixed z-50">
            <div className="flex items-center justify-between h-20">
                <Logo className="text-3xl" />
                <Menu /> 
            </div>                       
        </Area>
    )
}



// https://player-vz-0137cf0a-d11.tv.pandavideo.com.br/embed/?v=72c63d0a-3a9f-4a0f-a35c-4fc974403699&muted=false&saveProgress=false&autoplay=false