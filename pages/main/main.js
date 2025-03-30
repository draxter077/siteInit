export default function main(){
    let style = `
        {
            height:25dvh;
            width:100px;
            animation:test 2s linear 0s infinite alternate;
        }
        @keyframes test{
            0%[top:0px;
                background:red;
                width:100px;]
            100%[top:200px;
                background:yellow;
                width:300px;]
        }`

    const main = cE("div", style)
    main.innerHTML = "bem-vindo"
    return(main)
}