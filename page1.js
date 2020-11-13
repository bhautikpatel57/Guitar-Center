var jsonData;
var regData;
var allProductsLength;

    var xhttp = new XMLHttpRequest();
    xhttp.open('GET', 'guitardata.json', true);

    xhttp.onreadystatechange = function(){
        if(xhttp.readyState == 4 && xhttp.status == 200){
            data = xhttp.responseText;
            regData = JSON.parse(data);
            allProductsLength = regData.allProducts.length;
        }
    }
    xhttp.send();

document.getElementById("next").addEventListener("click", viewImages);
document.getElementById("prev").addEventListener("click", viewImages);
// var value = document.getElementById("next").innerHTML;

var colShow = document.getElementsByClassName("collapse");
var con = document.getElementsByClassName("content");
var k = -1;

function viewImages(e){
    if(e.target.id === "next"){
        k++;
        if(k > allProductsLength - 1){
            k = 0;   
        }
        colShow[0].style.display = "block";
        colShow[1].style.display = "block";
        colShow[2].style.display = "block";
        con[0].innerHTML = regData.allProducts[k].product_description;
        con[1].innerHTML = regData.allProducts[k].shipping_details;
        con[2].innerHTML = regData.allProducts[k].customer_reviews;
    }
    else{
        k--;
        if(k < 0){
            k = allProductsLength - 1;        
        }
        colShow[0].style.display = "block";
        colShow[1].style.display = "block";
        colShow[2].style.display = "block";
        con[0].innerHTML = regData.allProducts[k].product_description;
        con[1].innerHTML = regData.allProducts[k].shipping_details;
        con[2].innerHTML = regData.allProducts[k].customer_reviews;
    }
    document.getElementById("moinImg").src = regData.allProducts[k].image_path;
    localStorage.setItem("selectedQuitar", k);
    localStorage.setItem( "maindata", JSON.stringify(regData));

}



// to show content
var coll = document.getElementsByClassName("collapse");
var i;
    for(i = 0; i < coll.length; i++){
        coll[i].addEventListener('click', showContent); 
        }   
    function showContent(){
        // con[i] = regData.allProducts[i].product_description;
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if(content.style.display === "block"){
            content.style.display = "none";
        }else{
            content.style.display = "block";
        }   
    }
    localStorage.clear();
