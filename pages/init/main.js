export default function init(){
    let style = `
        {
            height: 100dvh;
            width: 100%;
        }`

    const init = cE("div", style)
    init.innerHTML = "bem-vindo"
    return(init)
}