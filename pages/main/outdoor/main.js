import slogan from "./slogan/main.js"
import services from "./services/main.js"

export default function outdoor(){
    let style = `
        {
            position:relative;
            display:flex;
            flex-direction:column;
            align-items:center;
            width:90%;
            text-align:center;
            padding:7.5% 0px;
        }
        :responsive{
            width:95%;
            padding:20% 0px;
        }`

    const outdoor = cE("div",style)
    outdoor.appendChild(slogan())
    outdoor.appendChild(services())
    return(outdoor)
}