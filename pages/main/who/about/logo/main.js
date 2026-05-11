export default function logo(){
    let style = `
        {
            width:10%;

            color:var(--colorWhite);
        }
        :responsive{
            display:none;
        }`

    const logo = cE("img",style)
    logo.src = "/assets"
    logo.alt = "Logotipo da NOME_EMPRESA"
    return(logo)
}