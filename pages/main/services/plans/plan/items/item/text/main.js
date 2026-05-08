export default function text(t){
    let style = `
        {
            font-size:18px;
            color:var(--colorWhite);
        }
        :responsive{
            font-size:16px;
        }`

    const text = cE("div",style)
    text.innerHTML = t
    return(text)
}