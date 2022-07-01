
function getInputId(product) {
    const getProductAmount = document.getElementById(product+'-total');
    const productAmount = parseFloat(getProductAmount.innerText);
    return productAmount;
}

function calculateTotal() {
    const phonePrice = getInputId('phone');
    const casePrice = getInputId('case');
    const subTotal = phonePrice + casePrice ;
    const tax = subTotal / 10 ;
    const totalAmount = subTotal + tax;

    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = totalAmount;
    
}

function updateProductNumber(product, price, isIncresing) {
    const productInput = document.getElementById(product + '-number');

    if (isIncresing) {
        const productNumber = parseFloat(productInput.value) + 1;
        productInput.value = productNumber;
    }
    else if (productInput.value > 0) {
        const productNumber = parseFloat(productInput.value) - 1;
        productInput.value = productNumber;
    }
    const productTotal = document.getElementById(product + '-total')
    productTotal.innerText = parseFloat(productInput.value) * price;
    
    calculateTotal();
}


//handle phone quantity increse and decrese
document.getElementById('phone-plus').addEventListener('click', function () {

    updateProductNumber('phone', 1219, true)
})
document.getElementById('phone-minus').addEventListener('click', function () {

    updateProductNumber('phone', 1219, false)
})

//handle case quantity increse and decrese
document.getElementById('case-plus').addEventListener('click', function () {

    updateProductNumber('case', 59, true)
})
document.getElementById('case-minus').addEventListener('click', function () {

    updateProductNumber('case', 59, false)
})