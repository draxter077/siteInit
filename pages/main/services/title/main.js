export default function title(){
    let style = `
        {
            font-size:30px;
            color:var(--colorWhite);
            text-align:right;
            width:100%;
        }
        >span{
            color:var(--colorBlue);
        }
        :responsive{
            font-size:24px;
            text-align:center;
        }`

    const title = cE("div",style)
    title.innerHTML = "Não importa o tamanho da sua necessidade...<br><span>Temos o que você precisa</span>"
    return(title)
}