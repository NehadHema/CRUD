const productName = document.getElementById('productName');
const productPrice = document.getElementById('productPrice');
const productCat = document.getElementById('productCat');
const productDesc = document.getElementById('productDesc');
const searchInput = document.getElementById('search');
const addbtn = document.getElementById('addbtn');
const updateBtn = document.getElementById('update');
const tableRow=document.getElementById('tableRow');
const inputs = document.getElementsByClassName('form-control');
let productList=[];
if (localStorage.getItem('products') != null) {
    productList = JSON.parse(localStorage.getItem('products'));
    display(productList);
}

function addProduct() {
    if (nameValidate()==true){
        let product={
            name:productName.value,
            price:productPrice.value,
            category:productCat.value,
            description:productDesc.value
        }
        console.log(product);
        productList.push(product);
        localStorage.setItem('products',JSON.stringify(productList));
        display(productList);
        clearForm();
    }else{
        alert('Not Validation');
    }
  

}


function display(productList) {
let box='';
for (let i = 0; i < productList.length; i++) {
box+=`<tr>
<td>${i+1}</td>
<td class='highlight'>${productList[i].name}</td>
<td>${productList[i].price}</td>
<td>${productList[i].category}</td>
<td>${productList[i].description}</td>
<td><button class='btn btn-danger' onClick='deleteProduct(${i})'>Delete</button></td>
<td><button class='btn btn-warning' onClick='getProductInfo(${i})'>Update</button></td>
</tr>`    
}
tableRow.innerHTML=box;
}


function deleteProduct(index) {
    productList.splice(index,1);
    localStorage.setItem('products',JSON.stringify(productList));
    display(productList);
}


function clearForm() {
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].value='';
    }
}

function getProductInfo(index){
    productName.value = productList[index].name;
    productPrice.value= productList[index].price;
    productCat.value = productList[index].category;
    productDesc.value= productList[index].description;
    addbtn.classList.add('d-none');
    updateBtn.classList.replace('d-none','d-inline-block');
    num = index;
}
let num;
function update(){
let product={
    name:productName.value,
    price:productPrice.value,
    category:productCat.value,
    description:productDesc.value
}
productList[num] = (product);
localStorage.setItem('products',JSON.stringify(productList));
display(productList);
clearForm();
addbtn.classList.replace('d-none','d-inline-block');
updateBtn.classList.add('d-none');

}

searchInput.onkeyup = function(){
    let searchResult = [];
   for (let i = 0; i < productList.length; i++) {
    if(productList[i].name.toLowerCase().includes(searchInput.value)){
        searchResult.push(productList[i]);
    }   
   }
   display(searchResult);
    // highlight class in the display fun.
    let heightlight = document.querySelectorAll(".highlight");
    for(let i=0 ; i<heightlight.length;i++){
        heightlight[i].innerHTML=heightlight[i].innerHTML.replace(searchInput.value,`<span>${searchInput.value}</span>`)
    }

}

let namealert = document.getElementById('namealert');
let pricealert = document.getElementById('pricealert');
let catalert = document.getElementById('catalert');
let descalert = document.getElementById('descalert');

 function nameValidate(){
    let nameRejex = /^[A-Z][a-z]{2,8}$/;
    if(nameRejex.test(productName.value) == true){
        if(productName.classList.contains('is-invalid')){
           productName.classList.replace('is-invalid','is-valid');
                  addbtn.removeAttribute('disabled');

           return true; 
        }else{
            productName.classList.add('is-valid');
           return true;
        }
    }else{
        if(productName.classList.contains('is-valid')){
            productName.classList.replace('is-valid','is-invalid');
            return false; 
         }else{
             productName.classList.add('is-invalid');
            return false;
         }
     
    }
}


function priceValidate(){
    let priceRejex = /^[1-9][0-9]{1,5}$/;
    if(priceRejex.test(productPrice.value) == true){
        if(productPrice.classList.contains('is-invalid')){
            productPrice.classList.replace('is-invalid','is-valid');
            addbtn.removeAttribute('disabled');
           return true; 
        }else{
            productPrice.classList.add('is-valid');
           return true;
        }
    }else{
        if(productPrice.classList.contains('is-valid')){
            productPrice.classList.replace('is-valid','is-invalid');
            return false; 
         }else{
            productPrice.classList.add('is-invalid');
            return false;
         }
    }
}



function catValidate(){
    let catRejex = /^[A-Z][a-z]{2,10}$/;
    if(catRejex.test(productCat.value) == true){
        if(productCat.classList.contains('is-invalid')){
            productCat.classList.replace('is-invalid','is-valid');
            addbtn.removeAttribute('disabled');
           return true; 
        }else{
            productCat.classList.add('is-valid');
           return true;
        }
    }else{
        if(productCat.classList.contains('is-valid')){
            productCat.classList.replace('is-valid','is-invalid');
            return false; 
         }else{
            productCat.classList.add('is-invalid');
            return false;
         }
    }
}



function descValidate(){
    let descRejex = /^[A-Za-z]{10,}$/;
    if(descRejex.test(productCat.value) == true){
        if(productDesc.classList.contains('is-invalid')){
            productDesc.classList.replace('is-invalid','is-valid');
            addbtn.removeAttribute('disabled');
           return true; 
        }else{
            productDesc.classList.add('is-valid');
           return true;
        }
    }else{
        if(productDesc.classList.contains('is-valid')){
            productDesc.classList.replace('is-valid','is-invalid');
            return false; 
         }else{
            productDesc.classList.add('is-invalid');
            return false;
         }
    }
}




