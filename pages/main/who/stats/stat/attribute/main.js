export default function attribute(a){
    let style = `
        {
            font-size:21px;
            color:var(--colorWhite);
        }
        :responsive{
            font-size:18px;
        }`

    const attribute = cE("div",style)
    attribute.innerHTML = a
    return(attribute)
}