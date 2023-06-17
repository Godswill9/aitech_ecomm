const cartCont=document.querySelector(".cartCont")

const cartItems=JSON.parse(localStorage.getItem("cartItem"))
const reversedArr=cartItems.reverse()

var imgs=reversedArr.map(element => {
    console.log(element)
    return`<img src=${element.img}>
       <h1>${element.productName}</h1>
       <h3>${element.productPrice}</h3>
       <hr>
    `
})

cartCont.innerHTML=imgs

