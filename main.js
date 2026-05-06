import main from "./pages/main/main.js"

export function randomName(names){
    const chars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", 
                "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
            ]
    let name = ""
    while(name == ""){
        for(let k = 0; k < 5; k++){
            let n = Math.floor((chars.length)*Math.random())
            name += chars[n]
        }
        for(let l = 0; l < names.length; l++){
            if(name == names[l]){
                name = ""
                break
            }
        }
    }
    return(name)
}

// Cria a style tag e a popula com reset.css
document.getElementsByTagName("head")[0].appendChild(document.createElement("style"))
const resetCss = `
    html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big, 
    cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,
    dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article, 
    aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,
    time,mark,audio,video,button,input,textarea{
        display:block;
        background:none;
        margin:0px;
        padding:0px;
        border:none;
        font-size:100%;
        font:inherit;
        vertical-align:baseline;
        text-decoration:none;
        font-weight:none;
        outline:none;
        -webkit-tap-highlight-color:transparent;
        box-sizing:border-box;
    }
    html {
        scroll-behavior:smooth;
    }
    span{
        display:inline-block;
    }
    input:focus,button:focus{
        outline:none;
        border:auto;
    }
    ol,ul{
        list-style:none;
    }
    blockquote,q{
        quotes:none;
    }
    blockquote:before,blockquote:after,q:before,q:after{
        content:'';
        content:none;
    }
    table{
        border-collapse:collapse;
        border-spacing:0;
    }
    :root{
    	--colorWhite:rgb(245,245,245);
    	--colorBlack:rgb(20,20,20);
    }
    @font-face{
        font-family:"Garet";
        src:url("https://www.ph.net.br/assets/font/Garet-Book.otf");
    }
    body{
    	box-sizing:border-box;
    	font-family:system-ui;
    	background:var(--colorBlack);
    	cursor:default;
	    user-select:none;
        line-height:1.3;
        width:100%;
    }
    ::-webkit-scrollbar{
    	height:3px;
        width:3px;
    	background:none;
    }
    ::-webkit-scrollbar-track{
        background:none;
    	margin:0px;
    }
    ::-webkit-scrollbar-thumb{
        background:var(--colorBlack);
        border-radius:20px;
    }
    ::-webkit-scrollbar-button{
        height:0px;
	    width:0px;
    	background:none;
        padding:0px;
        margin:0px;
    }`
document.getElementsByTagName("style")[0].innerHTML = resetCss.replaceAll("\n","").replaceAll("\t","").replaceAll(" ","")

window.cE = function cE(t, stl){
    function addClass(){
        let classNames = "", types = 0, stls = []
        stl = stl.replaceAll("\n","").replaceAll("\t","").replaceAll("  ","").replaceAll(", ",",") // Formata o stl recebido
        // Encontra os tipos (geral, :responsive, :hover...) encontrados no stl
        types = stl.split("}").length - 1
        // Separa os parâmetros do estilo principal
        stls = stl.replaceAll("{","").split("}")[0].split(";") // "atr:value"... o último elemento é "" devido ao split
        // Organiza os estilos já salvos na tag style
        let stylesInTag = document.getElementsByTagName("style")[0].innerHTML
        stylesInTag = stylesInTag.split("}") // .name{atr:value além do resetCss
        // Separa os nomes dos pares de atributos
        let classNamesInTag = []
        let classAtrsInTag = []
        for(let i = 0; i < stylesInTag.length; i++){
            try{
                classAtrsInTag.push(stylesInTag[i].split("{")[1].replaceAll(";",""))
                classNamesInTag.push(stylesInTag[i].split("{")[0].replaceAll(".",""))
            }catch{}
        }

        // Compara o geral, -1 para não pegar o último elemento vazio
        for(let i = 0; i < stls.length - 1; i++){
            let boo = classAtrsInTag.indexOf(stls[i])
            if(boo != -1){classNames += ` ${classNamesInTag[boo]}`}
            else{
                let cn = randomName(classNamesInTag)
                document.getElementsByTagName("style")[0].innerHTML += `.${cn}{${stls[i]};}`
                classNames += ` ${cn}`
            }
        }
        // Compara os específicos, se existentes
        if(types > 1){
            for(let i = 1; i < stl.split("}").length - 1; i++){
                let spec = stl.split("}")[i]
                // Encontra o tipo do específico e busca por similares
                if(spec.split(" ")[0] == "@keyframes"){
                    document.getElementsByTagName("style")[0].innerHTML += spec.replaceAll("[","{").replaceAll("]","}") + "}"
                }
                else if(spec.split("{")[0] == ":responsive"){ // CONTINUAR DESENVOLVENDO
                    let stlsR = spec.split("{")[1].split(";")
                    for(let k = 0; k < stlsR.length - 1; k++){
                        let cn = randomName(classNamesInTag)
                        document.getElementsByTagName("style")[0].innerHTML += `@media screen and (max-width:1000px){.${cn}{${stlsR[k]};}}`
                        classNames += ` ${cn}`
                    }
                }
                else if(spec.split("{")[0].split("::").length > 0){ // CONTINUAR DESENVOLVENDO
                    let cn = randomName(classNamesInTag)
                    document.getElementsByTagName("style")[0].innerHTML += `.${cn}${spec}}`
                    classNames += ` ${cn}`
                }
                else if(spec.split("{")[0].split(":").length > 1){ // CONTINUAR DESENVOLVENDO
                    let xPseudo = spec.split("{")[0].split(":")[1]
                    let stlsX = spec.split("{")[1].split(";")
                    for(let k = 0; k < stlsX.length - 1; k++){
                        let cn = randomName(classNamesInTag)
                        document.getElementsByTagName("style")[0].innerHTML += `.${cn}:${xPseudo}{${stlsX[k]};}`
                        classNames += ` ${cn}`
                    }
                }
            }
        }
        return(classNames)
    }

    const el = document.createElement(t)
    if(stl != undefined){el.className = addClass()}
    return(el)
}

window.construct = function construct(p){
    const root = document.getElementById("root")
    root.innerHTML = ""
    if(p == undefined){
        if(window.location.href.split("br/")[1] != undefined && window.location.href.split("br/")[1] != ""){
            let paths = window.location.href.split("br/")[1].split("/")
            // if(paths[0] == "teste"){root.appendChild()}
            // else{root.appendChild(main())}
            root.innerHTML = paths
        }
        else{
            root.appendChild(main())
        }
    }
    // else{
    // history.pushState({}, "", p.page);
    //     if(p.page == "type1"){root.appendChild(type1(p.data))}
    //     else if(p.page == "type2"){root.appendChild(type2(p.data))}
    // }
}

//window.api_url = ""
//axios.defaults.headers.common["ngrok-skip-browser-warning"] = "69420"

construct()