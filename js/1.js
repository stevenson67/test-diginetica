// 1 вариант (простой)
const skuElements = document.querySelectorAll('[data-product-mini-card]');

skuElements.forEach((e) => {
    const sku = e.getAttribute('data-product-mini-card');
    if (sku) {
        console.log(sku);
    }
});

// 2 вариант
function getProductSKU() {
    const productSKU = [];

    const skuElements = document.querySelectorAll('[data-product-mini-card]');

    skuElements.forEach((element) => {
        const sku = element.getAttribute('data-product-mini-card');
        if (sku) {
            productSKU.push(sku);
        }
    });

    return productSKU;
}

getProductSKU();

