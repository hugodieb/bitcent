import Area from "../comum/area";
import principal from "../../../../public/principal.jpg"
import ImagemResponsiva from "../comum/imagemResponsiva";
import Slogan from "./slogan";

export default function Destaque() {
    return (
        <Area id="#inicio" className="pt-20">
            <div className={`flex items-center justify-around
                h-[500px]
            `}>
                <Slogan />
                <ImagemResponsiva
                    imagem={principal}
                    className="rotate-3 hidden md:inline"
                />
            </div>
        </Area>
    )
}