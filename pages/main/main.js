export default function main(){
    let style = `
        {
            height: 100dvh;
            width: 100%;
        }`

    const main = cE("div", style)
    main.innerHTML = "bem-vindo"
    return(main)
}