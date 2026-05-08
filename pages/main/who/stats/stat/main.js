import value from "./value/main.js"
import attribute from "./attribute/main.js"

export default function stat(v,a){
    let style = `
        {
            display:flex;
            flex-direction:column;
            width:30%;
            border-right:3px solid var(--colorBlue);
            border-left:3px solid var(--colorBlue);
            padding:0px 10px;
        }
        :responsive{
            width:45%;
            margin:10px 0px;
        }`

    const stat = cE("div",style)
    stat.appendChild(value(v))
    stat.appendChild(attribute(a))
    return(stat)
}