const cartCont=document.querySelector("table")
const qtyValue=document.querySelector(".total h3 span")


const allItems=JSON.parse(localStorage.getItem("allMyCarts"))
const revArr=allItems.reverse()
var qty=0
qtyValue.textContent=revArr.length

var values=revArr.map(element => {
     return `
      <tr class="row">
         <td><img src=${element.three} alt=""></td>
         <td>${element.one}</td>
         <td>${element.two}</td>
         <td><input type="number" name="" id="quan" value="1"></td>
         <td><button>Cancel</button></td>
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
    })
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

