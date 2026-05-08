export default function price(p){
    let style = `
        {
            font-size:14px;
            color:var(--colorWhite);
            text-align:right;
            border-top:1px solid var(--colorBlue);
            margin:10px 0px 0px 0px;
            padding:5px 0px 0px 0px;
        }
        >span{
            font-size:26px;
            margin:0px 0px 0px 5px;
        }`

    const price = cE("div",style)
    price.innerHTML = p
    return(price)
}