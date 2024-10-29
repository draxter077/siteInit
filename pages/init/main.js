export default function init(){
    let style = `
        {
            height: 100dvh;
            width: 100%;
        }`

    const init = createElementToPage(undefined, "div", style)
    init.innerHTML = "bem-vindo"
    return(init)
}