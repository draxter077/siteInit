export default function value(v){
    let style = `
        {
            font-size:36px;
            color:var(--colorWhite);
        }
        :responsive{
            font-size:30px;
        }`

    const value = cE("div",style)
    value.innerHTML = "+0"
    value.id = randomName([])

    window.addEventListener(
        "scroll",
        async function a(){
            let e = document.getElementById(value.id)
            if(window.scrollY > e.offsetTop - window.innerHeight){
                for(let i = 0; i <= v; i++){
                    value.innerHTML = `+${i}`
                    await new Promise(r => setTimeout(r, 2000/v));
                }
                this.window.removeEventListener("scroll",a)
            }
        }
    )
    return(value)
}