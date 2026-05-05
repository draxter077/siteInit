export default function logo(){
    let style = `
        {
            height:50px;
            width:150px;
            background:var(--colorBlack);
            color:var(--colorWhite);
        }`

    const logo = cE("div",style)
    logo.innerHTML = "LOGO"
    return(logo)
}