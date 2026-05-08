import img from "./img/main.js"

export default function link(src, href){
    let style = `
        {
            height:40px;
            margin:0px 0px 0px 30px;
            transition:all 0.5s;
        }
        :hover{
            transform:scale(1.1);
        }
        :responsive{
            height:32px;
        }`

    const link = cE("a",style)
    link.appendChild(img(src))
    link.href = href
    link.target = "_blank"
    return(link)
}