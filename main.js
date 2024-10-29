import construct from "./pages/construct.js"

window.createElementToPage = function createElementToPage(n, t, stl){
    function addClass(){
        function randomName(names){
            const chars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", 
                            "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
            let name = ""
            while(true){
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
                if(name != ""){
                    break
                }
            }
            return(name)
        }

        let stylesTag = document.getElementsByTagName("style")[0].innerHTML
        let styles = stylesTag
                        .replaceAll("\n", "")
                        .replaceAll("  ", "")
                        .split("}")

        let stylesGotten = stl.split("}")
        stl = stylesGotten[0] + "}"
        let style = stylesGotten[0]
                        .replaceAll("\n", "")
                        .replaceAll("  ", "")
                        .replace("{", "")
                        .replace("}", "")
                        .split(";")
        let stylesNames = []
        let stylesNamesObject = []
        let styleAtr = []
        for(let i = 0; i < styles.length; i++){
            let s = styles[i].split("{")
            let n = s[0]
            let b = s[1]
            if(n[0] == "."){
                stylesNames.push(n)
            }
            if(b != undefined && b != ""){
                let bs = b.split(";")
                let atrValues = []
                for(let j = 0; j < bs.length; j++){
                    let ats = bs[j].split(": ")
                    if(ats[0] != undefined && ats[0] != ""){
                        atrValues.push([ats[0], ats[1]])
                    }
                }
                stylesNamesObject.push([n, atrValues])
            }
        }
        for(let j = 0; j < style.length; j++){
            let s = style[j].split(": ")
            if (s[0] != ""){
                styleAtr.push([s[0], s[1]])
            }
        }
        
        const el = document.createElement(t)
        let className = ""
        if(n == undefined){
            for(let k = 0; k < stylesNamesObject.length; k++){
                let sN = stylesNamesObject[k]
                let es = 0;
                for(let l = 0; l < sN[1].length; l++){
                    let atrN = sN[1][l][0]
                    let atrA = sN[1][l][1]
                    for(let m = 0; m < styleAtr.length; m++){
                        if(styleAtr[m][0] == atrN && styleAtr[m][1] == atrA){
                            es += 1
                            break
                        }
                    }
                }   
                if(es == styleAtr.length && es == sN[1].length){
                    className = sN[0].replace(".", "")
                    break
                }
            }
        }
        if(className == ""){
            className = randomName(stylesNames)
            document.getElementsByTagName("style")[0].innerHTML += `.${className}${stl.replaceAll("\n", "").replaceAll("  ","")}`
            for(let p = 1; p < stylesGotten.length; p++){
                let inst = stylesGotten[p]
                let insN = inst.split("{")[0].replaceAll("\n", "").replaceAll("  ", "")
                let insA = inst.split("{")[1]
                if(insN == ":responsive"){
                    document.getElementsByTagName("style")[0].innerHTML += `@media screen and (max-width: 1000px){.${className}{${insA.replaceAll("\n", "").replaceAll("  ","")}}}`
                }
                else if(insN != undefined && insN != ""){
                    document.getElementsByTagName("style")[0].innerHTML += `.${className}${insN}{${insA.replaceAll("\n", "").replaceAll("  ","")}}`
                }
            }
        }
        return(className)
    }

    const el = document.createElement(t)
    el.className = addClass()
    return(el)
}

axios.defaults.headers.common["ngrok-skip-browser-warning"] = "69420"
document.getElementsByTagName("head")[0].appendChild(document.createElement("style"))
construct()