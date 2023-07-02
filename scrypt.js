// document.addEventListener("loadstart", ()=>{
     
// })
// document.addEventListener('DOMContentLoaded', ()=>{
//     console.log("page is loaded")
//     localStorage.setItem('load', "loading")
//     sessionStorage.setItem("load", "loading")
//     document.cookie.user="NAMAEFJNAD"
    
// })

var indiv=document.querySelectorAll('.indiv')
var addToCart=document.querySelectorAll(".actions button")
var cartCont=document.querySelector(".cartCont")
var search=document.getElementsByName("search")[0]
const circleCount=document.querySelectorAll(".circle")[0]
const MobileCircleCount=document.querySelectorAll(".circle")[1]
const select=document.querySelector("select")


select.addEventListener('change', function(){
    // console.log(select.value)
    indiv.forEach((item, i)=>{
        var itemName=item.querySelector('.identity').textContent
        // console.log(itemName, select.value)
         if(select.value==itemName){
            console.log(itemName, i, item)
         }
     })
})


var count=0
var arr=[]
var itemsCount=0
var itemsArr=[]

circleCount.textContent=itemsCount
MobileCircleCount.textContent=itemsCount



// addToCart.forEach((item, i)=>{
//     item.addEventListener('click', ()=>{
//         count+=1
//         var elem=item.parentElement.parentNode
//         console.log(i)
//         var obj={}
//         obj.img=elem.querySelector("img").src.slice(22 , elem.querySelector("img").src.length )
//         obj.productName=elem.querySelector(".name").textContent
//         obj.productPrice=elem.querySelector(".price").textContent
//         obj.index=i
//         arr.push(obj)
//         localStorage.setItem(`cartItem`, JSON.stringify(arr))
// //         console.log(JSON.parse(localStorage.getItem("cartItem")))
//     })
// })

var arr=[]
addToCart.forEach((items, i)=>{
    items.addEventListener("click", ()=>{
        if(arr.includes(i)){
           alert("added already")
            return;
        }else{
            arr.push(i)
            itemsCount++
            circleCount.textContent=itemsCount
          MobileCircleCount.textContent=itemsCount
        }
        var obj={}
        var itemParent=items.parentElement.parentElement
        var itemImg=itemParent.querySelector("img").src
        var itemName=itemParent.querySelector(".name").textContent
        var itemPrice=itemParent.querySelector(".price").textContent
          obj={one:itemName,
            two:itemPrice,
            three:itemImg.slice(22, itemImg.length)
        }
      itemsArr.push(obj)
     localStorage.setItem("allMyCarts", JSON.stringify(itemsArr))
    })
})

// indiv.forEach((item, i)=>{
//     item.addEventListener('click', ()=>{
//         var obj={}
//         obj.img=item.querySelector("img").src.slice(22,item.querySelector("img").src.length )
//         obj.productName=item.querySelector(".name").textContent
//         obj.productPrice=item.querySelector(".price").textContent
//         obj.index=i
//         localStorage.setItem(`item`, JSON.stringify(obj))
//     })
// })


// // var values=JSON.parse(localStorage.getItem("cartItem"))
// // values.forEach((item, i)=>{
// //     console.log(item)
// //     // cartCont.append(item.productName)
// // })

// search.addEventListener('input', (e)=>{
//     console.log(e.target.value)
// })

// console.log(search)



const barMobile=document.getElementsByClassName("barMobile")[0]
const mobileNav=document.querySelector(".mobileNav")
const firstButton=document.querySelectorAll(".inner .indiv")[0]
const secondButton=document.querySelectorAll(".inner .indiv")[1]
const target=document.querySelector(".first .innerRight")

var heroPicture=target.querySelector(".indiv img")
var heroBigText=target.querySelector(".indiv .top h1")
var heroText=target.querySelector(".indiv .top .desc")


var landingStatements=[
    {
        pic:"images/menJacket.webp",
        bigName:"Cool glasses",
        desc:"Explore varieties that suit your style"
    },
    {
        pic:"images/womanGown.jpg",
        bigName:"STAND OUT",
        desc:"Be fabulous!!"
    },
]

var domain=heroPicture.src.slice(0, 21)
var totalImgStr=domain + landingStatements[0].pic
heroBigText.textContent=landingStatements[0].bigName
heroText.textContent=landingStatements[0].desc
heroPicture.src=landingStatements[0].pic

barMobile.addEventListener('click', function(){
    if(mobileNav.style.height==="10em"){
        mobileNav.style.height="0px"
    }else{
        mobileNav.style.height="10em"
    }
})

firstButton.addEventListener('click', function(){
    var domain=heroPicture.src.slice(0, 21)
    var totalImgStr=domain + landingStatements[0].pic
    heroBigText.textContent=landingStatements[0].bigName
    heroText.textContent=landingStatements[0].desc
    heroPicture.src=totalImgStr
})
secondButton.addEventListener('click', function(){
    var domain=heroPicture.src.slice(0, 21)
    var totalImgStr=domain + landingStatements[1].pic
    heroBigText.textContent=landingStatements[1].bigName
    heroText.textContent=landingStatements[1].desc
    heroPicture.src=totalImgStr
})




module.export=arr