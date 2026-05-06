export default function outdoor(){
    let style = `
        {
            width:90%;
            height:50dvh;
            background:red;
        }`

    const outdoor = cE("div",style)
    outdoor.innerHTML = "Outdoor"
    return(outdoor)
}