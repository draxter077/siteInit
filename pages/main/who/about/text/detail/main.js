export default function detail(){
    let style = `
        {
            font-size:18px;
            margin:10px 0px 0px 0px;
            text-align:justify;
            color:var(--colorWhite);
        }
        :responsive{
            font-size:16px;
        }`

    const detail = cE("div",style)
    detail.innerHTML = `TEXTO DESCRIÇÃO DA EMPRESA, COM DESCRIÇÃO DE ATIVIDADES E MENÇÃO DE PÚBLICO ALVO`
    return(detail)
}