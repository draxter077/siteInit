import stat from "./stat/main.js"

export default function stats(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            align-items:flex-start;
            justify-content:space-around;
            width:100%;
            background:var(--colorDarkerBlue);
            box-shadow:0px 0px 2px 0px var(--colorBlue);
            padding:2.5% 0px;
            margin:3% 0px 0px 0px;
        }
        :responsive{
            margin:5% 0px 0px 0px;
            flex-wrap:wrap;
        }`

    const stats = cE("div",style)
    stats.appendChild(stat((new Date().getFullYear()-2020),"Anos de experiência"))
    stats.appendChild(stat(30,"Empresas satisfeitas"))
    stats.appendChild(stat(100,"Sites ativos"))
    return(stats)
}