export default function description(d){
    let style = `
        {
            font-size:16px;
            color:var(--colorWhite);
            line-height:1.0;
        }`

    const description = cE("div",style)
    description.innerHTML = d
    return(description)
}