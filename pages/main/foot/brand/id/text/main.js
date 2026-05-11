export default function text(){
    let style = `
        {
            font-size:18px;
            margin:0px 0px 0px 20px;
            color:var(--colorBlack);
            font-weight:900;
        }
        :responsive{
            font-size:16px;
        }`

    const text = cE("div",style)
    text.innerHTML = `NOME DA EMPRESA`
    return(text)
}