export default function copyright(){
    let style = `
        {
            font-size:15px;
            color:var(--colorWhite);
            margin:20px 0px 0px 0px;
        }`

    const copyright = cE("div",style)
    copyright.innerHTML = `Ph Web Software © ${new Date().getFullYear()} Todos os direitos reservados`
    return(copyright)
}