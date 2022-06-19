import navbar from "./script/navbar.js"
document.getElementById("head").innerHTML = navbar();

var obj = JSON.parse(localStorage.getItem("item"))
console.log(obj);

var productpic = document.createElement("img")
productpic.src = obj.image;
console.log(obj.image)

document.getElementById("productpic").append(productpic);

var div2 = document.createElement("div")


var details = document.createElement("p")
details.innerText = obj.p2;
console.log(obj.p2)



var productdetails = document.createElement("p")
productdetails.innerText = ` Sale Starts at ${obj.p}`;
console.log(obj.p)

div2.append(details, productdetails)
document.getElementById("details").append(div2)

var btn = document.getElementById("addtocart")
btn.addEventListener("click", function () {


    var itemArr = JSON.parse(localStorage.getItem("cartitems")) || [];
    itemArr.push(obj);
    console.log(itemArr)
    localStorage.setItem("cartitems", JSON.stringify(itemArr))
    // window.location.href = "cartPage.html"

})