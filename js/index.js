

// Our Animation loading

function loadAnim() {
  var loader = document.querySelector(".loader");
  var loaderText = document.getElementById("spanText");
  var mainContent = document.querySelector(".container-main");

  // Show loader initially
  loader.style.display = "block";

  // After 7 seconds, hide the loader and show the main container
  setTimeout(function () {
    loader.style.display = "none";
    loaderText.style.display = "none"
    mainContent.style.display = "block";
  }, 7000);
}

// Call the loadAnim function when your page is ready
document.addEventListener("DOMContentLoaded", loadAnim);


// Close the form order


// For calculating the prices of all Fried Rice altogether
const rice1 = document.getElementById("calculateRice1");
const rice2 = document.getElementById("calculateRice2");
const rice3 = document.getElementById("calculateRice3");
// let RicePrices = [2500, 2500, 2500]
let OriginalPrice = document.getElementById("price1");
let SecondPrice = document.getElementById("price2");
let ThirdPrice = document.getElementById("price3")
rice1.addEventListener("click", function CalculateRicePriceAll (){
//    console.log(OriginalPrice.textContent)
    alert(OriginalPrice.textContent * 3)
})



// For Navbar Section
// Defining the icons variable

const closeNavs = document.getElementById("closeNavs")
const openNavs = document.getElementById("openNavs");
let navLinksContainer = document.querySelector(".nav-links")
// let userName = document.querySelector(".userNameContainer")
openNavs.addEventListener("click", function OpenNavsLinks() {
    // alert("I got clicked")
    if (navLinksContainer.style.display = "none") {
        navLinksContainer.style.display = "block"
        openNavs.style.display = "none"
        closeNavs.style.display = "block"
        // console.log(userName)
    }
})
// for closing the nav-links
closeNavs.addEventListener("click", function closeNavLinks() {
    if (navLinksContainer.style.display = "block") {
        navLinksContainer.style.display = "none"
        openNavs.style.display = "block"
        closeNavs.style.display = "none"
    }
})

// // To be able to close the navbar section when you click on the home anchor Link
const AnchorNav = document.querySelector(".nav-1")
AnchorNav.addEventListener("click", function () {
    if (navLinksContainer.style.display = "block") {
        navLinksContainer.style.display = "none"
        closeNavs.style.display = "none"
        openNavs.style.display = "block"
    }
})

// To be able to close the navbar section when you click on the menu anchor Link
const menurNav = document.querySelector(".nav-2")
menurNav.addEventListener("click", function () {
    if (navLinksContainer.style.display = "block") {
        navLinksContainer.style.display = "none"
        closeNavs.style.display = "none"
        openNavs.style.display = "block"
    }
})

// To be able to close the navbar section when you click on the about anchor Link
const aboutNav = document.querySelector(".nav-3")
aboutNav.addEventListener("click", function () {
    if (navLinksContainer.style.display = "block") {
        navLinksContainer.style.display = "none"
        closeNavs.style.display = "none"
        openNavs.style.display = "block"
    }
})

// To be able to close the navbar section when you click on the about anchor Link
const BookTableNav = document.querySelector(".nav-4")
BookTableNav.addEventListener("click", function () {
    if (navLinksContainer.style.display = "block") {
        navLinksContainer.style.display = "none"
        closeNavs.style.display = "none"
        openNavs.style.display = "block"
    }
})

// For Oredering online//
// This button is going to return a message of order of conformation when clicked
// function MessageToIndividual() {
//     let make_Order_Box = document.querySelector(".makeOrder")
//     console.log(make_Order_Box)
//     alert("We recieved Your Order - Thanks For Your Patronage")
// }
let orderAction = document.querySelectorAll(".orderBtn").length;
for (let i = 0; i < orderAction; i++) {
    document.querySelectorAll(".orderBtn")[i].addEventListener("click", function () {
        let make_Order_Box = document.querySelector(".makeOrder")
    console.log(make_Order_Box);
    if (make_Order_Box.style.display = "none") {
        make_Order_Box.style.display = "block"
    }
    // alert("We recieved Your Order - Thanks For Your Patronage")
    })
    
}
function closeOrderBox() {
         let make_Order_Box = document.querySelector(".makeOrder")
    console.log(make_Order_Box);
    if (make_Order_Box.style.display = "block") {
        make_Order_Box.style.display = "none"
    }
}

