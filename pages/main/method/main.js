import title from "./title/main.js"
import items from "./items/main.js"

export default function method(){
    let style = `
        {
            display:flex;
            flex-direction:column;
            align-items:center;
            width:90%;
            margin:5% 0px 0px 0px;
            border-radius:5px;
            padding:20px 25px;
            background:var(--colorDarkerBlue);
            box-shadow:0px 0px 3px 0px var(--colorBlue);
        }
        :responsive{
            width:95%;
            margin:20% 0px 0px 0px;
        }`

    const method = cE("div",style)
    method.id = "method"
    method.appendChild(title())
    method.appendChild(items([
        {img:"/assets/icons/google.png",title:"Otimizado para SEO/Google",description:"Você estará onde seus clientes estão"},
        {img:"/assets/icons/user.png",title:"Baseado nas últimas recomendações de UX",description:"Sua empresa não para no tempo. Seu site também não"},
        {img:"/assets/icons/deal.png",title:"Focado em geração de leads",description:"Não basta ser um site bonito"},
        {img:"/assets/icons/responsive.png",title:"Design responsivo",description:"Para todos os clientes"},
        {img:"/assets/icons/code.png",title:"Leve e rápido",description:"Seu cliente não terá tempo de pensar na concorrência"},
        {img:"/assets/icons/marketing.png",title:"Gerador de tráfego orgânico",description:"Sua marca naturalmente sendo vista por quem você quer"},
        {img:"/assets/icons/global.png",title:"Exatamente como você precisava",description:"Você não precisa de mais uma dor de cabeça"}
    ]))
    return(method)
}