import navbar from "./script/navbar.js"
document.getElementById("container").innerHTML = navbar();


let cartArr = JSON.parse(localStorage.getItem("cartitems")) || [];

let sum = 0;
cartArr.forEach(ele => {

    let div3 = document.createElement("div")
    div3.setAttribute("id", "itemdiv")

    let imagediv = document.createElement("div")
    imagediv.setAttribute("class", "itemimage")

    let image = document.createElement("img")
    image.src = ele.image;
    imagediv.append(image);

    let div4 = document.createElement("div")
    let desc = document.createElement("p")
    desc.innerText = ele.p2;

    let price = document.createElement("p")
    price.innerText = ` Sale INR  ${ele.p}`;

    div4.append(desc, price);

    div3.append(imagediv, div4)
    document.getElementById("items").append(div3)


    sum += ele.p;
    console.log(sum)

    let pr = document.getElementById("price")
    pr.innerText = "   INR  " + sum;

    let to = document.getElementById("total")
    to.innerText = "   INR  " + sum

    let fi = document.getElementById("finalPrice")
    fi.innerText = "  INR  " + sum;

});



document.getElementById("checkoutbtn").addEventListener("click", function () {




    window.location.href = "billingDetails.html"
})


