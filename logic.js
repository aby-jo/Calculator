function add(num1,num2){
    return Number(num1)+Number(num2)
}
function difference(num1,num2){
    return Number(num1)-Number(num2)
}
function multiply(num1,num2){
    return Number(num1)*Number(num2)
}
function divide(num1,num2){
    return Number(num1)/Number(num2)
}
function operation(num1,op,num2){
    if(op=="+"){
        return add(num1,num2)
    }
    if(op=="-"){
        return difference(num1,num2)
    }
    if(op=="*")
    {
        return multiply(num1,num2)
    }
    if(op=="/"){
        return divide(num1,num2)
    }
}
function doit(arr){
    let num1 = parseFloat(arr[0]);
    let operator = arr[1];
    let num2 = parseFloat(arr[2]);

    switch (operator) {
        case '+':
            return (num1 + num2).toFixed(2);
        case '-':
            return (num1 - num2).toFixed(2);
        case '*':
            return (num1 * num2).toFixed(2);
        case '/':
            return (num1 / num2).toFixed(2);
        default:
            return "Error";
    }

}
let calcu=document.querySelector(".buttons")
for(let i=1;i<10;i++){
    let btn=document.createElement("button")
    btn.textContent=i
    btn.classList.add("numbbtn")
    calcu.appendChild(btn)
}
let btn0=document.createElement("button")
let btn00=document.createElement("button")
let btn000=document.createElement("button")

btn0.classList.add("numbbtn")
btn00.classList.add("numbbtn")
btn000.classList.add("numbbtn")
btn0.textContent="0"
btn00.textContent="00"
btn000.textContent="000"
calcu.appendChild(btn0)
calcu.appendChild(btn00)
calcu.appendChild(btn000)
let display=document.querySelector(".displaydigit")
let btn=document.querySelectorAll(".numbbtn")
let logdigit=document.querySelector(".logdigit")
let hi=0
btn.forEach(button=>{
    button.addEventListener("click",()=>{
        if(hi==0){
            logdigit.textContent=null
            hi++
        }
        display.textContent+=button.textContent
        logdigit.textContent+=button.textContent

    })
})
let clear=document.querySelector(".clear")
clear.addEventListener("click",()=>{
display.textContent=null
logdigit.textContent=null
ans=[]
count=0})

let equal=document.querySelector(".equal")
equal.addEventListener("click",()=>{
    if (ans.length > 1) {
        ans.push(display.textContent);
        output = doit(ans);
        display.textContent = output;
        if(output=="Error"){
            logdigit.textContent ="Please Click Clear!"
        }
        else{
        logdigit.textContent = output;}
        ans=[]
        count = 0;
    }
    
})

let funcbtn=document.querySelectorAll(".funcbtn")
let count=0
let ans=[]
let output
funcbtn.forEach(button2=>{
    button2.addEventListener("click",()=>{
        count++
        let op=button2.textContent
        let dis=document.querySelector(".displaydigit")
        if(count==1){
                ans.push(dis.textContent)
                ans.push(op)
                dis.textContent=null
                logdigit.textContent += op;
                
        }
        else {
            ans.push(display.textContent);
            output = doit(ans);
            console.log(output)
            display.textContent = null;
            logdigit.textContent = output + op;
            ans = [output];
            ans.push(op);
            count = 1;
        }


    })
})


