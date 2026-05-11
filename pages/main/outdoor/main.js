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

            color:var(--colorWhite);
            background:red;
        }
        :responsive{
            width:95%;
            padding:20% 0px;
        }`

    const outdoor = cE("div",style)
    outdoor.innerHTML = "OUTDOOR"
    return(outdoor)
}