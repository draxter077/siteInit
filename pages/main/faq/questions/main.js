import question from "./question/main.js"

export default function questions(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            align-items:flex-start;
            justify-content:space-between;
            flex-wrap:wrap;
            width:100%;
            margin:2.5% 0px 0px 0px;
        }`

    const questions = cE("div",style)
    let qs = [
        {question:"Teste",answer:"Teste Teste Teste Teste Teste Teste"},
        {question:"Teste",answer:"Teste Teste Teste Teste Teste Teste"},
        {question:"Teste",answer:"Teste Teste Teste Teste Teste Teste"},
        {question:"Teste",answer:"Teste Teste Teste Teste Teste Teste"},
        {question:"Teste",answer:"Teste Teste Teste Teste Teste Teste"}
    ]

    for(let i = 0; i < qs.length; i++){
        questions.appendChild(question(qs[i]))
    }
    return(questions)
}