import copyright from "./copyright/main.js"

export default function foot(){
    let style = `
        {
            display:flex;
            flex-direction:column;
            align-items:center;
            width:100%;
            height:fit-content;
            background:var(--colorBlack);
        }`

    const foot = cE("div",style)
    foot.appendChild(copyright())
    return(foot)
}