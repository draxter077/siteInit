export default function title(){
    let style = `
        {
            font-size:30px;
            color:var(--colorWhite);
        }
        :responsive{
            font-size:26px;
            text-align:center;
        }`

    const title = cE("div",style)
    title.innerHTML = `SLOGAN`
    return(title)
}