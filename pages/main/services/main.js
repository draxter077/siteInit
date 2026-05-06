export default function services(){
    let style = `
        {
            width:90%;
            height:75dvh;
            background:yellow;
        }`

    const services = cE("div",style)
    services.id = "services"
    services.innerHTML = "Services"
    return(services)
}