export default function ph(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            align-items:center;
            justify-content:space-around;
            width:100%;
            padding:10px 15px;
            background:var(--colorBlue);
        }`

    const ph = cE("div",style)
    return(ph)
}