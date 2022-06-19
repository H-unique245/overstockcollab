var Arr = JSON.parse(localStorage.getItem("cartitems"))
console.log(Arr)
var totalamt=0;
Arr.forEach(ele => {
    var tr=document.createElement("tr")

    var sr=document.createElement("td")
    sr.innerText="*";

    var name=document.createElement("td")
    name.innerText=ele.p2;

     var val=document.createElement("td")
    // name.innerText=ele.p;
    


    tr.append(sr,name,ele.p)



    document.getElementById("tabbody").append(tr);



    var tr=document.createElement("tr")

var sr2=document.createElement("td")
//sr.innerText="";

var name2=document.createElement("td")
//name.innerText="";

var val2=document.createElement("td")
//val.innerText="Total";


totalamt=totalamt+ele.p;
var val=document.createElement("td")
val.innerText="Totalamt";

tr.append(sr2,name2,val2,totalamt)

document.getElementById("tabbody").append(tr)



});


var a=document.getElementById("itemamt")
a.innerText=`${totalamt}`;
var b= document.getElementById("shipamt")
b.innerText=+1000;
var c= document.getElementById("duty")
c.innerText=+2000;
var d= document.getElementById("lossprotect")
d.innerText=+3000;
var gh=1000+2000+3000;
var sub=totalamt+gh
var fin=document.getElementById("finaltotal")
fin.innerText=`${sub}`;

document.querySelector("form").addEventListener("submit",payment)

function payment(){

event.preventDefault();

let crnum=document.getElementById("crnum").value;
let  crdate =document.getElementById("crdate").value;
 let  cvv= document.getElementById("cvv").value;

// console.log(crnum,crdate,cvv)

 if(crnum==="123456789" && crdate==="03/2023" && cvv==="123"){

    alert("Your order is placed successfully")
    window.location.href="index.html"
}
else 
{

    alert("fill all required details") 
}


}

