export default function description(d){
    let style = `
        {
            font-size:16px;
            color:var(--colorBlue);
            padding:0px 0px 0px 5%;
        }
        :responsive{
            font-size:14px;
            padding:0px 0px 0px 10%;
        }`

    const description = cE("div",style)
    description.innerHTML = d
    return(description)
}