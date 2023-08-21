const button = document.querySelectorAll(".button");
const cart = document.getElementById("cart-value");
const cartButton = document.getElementById("cart")
const bookName = document.querySelectorAll(".bookName")
const prices = document.querySelectorAll(".price")
let cartValue = 0;
let finalPrice=0;
let details = [];
var finalCheck=[];

for(let i=0;i<button.length;i++){
    details.push({
        name: bookName[i].textContent,
        price: parseFloat(prices[i].innerHTML),
        quantity: 0,
    })
}

for(let i=0;i<button.length;i++){
    button[i].addEventListener("click",()=>{
        finalPrice+=details[i].price;               //
        
        cartValue+=1;
        cart.innerText=cartValue;                   // 

        details[i].quantity +=1;

        for(let i=0;i<details.length;i++){
                    if(details[i].quantity>0 && !finalCheck.includes(details[i].name)){
                       finalCheck.push(details[i].name)
                    }
                }
                // console.log(finalCheck)
    })
}

cartButton.addEventListener("click",()=>{
    // console.log("BOYYYYYYYY!!!")
    console.clear()
    for(let i=0;i<details.length;i++){
        
        if(finalCheck.includes(details[i].name)){
            // finalPrice+=l[i].price;
            console.log(`Item name: ${details[i].name} - Quantity: ${details[i].quantity}`)
        }
    }
    // console.log(final)
    console.log(`The total amount is ${parseInt(finalPrice)}$ and ${parseInt(finalPrice*100%100)} cents`)
    // console.log(finalPrice)
})
