export default function text(t){   
    let style = `
        {
            font-size:21px;
            color:var(--colorWhite);
        }` 
    const text = cE("div",style)
    text.innerHTML = t
    return(text)
}