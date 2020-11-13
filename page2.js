
var k = localStorage.getItem("selectedQuitar");
var parsedData = JSON.parse(localStorage.getItem("maindata"));
// localStorage.clear();

// console.log(parsedData.allProducts[a].price);

var img2 = document.getElementById("images2");
img2.src = parsedData.allProducts[k].image_path;

document.getElementById("desc1").innerHTML = parsedData.allProducts[k].product_description;
document.getElementById("ship1").innerHTML = parsedData.allProducts[k].shipping_details;
document.getElementById("price1").innerHTML = parsedData.allProducts[k].price;
document.getElementById("available1").innerHTML = parsedData.allProducts[k].stock_availability;
document.getElementById("noItems1").innerHTML = parsedData.allProducts[k].no_of_items;
document.getElementById("custReview1").innerHTML = parsedData.allProducts[k].customer_reviews;

var a = document.getElementById("fName");
var b = document.getElementById("lName");
var c = document.getElementById("cc");
var d = document.getElementById("ccExpDate");
var e = document.getElementById("cvvDigit");
var f = document.getElementById("amail");

// Form Validation
function checkFirst(){
    if(a.value == "" || a.value.length === 0){
        document.getElementById("fnError").innerHTML = ""
    }else if(!(isNaN(a.value))){
        document.getElementById("fnError").innerHTML = "Number's not allowed";
    }
}
function checkLast(){
    if(b.value == "" || b.value.length === 0){
        document.getElementById("lnError").innerHTML = ""
    }else if(!(isNaN(b.value))){
        document.getElementById("lnError").innerHTML = "Number's not allowed";
    }
}
function checkCC(){
    if(c.value == "" || c.value.length === 0){
        document.getElementById("ccError").innerHTML = ""
    }else if((isNaN(c.value))){
        document.getElementById("ccError").innerHTML = "Only number allowed";
    }
}
function checkCVV(){
    if(e.value == "" || e.value.length === 0 || e.value.length === 3){
        document.getElementById("cvvError").innerHTML = ""
    }else if((isNaN(e.value))){
        document.getElementById("cvvError").innerHTML = "Only number allowed";
    }else if(e.value.length > 3){
        document.getElementById("cvvError").innerHTML = "Only 3 digits allowed";
    }
}

function checkEmail(){
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if(f.value == "" || f.value.length === 0){
        document.getElementById("emailError").innerHTML = ""
    }
    else if((reg.test(f.value))){
        document.getElementById("emailError").innerHTML = "";
    }
    else{
        document.getElementById("emailError").innerHTML = "Not a valid email";
    }
}



// Displaying data in the Review Info div
function displayData(){
    document.getElementById("editBtn").style.visibility = "visible";
    document.getElementById("purchaseForm").style.visibility = "hidden";
    document.getElementById("personalInfoDiv").style.visibility = "visible";
    document.getElementById("buyBtn").style.visibility = "visible";


    document.getElementById("fN").innerHTML = a.value;
    document.getElementById("lN").innerHTML = b.value;
    document.getElementById("cCard").innerHTML = c.value;
    document.getElementById("expD").innerHTML = d.value;
    document.getElementById("cDigit").innerHTML = e.value;
    document.getElementById("mail").innerHTML = f.value;

    localStorage.setItem("fiName", a.value);
    localStorage.setItem("laName", b.value);
    localStorage.setItem("ccName", c.value);
    localStorage.setItem("CCExp", d.value);
    localStorage.setItem("digitCV", e.value);
    localStorage.setItem("emailName", f.value);
}

// to populate the purchase form back to make edit
function populateBack(){
    document.getElementById("editBtn").style.visibility = "hidden";
    document.getElementById("purchaseForm").style.visibility = "visible";
    document.getElementById("personalInfoDiv").style.visibility = "hidden";
    document.getElementById("buyBtn").style.visibility = "hidden";

}


