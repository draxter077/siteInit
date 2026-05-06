export default function logo(){
    let style = `
        {
            height:50px;
            width:150px;
            background:var(--colorBlack);
        }`

    const logo = cE("img",style)
    logo.alt = "Logotipo da nomeEmpresa"
    return(logo)
}
