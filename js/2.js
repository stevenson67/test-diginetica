function getProductAttributes() {
    const attributes = {};

    const attributeRows = document.querySelectorAll('.parameter-item');

    attributeRows.forEach((row) => {
        const nameElement = row.querySelector('.parameter-item-title');
        const valueElement = row.querySelector('.parameter-item-desc');

        if (nameElement && valueElement) {
            const attributeName = nameElement.textContent.trim();
            attributes[attributeName] = valueElement.textContent.trim();
        }
    });

    console.log(attributes);
}

getProductAttributes();