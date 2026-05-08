export default function title(t){
    let style = `
        {
            font-size:32px;
            color:var(--colorBlue);
            font-weight:900;
        }
        :responsive{
            font-size:26px;
        }`

    const title = cE("div",style)
    title.innerHTML = t
    return(title)
}