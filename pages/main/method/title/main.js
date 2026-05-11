export default function title(){
    let style = `
        {
            font-size:30px;
            color:var(--colorBlack);
        }
        :responsive{
            font-size:24px;
            text-align:center;
        }`

    const title = cE("div",style)
    title.innerHTML = "TÍTULO DOS MÉTODOS"
    return(title)
}