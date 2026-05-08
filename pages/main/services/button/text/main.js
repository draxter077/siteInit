export default function text(){
    let style = `
        {
            font-size:24px;
            color:var(--colorBlack);
        }
        :responsive{
            font-size:20px;
        }`

    const text = cE("div",style)
    text.innerHTML = "Fale com a Ph"
    return(text)
}