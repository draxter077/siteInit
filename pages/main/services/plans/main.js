import plan from "./plan/main.js"

export default function plans(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            align-items:flex-start;
            width:100%;
            justify-content:space-around;
            margin:2.5% 0px 0px 0px;
        }
        :responsive{
            flex-direction:column;
            align-items:center;
        }`

    const plans = cE("div",style)
    plans.appendChild(plan(
        {
            title:"Plano Completo",
            description:"Focado em pequenas e médias empresas",
            items:[
                {img:"/assets/icons/domain.png",text:"Domínio .br"},
                {img:"/assets/icons/www.png",text:"Site profissional"},
                {img:"/assets/icons/email.png",text:"E-mail corporativo para 5 usuários"},
                {img:"/assets/icons/refresh.png",text:"Atualizações ilimitadas"},
            ],
            price:"Mensal de R$ <span>199,99</span>"
        }
    ))
    plans.appendChild(plan(
        {
            title:"Site avulso",
            description:"Ideal para um projeto pessoal",
            items:[
                {img:"/assets/icons/domain.png",text:"Domínio .br por 1 ano"},
                {img:"/assets/icons/www.png",text:"Site profissional"},
            ],
            price:"A partir de R$ <span>1.599,99</span>"
        }
    ))
    plans.appendChild(plan(
        {
            title:"Soluções corporativas",
            description:"Para necessidades robustas",
            items:[
                {img:"/assets/icons/www.png",text:"Desenvolvemos softwares empresariais do tipo CRM, ERP, e-commerce, BI, SAE, SAD, SIE, SCM, entre outros"},
            ],
            price:"<span>Entre em contato</span>"
        }
    ))
    return(plans)
}