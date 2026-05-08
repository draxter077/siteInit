export default function text(t){
    let style = `
        {
            font-size:18px;
            color:var(--colorWhite);
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