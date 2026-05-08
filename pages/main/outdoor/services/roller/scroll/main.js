import text from "./text/main.js"

export default function scroll(){
    let style = `
        {
            display:flex;
            flex-direction:column;
            align-items:flex-start;
            width:fit-content;
            transition:all 0.5s;
        }`

    const scroll = cE("div",style)
    
    let svs = ["otimizados para Google",
        "focados em UX",
        "para geração de leads",
        "com design responsivo",
        "leves e rápidos",
        "para tráfego orgânico",
        "como você precisava"
    ]
    for(let i = 0; i < svs.length; i++){
        scroll.appendChild(text(svs[i]))
    }

    window.addEventListener(
        "load",
        async function a(){
            let i = 0
            while(true){
                let c = scroll.children[i]
                scroll.style.transform = `translateY(-${i*c.getBoundingClientRect().height}px)`
                await new Promise(resolve => setTimeout(resolve, 600))
                scroll.appendChild(text(c.innerHTML))
                i += 1
                await new Promise(resolve => setTimeout(resolve, 1500))
            }
        }
    )
    return(scroll)
}