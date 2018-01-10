import data from './data.js';

function loadProducts(categoryId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const products = [];
            data.forEach(product => {
                if (product.category.id==categoryId || !categoryId){
                    products.push(product);
                }
            });
            resolve(products);
        }, 1000);
    });
}

function loadMenu() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const categories = [];
            data.forEach(item => {
                if (categories.findIndex(category => category.id==item.category.id )==-1){
                    categories.push(item.category);
                }
            });
            resolve(categories);
        }, 500);
    });
}

export {loadProducts, loadMenu};
