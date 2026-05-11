export default function img(src){
    let style = `
        {
            height:100%;
            filter:invert(0);
        }`

    const img = cE("img",style)
    img.src = src
    img.alt = "Logotipo de rede social"
    return(img)
}