export default function img(src){
    let style = `
        {
            height:32px;
            margin:0px 10px 0px 0px;
            filter:invert(1);
        }
        :responsive{
            height:26px;
        }`

    const img = cE("img",style)
    img.src = src
    img.alt = "Ícone animado"
    return(img)
}