var closeOrderBTN = document.getElementById("closeOrderForm");
closeOrderBTN.addEventListener("click", ()=>{
     let make_Order_Box = document.querySelector(".makeOrder");
    make_Order_Box.style.display = "none";
})
// This code is going to be responsible for hiding and closing the foods
let cardFoodsExempt = document.querySelector(".cardsforFood")
let foodContainerAll = document.getElementById("forAllFoods");
foodContainerAll.addEventListener("click", function HideAll() {
    if (cardFoodsExempt.style.contentVisibility = "hidden") {
        cardFoodsExempt.style.contentVisibility = "visible"
        EgusiSoups.style.contentVisibility = "hidden"
        AllOkroSoups.style.contentVisibility = "hidden"
        amalaMeals.style.contentVisibility = "hidden"
        MeatPieMeal.style.contentVisibility = "hidden"
        FriedRiceFoods.style.contentVisibility = "hidden"
        eggSuaceFoods.style.contentVisibility = "hidden"

        // applying click style on them
        foodContainerAll.style.backgroundColor = "rgba(20, 18, 18, 0.808)"
        foodContainerAll.style.color = "#fff";
        foodContainerAll.style.padding = "5px"
        foodContainerAll.style.borderRadius = "7px"
        foodContainerAll.style.transition = "all .4s ease-in-out"

        // for the egusi soups to show it is not selected //
        egusiSoupButton.style.backgroundColor = "transparent"
        egusiSoupButton.style.color = "initial";
        egusiSoupButton.style.padding = "5px"
        egusiSoupButton.style.borderRadius = "7px"
        egusiSoupButton.style.transition = "all .4s ease-in-out";

        // for the Okro soups button to show it is not selected//
        okroSoupsButton.style.backgroundColor = "transparent"
        okroSoupsButton.style.color = "initial";
        okroSoupsButton.style.padding = "5px"
        okroSoupsButton.style.borderRadius = "7px"
        okroSoupsButton.style.transition = "all .4s ease-in-out";

        // for the Amala Meals button to show it is not selected//
        amalaMealButton.style.backgroundColor = "transparent"
        amalaMealButton.style.color = "initial";
        amalaMealButton.style.padding = "5px"
        amalaMealButton.style.borderRadius = "7px"
        amalaMealButton.style.transition = "all .4s ease-in-out";

        // for the MeatPie Meals button to show it is not selected//
        MeatPieFoodsButton.style.backgroundColor = "transparent"
        MeatPieFoodsButton.style.color = "initial";
        MeatPieFoodsButton.style.padding = "5px"
        MeatPieFoodsButton.style.borderRadius = "7px"
        MeatPieFoodsButton.style.transition = "all .4s ease-in-out";

        // for all the Fried Rice button to show it is not selected//
        fried_Rice_Button.style.backgroundColor = "transparent"
        fried_Rice_Button.style.color = "initial";
        fried_Rice_Button.style.padding = "5px"
        fried_Rice_Button.style.borderRadius = "7px"
        fried_Rice_Button.style.transition = "all .4s ease-in-out";

        // for the Egg sauce Buttons to show it is not selected//
        eggSauceBtn.style.backgroundColor = "transparent"
        eggSauceBtn.style.color = "initial";
        eggSauceBtn.style.padding = "5px"
        eggSauceBtn.style.borderRadius = "7px"
        eggSauceBtn.style.transition = "all .4s ease-in-out";
    }
})

