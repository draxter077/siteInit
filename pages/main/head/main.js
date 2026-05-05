import logo from "./logo/main.js"
import links from "./links/main.js"

export default function head(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            align-items:center;
            justify-content:space-around;
            width:100%;
            padding:10px 15px;
            background:var(--colorWhite);
        }`

    const head = cE("div",style)
    head.appendChild(logo())
    head.appendChild(links())
    return(head)
}