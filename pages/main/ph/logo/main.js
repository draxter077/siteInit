export default function logo(){
    let style = `
        {
            height:35px;
            border-radius:5px;
        }`

    const logo = cE("img",style)
    logo.src = "https://www.ph.net.br/assets/logo.jpg"
    logo.alt = "Logotipo da Ph Web Software"
    return(logo)
}