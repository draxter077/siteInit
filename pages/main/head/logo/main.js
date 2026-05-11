export default function logo(){
    let style = `
        {
            height:60px;
        }
        :responsive{
            height:75px;
            margin:2.5% 0px;
        }`

    const logo = cE("img",style)
    logo.src = "/assets/"
    logo.alt = "Logotipo da NOME_EMPRESA"
    return(logo)
}