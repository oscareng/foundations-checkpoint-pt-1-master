/* eslint-disable no-unused-vars, no-prototype-builtins */
function soup(phrase, bank){
    let finalword = ``
    let workingbank = [...bank]
    for (let i = 0; i < phrase.length; i++){
        if (workingbank.indexOf(phrase[i]) >= 0) {
           finalword += phrase.charAt(i)
           workingbank.splice((workingbank.indexOf(phrase[i])),1)
           console.log(finalword)
           console.log(workingbank)
        }
    }
    if (finalword === phrase){return(true)}
    else {return(false)}
}