// to display Egusi soup section
let EgusiSoups = document.querySelector(".EgusiSoupSection");
let egusiSoupButton = document.getElementById("EgusiBtn")
egusiSoupButton.addEventListener("click", function ShowAllEgusiSoups() {
    if (EgusiSoups.style.contentVisibility = "hidden") {
        EgusiSoups.style.contentVisibility = "visible"
        cardFoodsExempt.style.contentVisibility = "hidden"
        AllOkroSoups.style.contentVisibility = "hidden";
        amalaMeals.style.contentVisibility = "hidden"
        MeatPieMeal.style.contentVisibility = "hidden"
        FriedRiceFoods.style.contentVisibility = "hidden"
        eggSuaceFoods.style.contentVisibility = "hidden"



        // applying click styling//
        egusiSoupButton.style.backgroundColor = "rgba(20, 18, 18, 0.808)"
        egusiSoupButton.style.color = "#fff";
        egusiSoupButton.style.padding = "5px"
        egusiSoupButton.style.borderRadius = "7px"
        egusiSoupButton.style.transition = "all .4s ease-in-out"

        // for the AllFoods Section Button soups to show it is not selected //
        foodContainerAll.style.backgroundColor = "transparent"
        foodContainerAll.style.color = "initial";
        foodContainerAll.style.padding = "5px"
        foodContainerAll.style.borderRadius = "7px"
        foodContainerAll.style.transition = "all .4s ease-in-out";

        // for the Okro soups button to show it is not selected//
        okroSoupsButton.style.backgroundColor = "transparent"
        okroSoupsButton.style.color = "initial";
        okroSoupsButton.style.padding = "5px"
        okroSoupsButton.style.borderRadius = "7px"
        okroSoupsButton.style.transition = "all .4s ease-in-out";

        // for the Amala Meals button to show it is not selected//
        amalaMealButton.style.backgroundColor = "transparent"
        amalaMealButton.style.color = "initial";
        amalaMealButton.style.padding = "5px"
        amalaMealButton.style.borderRadius = "7px"
        amalaMealButton.style.transition = "all .4s ease-in-out";

        // for the MeatPie Meals button to show it is not selected//
        MeatPieFoodsButton.style.backgroundColor = "transparent"
        MeatPieFoodsButton.style.color = "initial";
        MeatPieFoodsButton.style.padding = "5px"
        MeatPieFoodsButton.style.borderRadius = "7px"
        MeatPieFoodsButton.style.transition = "all .4s ease-in-out";

        // for all the Fried Rice button to show it is not selected//
        fried_Rice_Button.style.backgroundColor = "transparent"
        fried_Rice_Button.style.color = "initial";
        fried_Rice_Button.style.padding = "5px"
        fried_Rice_Button.style.borderRadius = "7px"
        fried_Rice_Button.style.transition = "all .4s ease-in-out";

         // for the Egg sauce Buttons to show it is not selected//
         eggSauceBtn.style.backgroundColor = "transparent"
         eggSauceBtn.style.color = "initial";
         eggSauceBtn.style.padding = "5px"
         eggSauceBtn.style.borderRadius = "7px"
         eggSauceBtn.style.transition = "all .4s ease-in-out";
    }
})



