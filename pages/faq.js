import { useEffect, useState } from 'react';
import Link from '../src/components/Link';

//qualquer coisa escrita aq sera passada para a pagina DEPOIS
export async function getStaticProps(){

    const FAQ_API_URL = "https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json"
    const faq = await fetch(FAQ_API_URL).then((respostaDoServidor)=>{
        return respostaDoServidor.json()
    }).then((resposta)=>{
            return resposta
        
    })

    return {
        props:{
            faq
        }
    }
}

//pagina de sacionar duvidasa
export default function FAQPage({faq}) {
    console.log(faq)
    //const [faq, set_faq] = useState([])
    //useEffect(() => {
        return (
            <div>
                <h1>Alura Cases - Páginas de Perguntas FAQ</h1>
                <Link href="/">
                    Ir para a home
                </Link>
                <ul>
                    {faq.map(({answer, question}) => (
                    
                    <li key={question}>
                        <article>
                            <h2>{question}</h2>
                            <p>{answer}</p>
                        </article>
                        
                    </li>))}
                </ul>
            </div>
        )
    }


