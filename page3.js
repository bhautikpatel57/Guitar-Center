var j = localStorage.getItem("selectedQuitar");
var pData = JSON.parse(localStorage.getItem("maindata"));
// console.log(pData.allProducts[j].product_description);

var aa = localStorage.getItem("fiName");
var bb = localStorage.getItem("laName");
var cc = localStorage.getItem("ccName");
var dd = localStorage.getItem("CCExp");
var ee = localStorage.getItem("digitCV");
var ff = localStorage.getItem("emailName");


document.getElementById("imagee3").src = pData.allProducts[j].image_path;


document.getElementById("firName").innerHTML = aa;
document.getElementById("lasName").innerHTML = bb;
document.getElementById("credCC").innerHTML = cc;
document.getElementById("expDat").innerHTML = dd;
document.getElementById("threeCvv").innerHTML = ee;
document.getElementById("maill").innerHTML = ff;


document.getElementById("proce").innerHTML = pData.allProducts[j].price;
document.getElementById("shipDet").innerHTML = pData.allProducts[j].shipping_details;
document.getElementById("prodDescrp").innerHTML = pData.allProducts[j].product_description;


var pr = pData.allProducts[j].price;
var matches = pr.match(/\d+\.\d+/g);
var prParse = parseFloat(matches[0]);

var shipPr = pData.allProducts[j].shipping_details;
var matches1 = shipPr.match(/\d+/g);
var shipPrParse = parseInt(matches1[0]);

var sumT = prParse + shipPrParse;

document.getElementById("totalPrice").innerHTML = sumT;


// extract int number from string example
// var st = "jhkj7682834nuhhnhn789"; 
// var matches = st.match(/\d+/g); 
// if (matches) { 
//     console.log(matches[1]); 
// } 


// extract float from string example
// var ke = "dadasdsd123.32dsfsf43.32"
// var matches = ke.match(/\d+\.\d+/g);
// console.log(matches[0]);


