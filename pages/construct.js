import init from "./init/main.js"

export default async function construct(){
    const root = document.getElementById("root")
    const atts = window.location.href.split("?")[1]
    root.innerHTML = ""
    root.appendChild(init())
}