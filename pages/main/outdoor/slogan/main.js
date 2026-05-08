export default function slogan(){
    let style = `
        {
            position:relative;
            width:fit-content;
            font-size:40px;
            color:var(--colorWhite);
            padding:0px 40px 20px;
        }
        :responsive{
            font-size:28px;
        }
        ::after{
            position:absolute;
            bottom:0%;
            left:0%;
            content:"";
            width:0%;
            height:2px;
            background:var(--colorBlue);
            animation:movingDot 2s ease-in-out 0s infinite alternate;
        }
        @keyframes movingDot{
            0%[left:0%;width:0%;]
            40%[left:40%;width:20%;]
            100%[left:100%;width:0%;]
        }`

    const slogan = cE("div",style)
    slogan.innerHTML = "Somos especialistas em desenvolvimento web"
    return(slogan)
}