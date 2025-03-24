import main from "./main/main.js"

export default async function construct(){
    const root = document.getElementById("root")
    const atts = window.location.href.split("?")[1]
    if(atts != undefined){
        const paths = atts.split("/")
    }
    root.innerHTML = ""
    root.appendChild(main())
}