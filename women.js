var count = 0;
var arr = [];
var itemsCount = 0;
var itemsArr = [];
var indiv = document.querySelectorAll(".indiv");
var addToCart = document.querySelectorAll(".actions button");
var cartCont = document.querySelector(".cartCont");
var search = document.getElementsByName("search")[0];
var circleCount = document.querySelectorAll(".circle")[0];
const MobileCircleCount = document.querySelectorAll(".circle")[1];
const select = document.querySelector("select");
const allContents = document.querySelector(".inner");
circleCount.textContent = itemsCount;
MobileCircleCount.textContent = itemsCount;
var itemId = -1;

var arr = [];
addToCart.forEach((items, i) => {
  items.addEventListener("click", () => {
    if (arr.includes(i)) {
      alert("added already");
      return;
    } else {
      arr.push(i);
      itemsCount++;
      circleCount.textContent = itemsCount;
      MobileCircleCount.textContent = itemsCount;
      itemId++;
    }
    var obj = {};
    var itemParent = items.parentElement.parentElement;
    var itemImg = itemParent.querySelector("img").src;
    var itemName = itemParent.querySelector(".name").textContent;
    var itemPrice = itemParent.querySelector(".price").textContent;

    obj = {
      one: itemName,
      two: itemPrice,
      three: itemImg.slice(22, itemImg.length),
      id: itemId,
    };
    itemsArr.push(obj);
    localStorage.setItem("allMyCarts", JSON.stringify(itemsArr));
  });
});

search.addEventListener("input", (e) => {
  var searchText = search.value.toLowerCase();
  const listItems = document.querySelectorAll(".indiv");
  for (let i = 0; i < listItems.length; i++) {
    const listItem = listItems[i];
    const text = listItem.querySelector(".identity").textContent.toLowerCase();

    if (text.includes(searchText)) {
      listItem.style.display = "flex"; // Show the matching item
    } else {
      listItem.style.display = "none"; // Hide non-matching items
    }
  }
});

select.addEventListener("change", () => {
  const selected = select.value.toLowerCase();
  const listItems = document.querySelectorAll(".indiv");
  for (let i = 0; i < listItems.length; i++) {
    const listItem = listItems[i];
    const text = listItem.querySelector(".identity").textContent.toLowerCase();

    if (text.includes(selected)) {
      listItem.style.display = "flex"; // Show the matching item
    } else {
      listItem.style.display = "none"; // Hide non-matching items
    }
  }
});
