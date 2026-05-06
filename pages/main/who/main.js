export default function who(){
    let style = `
        {
            width:100%;
            height:33dvh;
            background:purple;
        }`

    const who = cE("div",style)
    who.id = "who"
    who.innerHTML = "Quem sou eu"
    return(who)
}