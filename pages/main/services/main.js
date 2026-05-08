import title from "./title/main.js"
import plans from "./plans/main.js"
import button from "./button/main.js"

export default function services(){
    let style = `
        {
            display:flex;
            flex-direction:column;
            align-items:center;
            width:90%;
            margin:5% 0px 0px 0px;
        }
        :responsive{
            width:95%;
            margin:20% 0px 0px 0px;
        }`

    const services = cE("div",style)
    services.id = "services"
    services.appendChild(title())
    services.appendChild(plans())
    services.appendChild(button())
    return(services)
}