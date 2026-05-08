export default function title(){
    let style = `
        {
            font-size:32px;
            color:var(--colorWhite);
            font-weight:900;
            border-right:1px solid var(--colorBlue);
            border-left:1px solid var(--colorBlue);
            padding:10px 30px;
        }
        :responsive{
            font-size:24px;
        }`

    const title = cE("div",style)
    title.innerHTML = "Perguntas frequentes"
    return(title)
}