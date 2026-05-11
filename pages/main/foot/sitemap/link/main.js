export default function link(href, t){
    let style = `
        {
            font-size:14px;
            font-weight:900;
            color:var(--colorBlack);
            border-bottom:1px solid var(--colorBlack);
            padding:0px 5px;
            transition:all 0.5s;
        }
        :hover{
            border-bottom:1px solid var(--colorWhite);
        }`

    const link = cE("a",style)
    link.innerHTML = t
    link.href = href
    link.target = "_blank"
    return(link)
}