// to display Okro Soup Section
// defining the button to trigger the on-click action
let okroSoupsButton = document.getElementById("OkroBtn");
let AllOkroSoups = document.querySelector(".okroSoupSection");
okroSoupsButton.addEventListener("click", function showAllOkroSoups() {
    if (AllOkroSoups.style.contentVisibility = "hidden") {
        AllOkroSoups.style.contentVisibility = "visible"
        cardFoodsExempt.style.contentVisibility = "hidden"
        EgusiSoups.style.contentVisibility = "hidden"
        amalaMeals.style.contentVisibility = "hidden"
        MeatPieMeal.style.contentVisibility = "hidden"
        FriedRiceFoods.style.contentVisibility = "hidden"
        eggSuaceFoods.style.contentVisibility = "hidden"



        // applying click styling//
        okroSoupsButton.style.backgroundColor = "rgba(20, 18, 18, 0.808)"
        okroSoupsButton.style.color = "#fff";
        okroSoupsButton.style.padding = "5px"
        okroSoupsButton.style.borderRadius = "7px"
        okroSoupsButton.style.transition = "all .4s ease-in-out";

        // for the AllFoods Section Button soups to show it is not selected //
        foodContainerAll.style.backgroundColor = "transparent"
        foodContainerAll.style.color = "initial";
        foodContainerAll.style.padding = "5px"
        foodContainerAll.style.borderRadius = "7px"
        foodContainerAll.style.transition = "all .4s ease-in-out";

        // for The Egusi Soup Button to show it is not selected//
        egusiSoupButton.style.backgroundColor = "transparent"
        egusiSoupButton.style.color = "initial";
        egusiSoupButton.style.padding = "5px"
        egusiSoupButton.style.borderRadius = "7px"
        egusiSoupButton.style.transition = "all .4s ease-in-out";

        // for the Amala Meals button to show it is not selected//
        amalaMealButton.style.backgroundColor = "transparent"
        amalaMealButton.style.color = "initial";
        amalaMealButton.style.padding = "5px"
        amalaMealButton.style.borderRadius = "7px"
        amalaMealButton.style.transition = "all .4s ease-in-out";

        // for the MeatPie Meals button to show it is not selected//
        MeatPieFoodsButton.style.backgroundColor = "transparent"
        MeatPieFoodsButton.style.color = "initial";
        MeatPieFoodsButton.style.padding = "5px"
        MeatPieFoodsButton.style.borderRadius = "7px"
        MeatPieFoodsButton.style.transition = "all .4s ease-in-out";

        // for all the Fried Rice button to show it is not selected//
        fried_Rice_Button.style.backgroundColor = "transparent"
        fried_Rice_Button.style.color = "initial";
        fried_Rice_Button.style.padding = "5px"
        fried_Rice_Button.style.borderRadius = "7px"
        fried_Rice_Button.style.transition = "all .4s ease-in-out";

         // for the Egg sauce Buttons to show it is not selected//
         eggSauceBtn.style.backgroundColor = "transparent"
         eggSauceBtn.style.color = "initial";
         eggSauceBtn.style.padding = "5px"
         eggSauceBtn.style.borderRadius = "7px"
         eggSauceBtn.style.transition = "all .4s ease-in-out";
    }
})


