interface LogoProps {
    className?: string
}

export default function Logo(props: LogoProps) {
    return (
        <div className={`${props.className ?? ''}` }>
            <span className="font-black">Bit</span>
            <span className="text-zinc-400 font-thin">CENT</span>
        </div>
    )
}