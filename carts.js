const cartCont=document.querySelector("table")
const qtyValue=document.querySelector(".total h3 span")
const buyNow=document.querySelector(".buy")
const tPrice=document.querySelector('.tPrice')
const total=document.querySelector(".total")


var allItems=JSON.parse(localStorage.getItem("allMyCarts"))
const revArr=allItems.reverse()
var qty=0
qtyValue.textContent=revArr.length


var values=revArr.map(element => {
     return `
      <tr class="row">
         <td><img src=${element.three} alt=""></td>
         <td>${element.one}</td>
         <td class="price">${element.two}</td>
         <td style="display:none" class="id">${element.id}</td>
         <td><input type="number" name="" id="quan" value="1"></td>
         <td><button class="cancel">Cancel</button></td>
      </tr>`
});


cartCont.innerHTML=`
<tr>
<th>Product Img</th>
<th>Product name</th>
<th>Product price</th>
<th>Quantity</th>
<th>action</th>
</tr>
${values}
`



const allPrices=document.querySelectorAll(".price")
// var count=0
// allPrices.forEach((item, i)=>{
//     var quantity=item.parentElement.querySelector(".tQuantity").value
//     var price=item.textContent.slice(1, item.length)
//     count=count+ Number(price)* Number(quantity)
// })
// tPrice.innerHTML="$"+count

const row=document.querySelectorAll(".row")

function updatePrice(){
    var amt=0
    row.forEach((row, i)=>{
       var quantity= row.querySelector('#quan').value
       var price= row.querySelector('.price').textContent.slice(1, row.length)
       amt=amt + Number(price)* Number(quantity)
       tPrice.innerHTML="$"+amt
    //    console.log(quantity, price, Number(price)* Number(quantity), amt)
    })
}

updatePrice()

const cancelButton=document.querySelectorAll('.cancel')
cancelButton.forEach((item, i)=>{
    item.addEventListener('click', (e)=>{
        // console.log("first")
        const item=e.currentTarget.parentElement.parentElement
        const parent=e.currentTarget.parentElement.parentElement.parentElement
       const id= item.querySelector(".id").textContent

       const numRows=parent.querySelectorAll(".row").length-1
        const realPosition=numRows-Number(id)

    var localStorageArr=JSON.parse(localStorage.getItem("allMyCarts")).reverse()
    var id2= localStorageArr.length-1-realPosition

     function deleteObjectByKey(id) {
         const updatedObjects =  localStorageArr.filter(obj => obj.id !== id);
        localStorage.setItem("allMyCarts", JSON.stringify(updatedObjects))
        alert("one item deleted")
        window.location.href='http://127.0.0.1:5501/carts.html'
      }

      deleteObjectByKey(id2)
    })
})

const individualRow=cartCont.querySelectorAll('.row')
 individualRow.forEach((row, i)=>{
    const Input=row.querySelector('input')
    Input.addEventListener('change', ()=>{
        var totalItems=0
        if(Input.value<1){
            Input.value=1
        }
        var all=Input.parentElement.parentElement.parentElement
        var allInputs=all.querySelectorAll("input")
        allInputs.forEach((item, i)=>{
            totalItems=totalItems+Number(item.value)
        })
        qtyValue.textContent=totalItems
        updatePrice()
    })
 })


 buyNow.addEventListener('click', ()=>{
    alert("PURCHASE COMPLETED!!")
    var arr=[]
    localStorage.setItem("allMyCarts", JSON.stringify(arr))
    // allItems=JSON.parse(localStorage.getItem("allMyCarts"))
    window.location.href='http://127.0.0.1:5501/'
 })






 var valueee="0"
 var valueee2="1"

//  click
//  dblclick
//  input
//  change
//  load
//  domContentLoaded
// mouseover
// keydown

// individualRow.forEach(element => {
//      element.querySelector()
// });



// var imgs=reversedArr.map(element => {
//     console.log(element)
//     return`
//     <tr>
//     <td><img src=${element.img} alt=""></td>
//    <td>${element.productName}</td>
//    <td>${element.productPrice}</td>
//    <td> <input type="number" name="" id="quan" value="0"></td>
//    <td><button>Cancel</button></td>
// </tr>
//     `
// })

// cartCont.innerHTML=`
// <tr>
// <th>Product Img</th>
// <th>Product name</th>
// <th>Product price</th>
// <th>Quantity</th>
// <th>action</th>
// </tr>
// ${imgs}
// `





// function greetUser(user){
//      console.log("welcome " + user)
// }


// function sum(a, b, c){
//     console.log(a + b + c)
// }

// greetUser("Bola")

// sum(10, 60,5)