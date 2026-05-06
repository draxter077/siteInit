export default function copyright(){
    let style = `
        {
            font-size:15px;
            color:var(--colorWhite);
            padding:15px;
        }`

    const copyright = cE("div",style)
    copyright.innerHTML = `${window.location.href.split("//")[1].split("/")[0]} © ${new Date().getFullYear()} Todos os direitos reservados`
    return(copyright)
}