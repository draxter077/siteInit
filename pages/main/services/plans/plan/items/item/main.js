import img from "./img/main.js"
import text from "./text/main.js"

export default function item(i){
    let style = `
        {
            display:flex;
            flex-direction:row;
            align-items:center;
            margin:0px 0px 10px 0px;
        }`

    const item = cE("div",style)
    item.appendChild(img(i.img))
    item.appendChild(text(i.text))
    return(item)
}