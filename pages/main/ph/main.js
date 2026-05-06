import text from "./text/main.js"
import logo from "./logo/main.js"

export default function ph(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            align-items:center;
            justify-content:center;
            width:100%;
            padding:10px 15px;
            background:linear-gradient(45deg, rgb(50,150,250) 10%, rgb(240,240,240) 15%, rgb(50,150,250) 20%);
            background-size:200%;
            background-position:100%;
            cursor:pointer;
            box-shadow:0px 0px 2px 1px rgb(50,150,250);
        }
        :hover{
            animation:slide 0.66s linear 0s 1 forwards;
        }
        @keyframes slide{
            0%[background-position:100%;]
            100%[background-position:-100%;]
        }`

    const ph = cE("a",style)
    ph.href = "https://www.ph.net.br"
    ph.target = "_blank"
    ph.appendChild(text())
    ph.appendChild(logo())
    return(ph)
}