//  to display Amala & Ewedu Food Section
// defining the button to trigger the on-click action
let amalaMealButton = document.getElementById("AmalaBtn");
let amalaMeals = document.querySelector(".AmalaFoodsSection");
amalaMealButton.addEventListener("click", function ShowAllAmalaFoods() {
    if (amalaMeals.style.contentVisibility = "hidden") {
        amalaMeals.style.contentVisibility = "visible"
        AllOkroSoups.style.contentVisibility = "hidden"
        cardFoodsExempt.style.contentVisibility = "hidden"
        EgusiSoups.style.contentVisibility = "hidden"
        MeatPieMeal.style.contentVisibility = "hidden"
        FriedRiceFoods.style.contentVisibility = "hidden"
        eggSuaceFoods.style.contentVisibility = "hidden"


        // applying click styling//
        amalaMealButton.style.backgroundColor = "rgba(20, 18, 18, 0.808)"
        amalaMealButton.style.color = "#fff";
        amalaMealButton.style.padding = "5px"
        amalaMealButton.style.borderRadius = "7px"
        amalaMealButton.style.transition = "all .4s ease-in-out";

        // for the AllFoods Section Button soups to show it is not selected //
        foodContainerAll.style.backgroundColor = "transparent"
        foodContainerAll.style.color = "initial";
        foodContainerAll.style.padding = "5px"
        foodContainerAll.style.borderRadius = "7px"
        foodContainerAll.style.transition = "all .4s ease-in-out";

        // for The Egusi Soup Button to show it is not selected//
        egusiSoupButton.style.backgroundColor = "transparent"
        egusiSoupButton.style.color = "initial";
        egusiSoupButton.style.padding = "5px"
        egusiSoupButton.style.borderRadius = "7px"
        egusiSoupButton.style.transition = "all .4s ease-in-out";

        // for the Okro soups button to show it is not selected//
        okroSoupsButton.style.backgroundColor = "transparent"
        okroSoupsButton.style.color = "initial";
        okroSoupsButton.style.padding = "5px"
        okroSoupsButton.style.borderRadius = "7px"
        okroSoupsButton.style.transition = "all .4s ease-in-out";

        // for the MeatPie Meals button to show it is not selected//
        MeatPieFoodsButton.style.backgroundColor = "transparent"
        MeatPieFoodsButton.style.color = "initial";
        MeatPieFoodsButton.style.padding = "5px"
        MeatPieFoodsButton.style.borderRadius = "7px"
        MeatPieFoodsButton.style.transition = "all .4s ease-in-out";

        // for all the Fried Rice button to show it is not selected//
        fried_Rice_Button.style.backgroundColor = "transparent"
        fried_Rice_Button.style.color = "initial";
        fried_Rice_Button.style.padding = "5px"
        fried_Rice_Button.style.borderRadius = "7px"
        fried_Rice_Button.style.transition = "all .4s ease-in-out";

         // for the Egg sauce Buttons to show it is not selected//
         eggSauceBtn.style.backgroundColor = "transparent"
         eggSauceBtn.style.color = "initial";
         eggSauceBtn.style.padding = "5px"
         eggSauceBtn.style.borderRadius = "7px"
         eggSauceBtn.style.transition = "all .4s ease-in-out";

    }
})


// To display Meat Pie Food Section//
// defining the button to trigger the on-click action
let MeatPieFoodsButton = document.getElementById("MeatPieBtn");
let MeatPieMeal = document.querySelector(".MeatPieFoods");
MeatPieFoodsButton.addEventListener("click", function showAllMeatPieFoods() {
    if (MeatPieMeal.style.contentVisibility = "hidden") {
        MeatPieMeal.style.contentVisibility = "visible";
        AllOkroSoups.style.contentVisibility = "hidden"
        cardFoodsExempt.style.contentVisibility = "hidden"
        EgusiSoups.style.contentVisibility = "hidden";
        amalaMeals.style.contentVisibility = "hidden"
        FriedRiceFoods.style.contentVisibility = "hidden"
        eggSuaceFoods.style.contentVisibility = "hidden"



        // applying click styling//
        MeatPieFoodsButton.style.backgroundColor = "rgba(20, 18, 18, 0.808)"
        MeatPieFoodsButton.style.color = "#fff";
        MeatPieFoodsButton.style.padding = "5px"
        MeatPieFoodsButton.style.borderRadius = "7px"
        MeatPieFoodsButton.style.transition = "all .4s ease-in-out";

        // for the AllFoods Section Button soups to show it is not selected //
        foodContainerAll.style.backgroundColor = "transparent"
        foodContainerAll.style.color = "initial";
        foodContainerAll.style.padding = "5px"
        foodContainerAll.style.borderRadius = "7px"
        foodContainerAll.style.transition = "all .4s ease-in-out";

        // for The Egusi Soup Button to show it is not selected//
        egusiSoupButton.style.backgroundColor = "transparent"
        egusiSoupButton.style.color = "initial";
        egusiSoupButton.style.padding = "5px"
        egusiSoupButton.style.borderRadius = "7px"
        egusiSoupButton.style.transition = "all .4s ease-in-out";

        // for the Okro soups button to show it is not selected//
        okroSoupsButton.style.backgroundColor = "transparent"
        okroSoupsButton.style.color = "initial";
        okroSoupsButton.style.padding = "5px"
        okroSoupsButton.style.borderRadius = "7px"
        okroSoupsButton.style.transition = "all .4s ease-in-out";

        // for the Amala Meals button to show it is not selected//
        amalaMealButton.style.backgroundColor = "transparent"
        amalaMealButton.style.color = "initial";
        amalaMealButton.style.padding = "5px"
        amalaMealButton.style.borderRadius = "7px"
        amalaMealButton.style.transition = "all .4s ease-in-out";


        // for all the Fried Rice button to show it is not selected//
        fried_Rice_Button.style.backgroundColor = "transparent"
        fried_Rice_Button.style.color = "initial";
        fried_Rice_Button.style.padding = "5px"
        fried_Rice_Button.style.borderRadius = "7px"
        fried_Rice_Button.style.transition = "all .4s ease-in-out";

         // for the Egg sauce Buttons to show it is not selected//
         eggSauceBtn.style.backgroundColor = "transparent"
         eggSauceBtn.style.color = "initial";
         eggSauceBtn.style.padding = "5px"
         eggSauceBtn.style.borderRadius = "7px"
         eggSauceBtn.style.transition = "all .4s ease-in-out";

    }
})

