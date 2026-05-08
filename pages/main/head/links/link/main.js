export default function link(n,id){
    let style = `
        {
            position:relative;
            font-size:21px;
            padding:2px 7px 2px;
            margin:0px 0px 0px 10px;
            color:var(--colorWhite);
            cursor:pointer;
        }
        :responsive{
            margin:0px 5px;
            font-size:18px;
            padding:1px 7px 1px;
        }
        ::after{
            position:absolute;
            bottom:0%;
            left:0%;
            z-index:-1;
            content:"";
            width:2px;
            height:100%;
            background:var(--colorWhite);
            transition:width 0.25s;
        }
        :hover::after{
            width:5px;
        }`

    const link = cE("div",style)
    link.innerHTML = n
    link.addEventListener("click", () => {document.getElementById(id).scrollIntoView()})
    return(link)
}