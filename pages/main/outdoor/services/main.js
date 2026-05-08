import text from './text/main.js'
import roller from './roller/main.js'

export default function services(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            align-items:flex-start;
            background:var(--colorDarkerBlue);
            padding:10px 15px;
            border-radius:10px;
            box-shadow:0px 0px 3px 0px var(--colorBlue);
            margin:7.5% 0px 0px 0px;
        }`

    const services = cE("div",style)
    services.appendChild(text())
    services.appendChild(roller())
    return(services)
}