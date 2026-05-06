export default function faq(){
    let style = `
        {
            width:100%;
            height:33dvh;
            background:green;
        }`

    const faq = cE("div",style)
    faq.id = "faq"
    faq.innerHTML = "FAQ"
    return(faq)
}