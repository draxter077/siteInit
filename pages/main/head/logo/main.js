export default function logo(){
    let style = `
        {
            height:60px;
            border:2px solid var(--colorWhite);
        }
        :responsive{
            height:75px;
            margin:2.5% 0px;
        }`

    const logo = cE("img",style)
    logo.src = "assets/logo.jpg"
    logo.alt = "Logotipo da Ph Web Software"
    return(logo)
}