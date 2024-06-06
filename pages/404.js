import Link from '../src/components/Link';

//pagina de erro 404
export default function Page404() {
    return (
        <div>
            <h1>Você se perdeu e caiu na página 404 :O</h1>
            <Link href="/">
                Ir para a home
            </Link>
        </div>
    )
}