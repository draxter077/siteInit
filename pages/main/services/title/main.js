export default function title(){
    let style = `
        {
            font-size:30px;
            color:var(--colorWhite);
            text-align:right;
            width:100%;
        }
        :responsive{
            font-size:24px;
            text-align:center;
        }`

    const title = cE("div",style)
    title.innerHTML = "TÍTULO DOS SERVIÇOS"
    return(title)
}