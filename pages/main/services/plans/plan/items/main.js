import item from "./item/main.js"

export default function items(is){
    let style = `
        {
            display:flex;
            flex-direction:column;
            margin:20px 0px 0px 0px;
        }`

    const items = cE("div",style)
    for(let i = 0; i < is.length; i++){
        items.appendChild(item(is[i]))
    }
    return(items)
}