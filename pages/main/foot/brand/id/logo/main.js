export default function logo(){
    let style = `
        {
            height:60px;
        }
        :responsive{
            height:52px;
        }`

    const logo = cE("img",style)
    logo.src = "/assets/"
    logo.alt = "Logotipo da NOME_EMPRESA"
    return(logo)
}