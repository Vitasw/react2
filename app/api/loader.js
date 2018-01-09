import data from './data.js';

function productLoader(categoryId, callback) {
    const products = [];
    data.forEach(product => {
        if (product.category.id==categoryId || !categoryId){
            products.push(product);
        }
    });
    setTimeout(() => callback(products), 1000);
}

function menuLoader(callback) {
    const categories = [];
    data.forEach(item => {
        if (categories.findIndex(category => category.id==item.category.id )==-1){
            categories.push(item.category);
        }
    });
    setTimeout(() => callback(categories), 500);
}

export {productLoader, menuLoader};
