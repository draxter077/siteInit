import head from "./head/main.js"
import outdoor from "./outdoor/main.js"
import services from "./services/main.js"
import who from "./who/main.js"
import faq from "./faq/main.js"
import foot from "./foot/main.js"
import ph from "./ph/main.js"

export default function main(){
    const SD = { // Padrão em todo main de página
        "@context":"https://schema.org",
        "@type":"Organization",
        "name":"Ph Web Software",
        "alternateName":"Ph",
        "url":"https://www.ph.net.br",
        "logo":"https://www.ph.net.br/logo.jpg",
        "email":"contato@ph.net.br",
        "telephone":"+55 (41) 99171-8360",
        "slogan":"Transformamos sua ideia em uma realidade no mundo digital",
        "description":"Uma empresa focada em desenvolvimento web",
        "areaServed":"BRA",
        "sameAs":[
            "https://www.ph.net.br",
            "https://www.instagram.com/phwebsoftware"
        ]
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
    main.appendChild(outdoor())
    main.appendChild(services())
    main.appendChild(who())
    main.appendChild(faq())
    main.appendChild(foot())
    main.appendChild(ph())
    return(main)
}
