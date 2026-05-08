export default function text(t){
    let style = `
        {
            font-size:21px;
            color:var(--colorWhite);
            font-weight:900;
        }
        :responsive{
            font-size:18px;
        }`

    const text = cE("div",style)
    text.innerHTML = t
    return(text)
}