// To display Fried Rice Section on the On-click
// Defining the onclick button action handler
let fried_Rice_Button = document.getElementById("FRiedRiceBtn");
let FriedRiceFoods = document.querySelector(".friedRiceSection");
fried_Rice_Button.addEventListener("click", function ShowAllFriedRiceFoods() {
    if (FriedRiceFoods.style.contentVisibility = "hidden") {
        FriedRiceFoods.style.contentVisibility = "visible"
        AllOkroSoups.style.contentVisibility = "hidden"
        cardFoodsExempt.style.contentVisibility = "hidden"
        EgusiSoups.style.contentVisibility = "hidden";
        amalaMeals.style.contentVisibility = "hidden";
        MeatPieMeal.style.contentVisibility = "hidden"
        eggSuaceFoods.style.contentVisibility = "hidden"



        // applying click styling//
        fried_Rice_Button.style.backgroundColor = "rgba(20, 18, 18, 0.808)"
        fried_Rice_Button.style.color = "#fff";
        fried_Rice_Button.style.padding = "5px"
        fried_Rice_Button.style.borderRadius = "7px"
        fried_Rice_Button.style.transition = "all .4s ease-in-out";


        // for the AllFoods Section Button soups to show it is not selected //
        foodContainerAll.style.backgroundColor = "transparent"
        foodContainerAll.style.color = "initial";
        foodContainerAll.style.padding = "5px"
        foodContainerAll.style.borderRadius = "7px"
        foodContainerAll.style.transition = "all .4s ease-in-out";

        // for The Egusi Soup Button to show it is not selected//
        egusiSoupButton.style.backgroundColor = "transparent"
        egusiSoupButton.style.color = "initial";
        egusiSoupButton.style.padding = "5px"
        egusiSoupButton.style.borderRadius = "7px"
        egusiSoupButton.style.transition = "all .4s ease-in-out";

        // for the Okro soups button to show it is not selected//
        okroSoupsButton.style.backgroundColor = "transparent"
        okroSoupsButton.style.color = "initial";
        okroSoupsButton.style.padding = "5px"
        okroSoupsButton.style.borderRadius = "7px"
        okroSoupsButton.style.transition = "all .4s ease-in-out";

        // for the Amala Meals button to show it is not selected//
        amalaMealButton.style.backgroundColor = "transparent"
        amalaMealButton.style.color = "initial";
        amalaMealButton.style.padding = "5px"
        amalaMealButton.style.borderRadius = "7px"
        amalaMealButton.style.transition = "all .4s ease-in-out";


        // For all the Meat Pie Section to show it is not selected//
        MeatPieFoodsButton.style.backgroundColor = "transparent"
        MeatPieFoodsButton.style.color = "initial";
        MeatPieFoodsButton.style.padding = "5px"
        MeatPieFoodsButton.style.borderRadius = "7px"
        MeatPieFoodsButton.style.transition = "all .4s ease-in-out";

         // for the Egg sauce Buttons to show it is not selected//
         eggSauceBtn.style.backgroundColor = "transparent"
         eggSauceBtn.style.color = "initial";
         eggSauceBtn.style.padding = "5px"
         eggSauceBtn.style.borderRadius = "7px"
         eggSauceBtn.style.transition = "all .4s ease-in-out";
    }
})

