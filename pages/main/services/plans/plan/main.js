import title from "./title/main.js"
import description from "./description/main.js"
import items from "./items/main.js"
import price from "./price/main.js"

export default function plan(p){
    let style = `
        {
            display:flex;
            flex-direction:column;
            background:var(--colorDarkerBlue);
            box-shadow:0px 0px 3px 0px var(--colorBlue);
            border-radius:10px;
            padding:10px 15px;
            width:30%;
            transition:all 0.5s;
        }
        :responsive{
            width:100%;
            margin:10px 0px;
        }
        :hover{
            box-shadow:0px 0px 10px 0px var(--colorBlue);
        }`

    const plan = cE("a",style)
    plan.appendChild(title(p.title))
    plan.appendChild(description(p.description))
    plan.appendChild(items(p.items))
    plan.appendChild(price(p.price))
    plan.href = "https://www.ph.net.br/"
    return(plan)
}