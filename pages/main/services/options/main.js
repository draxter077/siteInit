export default function options(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            align-items:flex-start;
            width:100%;
            justify-content:space-around;
            margin:2.5% 0px 0px 0px;

            background:red;
        }
        :responsive{
            flex-direction:column;
            align-items:center;
        }`

    const options = cE("div",style)
    options.innerHTML = "OPÇÕES DE SERVIÇOS"
    return(options)
}