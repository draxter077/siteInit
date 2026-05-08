export default function text(){
    let style = `
        {
            margin:0px 10px 0px 0px;
            font-size:21px;
            color:var(--colorWhite);
        }`
    
    const text = cE("div",style)
    text.innerHTML = "Sites"
    return(text)
}