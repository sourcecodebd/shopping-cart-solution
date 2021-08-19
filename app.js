// Way - 1 (Short-Cut)
function updateProduct(product, price, isAdd) {
    const productInput = document.getElementById(product + "-number");
    let productNumber = productInput.value;
    console.log(productNumber);
    if (isAdd == true) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (parseInt(productNumber) > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    //update productInput value
    productInput.value = productNumber;

    //update product total
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price;
    calculateTotal();
}

//------------------Two Ways of dealing with function------------------
function getProductTotal(product) {
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}
function calculateTotal() {
    const phoneTotal = getProductTotal('phone') * 1219;
    const caseTotal = getProductTotal('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const totalPrice = subTotal + tax;

    // update on the total
    document.getElementById('sub-total').innerText = subTotal;
    // tax amount
    document.getElementById('tax-amount').innerText = tax;
    // total price
    document.getElementById('total-price').innerText = totalPrice;

}

//or

/* function calculateTotal() {
    const phoneInput = document.getElementById('phone-number');
    const phoneNumber = parseInt(phoneInput.value);
    const phoneTotal = phoneNumber * 1219;

    const caseInput = document.getElementById('case-number');
    const caseNumber = parseInt(caseInput.value);
    const caseTotal = caseNumber * 59;

    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const totalPrice = subTotal + tax;

    // update on the total
    document.getElementById('sub-total').innerText = subTotal;
    // tax amount
    document.getElementById('tax-amount').innerText = tax;
    // total price
    document.getElementById('total-price').innerText = totalPrice;
} */
//----------------------------------------------------------------------

//handle phone increase decrease events
document.getElementById("case-plus").addEventListener('click', function () {
    updateProduct('case', '59', true);
})
document.getElementById("case-minus").addEventListener('click', function () {
    updateProduct('case', '59', false);
})

//handle case increase decrease events
document.getElementById("phone-plus").addEventListener('click', function () {
    updateProduct('phone', '1219', true);
})
document.getElementById("phone-minus").addEventListener('click', function () {
    updateProduct('phone', '1219', false);
})





/* // Way - 2 (Normal)
function updatePhone(isAdd) {
    const phoneInput = document.getElementById("phone-number");
    let phoneNumber = phoneInput.value;
    console.log(phoneNumber);
    if (isAdd == true) {
        phoneNumber = parseInt(phoneNumber) + 1;
    }
    else if (parseInt(phoneNumber) > 0) {
        phoneNumber = parseInt(phoneNumber) - 1;
    }
    //update phoneInput value
    phoneInput.value = phoneNumber;

    //update Phone total
    const phoneTotal = document.getElementById('phone-total');
    console.log(phoneNumber)
    phoneTotal.innerText = phoneNumber * 1219;
}
function updateCase(isAdd) {
    const caseInput = document.getElementById("case-number");
    let caseNumber = caseInput.value;
    console.log(caseNumber);
    if (isAdd == true) {
        caseNumber = parseInt(caseNumber) + 1;
    }
    else if (parseInt(caseNumber) > 0) {
        caseNumber = parseInt(caseNumber) - 1;
    }
    //update caseInput value
    caseInput.value = caseNumber;

    //update case total
    const caseTotal = document.getElementById('case-total');
    console.log(caseNumber)
    caseTotal.innerText = caseNumber * 59;
}
//handle phone increase decrease events
document.getElementById("case-plus").addEventListener('click', function () {
    updateCase(true);
})
document.getElementById("case-minus").addEventListener('click', function () {
    updateCase(false);
})

//handle case increase decrease events
document.getElementById("phone-plus").addEventListener('click', function () {
    updatePhone(true);
})
document.getElementById("phone-minus").addEventListener('click', function () {
    updatePhone(false);
}) */