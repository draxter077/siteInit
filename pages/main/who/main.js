import about from "./about/main.js"

export default function who(){
    let style = `
        {
            display:flex;
            flex-direction:column;
            align-items:center;
            width:100%;
        }`

    const who = cE("div",style)
    who.id = "who"
    who.appendChild(about())
    return(who)
}