// To display Egg Sauce Section on the On-click
// Defining the onclick button action handler
let eggSuaceFoods = document.querySelector(".eggSauceContainer");
let eggSauceBtn = document.getElementById("EggSauceBtn");
eggSauceBtn.addEventListener("click", function ShowAllEggSauceFoods() {
    if (eggSuaceFoods.style.contentVisibility = "hidden") {
        eggSuaceFoods.style.contentVisibility = "visible"
        cardFoodsExempt.style.contentVisibility = "hidden"
        EgusiSoups.style.contentVisibility = "hidden"
        AllOkroSoups.style.contentVisibility = "hidden"
        amalaMeals.style.contentVisibility = "hidden"
        MeatPieMeal.style.contentVisibility = "hidden"
        FriedRiceFoods.style.contentVisibility = "hidden"

        // applying click styling//
        eggSauceBtn.style.backgroundColor = "rgba(20, 18, 18, 0.808)"
        eggSauceBtn.style.color = "#fff";
        eggSauceBtn.style.padding = "5px"
        eggSauceBtn.style.borderRadius = "7px"
        eggSauceBtn.style.transition = "all .4s ease-in-out";

        // for the AllFoods Section Button soups to show it is not selected //
        foodContainerAll.style.backgroundColor = "transparent"
        foodContainerAll.style.color = "initial";
        foodContainerAll.style.padding = "5px"
        foodContainerAll.style.borderRadius = "7px"
        foodContainerAll.style.transition = "all .4s ease-in-out";

        // for The Egusi Soup Button to show it is not selected//
        egusiSoupButton.style.backgroundColor = "transparent"
        egusiSoupButton.style.color = "initial";
        egusiSoupButton.style.padding = "5px"
        egusiSoupButton.style.borderRadius = "7px"
        egusiSoupButton.style.transition = "all .4s ease-in-out";

        // for the Okro soups button to show it is not selected//
        okroSoupsButton.style.backgroundColor = "transparent"
        okroSoupsButton.style.color = "initial";
        okroSoupsButton.style.padding = "5px"
        okroSoupsButton.style.borderRadius = "7px"
        okroSoupsButton.style.transition = "all .4s ease-in-out";

        // for the Amala Meals button to show it is not selected//
        amalaMealButton.style.backgroundColor = "transparent"
        amalaMealButton.style.color = "initial";
        amalaMealButton.style.padding = "5px"
        amalaMealButton.style.borderRadius = "7px"
        amalaMealButton.style.transition = "all .4s ease-in-out";

         // for all the Meat Pie button to show it is not selected//
         MeatPieFoodsButton.style.backgroundColor = "transparent"
         MeatPieFoodsButton.style.color = "initial";
         MeatPieFoodsButton.style.padding = "5px"
         MeatPieFoodsButton.style.borderRadius = "7px"
         MeatPieFoodsButton.style.transition = "all .4s ease-in-out";

          // for all the Fried Rice button to show it is not selected//
        fried_Rice_Button.style.backgroundColor = "transparent"
        fried_Rice_Button.style.color = "initial";
        fried_Rice_Button.style.padding = "5px"
        fried_Rice_Button.style.borderRadius = "7px"
        fried_Rice_Button.style.transition = "all .4s ease-in-out";
    }
})


