export default function value(v){
    let style = `
        {
            font-size:36px;
            color:var(--colorWhite);
        }
        :responsive{
            font-size:30px;
        }`

    const value = cE("div",style)
    value.innerHTML = v
    return(value)
}