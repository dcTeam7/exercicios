type ImagesProps = {
    url: string,
    nome: string
}

export default function Image({url, nome} : ImagesProps) {
    return (
        <a href="https://vitejs.dev" target="_blank">
            <img src={url} className="logo" alt="EUquipe" />
            <p>{nome}</p>
        </a>
    )
}