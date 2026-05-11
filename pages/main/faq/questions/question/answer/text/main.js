export default function text(t){
    let style = `
        {
            font-size:18px;
            text-align:justify;
            color:var(--colorBlack);
            width:100%;
            padding:2%;
        }
        :responsive{
            font-size:16px;
        }`

    const text = cE("div",style)
    text.innerHTML = t
    return(text)
}