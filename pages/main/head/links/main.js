export default function links(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            align-items:center;
            justify-content:space-between;
            width:50%;
            height:15px;
            background:var(--colorBlack);
        }`

    const links = cE("div",style)
    return(links)
}