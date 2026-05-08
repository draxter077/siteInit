export default function title(){
    let style = `
        {
            font-size:30px;
            color:var(--colorBlue);
        }
        :responsive{
            font-size:26px;
            text-align:center;
        }`

    const title = cE("div",style)
    title.innerHTML = `Transformamos sua ideia em uma realidade no mundo digital`
    return(title)
}