import head from "./head/main.js"
import ph from "./ph/main.js"

export default function main(){
    const SD = { // Padrão em todo main de página
        "@context":"https://schema.org",
        "@type":"Organization",
        "name":"Nome da Sua Empresa",
        "url":"https://www.seusite.com.br",
        "logo":"https://www.seusite.com.br/logo.png",
        "description":"Descrição dinâmica da empresa via JS.",
        "address":{
            "@type":"PostalAddress",
            "streetAddress":"Rua Exemplo, 123",
            "addressLocality":"São Paulo",
            "addressRegion":"SP",
            "addressCountry":"BR"
        }
    }
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify(SD)
    document.head.appendChild(script)

    let style = `
        {
            display:flex;
            flex-direction:column;
            align-items:center;
            width:100%;
            height:fit-content;
        }`

    const main = cE("div",style)
    main.appendChild(head())
    main.appendChild(ph())
    return(main)
}