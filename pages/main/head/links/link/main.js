export default function link(n,id){
    let style = `
        {
            position:relative;
            font-size:18px;
            margin:0px 0px 0px 20px;
            padding:0px 7px 2px;
            color:black;
            cursor:pointer;
        }
        :responsive{
            margin:0px 5px;
        }
        ::after{
            position:absolute;
            bottom:0%;
            left:0%;
            content:"";
            width:0%;
            height:1px;
            background:black;
            transition:width 0.5s;
        }
        :hover::after{
            width:100%;
        }`

    const link = cE("div",style)
    link.innerHTML = n
    link.addEventListener("click", () => {document.getElementById(id).scrollIntoView()})
    return(link)
}