import fd0 from './Images/FoodDrink/0-Carol-Cola-Float.jpg';
import fd1 from './Images/FoodDrink/1-Tuesday-Tapioca-Milk-Tea.jpg';
import fd2 from './Images/FoodDrink/2-Angela-Durian-Mango-Cider.jpg';
import fd3 from './Images/FoodDrink/3-Gus-Bourbon-Whiskey.jpg';
import fd4 from './Images/FoodDrink/4-Roddy-Strawbery-Fruit-Soda.jpg';
import fd5 from './Images/FoodDrink/5-Tao-Black-Coffee.jpg';
import fd6 from './Images/FoodDrink/6-Dahlia-Rose-Tea.jpg';
import fd7 from './Images/FoodDrink/7-Ertegun-Cherry-Sparkling.jpg';
import fd8 from './Images/FoodDrink/8-Big-Jump-Burger.jpg';
import fd9 from './Images/FoodDrink/9-Tortilla-Sandwich.jpg';
import fd10 from './Images/FoodDrink/10-Cafe-Special-Mars-Sand.jpg';
import fd11 from './Images/FoodDrink/11-Anmitsu.jpg';

import p0 from './Images/Polaroids/caroleandtuesday.png';
import p1 from './Images/Polaroids/angela.png';
import p2 from './Images/Polaroids/gus.png';
import p3 from './Images/Polaroids/roddy.png';
import p4 from './Images/Polaroids/tao.png';
import p5 from './Images/Polaroids/dahlia.png';
import p6 from './Images/Polaroids/ertegun.png';

const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

// const formatter = new Intl.NumberFormat('ja-JP', {
//     style: 'currency',
//     currency: 'JPY',
// });

// const for now maybe will allow change from USD to JPY prices
const foodMenu = (() => {
    const price0 = 7.00;
    const price1 = 8.00;
    const price2 = 9.00;
    const price3 = 10.00;

    const menuArr = [
        {name: 'Carol\'s Cola Float', description: 'A refreshing ice cream cola float topped with a cherry and mint leaf garnish.', price: formatter.format(price0), photo: fd0, polaroid: p0, type: 'Beverages'},
        {name: 'Tuesday\'s Tapioca Milk Tea', description: 'Tuesday\'s favorite bubble tea with tapioca pearls.', price: formatter.format(price0), photo: fd1, polaroid: p0, type: 'Beverages'},
        {name: 'Angela\'s Durian Mango Cider', description: 'Angela\'s favorite durian drink with a tropical twist.', price: formatter.format(price0), photo: fd2, polaroid: p1, type: 'Beverages'},
        {name: 'Gus\' Bourbon Whiskey', description: '<strong>*This is an alcoholic product.</strong><br>The perfect drink for a drummer-alcoholic.', price: formatter.format(price1), photo: fd3, polaroid: p2, type: 'Beverages'},
        {name: 'Roddy\'s Strawberry Fruit Soda', description: 'Roddy\'s cool strawberry drink for strawberry-colored hair.', price: formatter.format(price0), photo: fd4, polaroid: p3, type: 'Beverages'},
        {name: 'Tao\'s Black Coffee', description: 'A black coffee with a nice, rich dark roast.', price: formatter.format(price0), photo: fd5, polaroid: p4, type: 'Beverages'},
        {name: 'Dahlia\'s Rose Tea', description: 'A fragrant, rose-scented tea blend.', price: formatter.format(price0), photo: fd6, polaroid: p5, type: 'Beverages'},
        {name: 'Ertegun\'s Cherry Sparkling', description: '<strong>*This is an alcoholic product.</strong><br>A sparkling water with alcohol drink for a DJ party-goer.', price: formatter.format(price1), photo: fd7, polaroid: p6, type: 'Beverages'},
        {name: 'Big Jump Burger', description: 'Big Jump Burger\'s \"Jumping Set\" with some fried potato slices on the side.', price: formatter.format(price2), photo: fd8, polaroid: '', type: 'Brunch'},
        {name: 'Tortilla Sandwich', description: 'A tortilla sandwich with a sauce to dip or pour over.', price: formatter.format(price3), photo: fd9, polaroid: '', type: 'Brunch'},
        {name: 'Cafe Special Mars Sandwich', description: 'Martians say, \"This sandwich is out of this world.\"', price: formatter.format(price0), photo: fd10, polaroid: '', type: 'Brunch'},
        {name: 'Anmitsu', description: 'Tuesday\'s favorite anmitsu.<br>A cold Japanese dessert made of jelly, fruits, and ice cream.', price: formatter.format(price1), photo: fd11, polaroid: '', type: 'Desserts'},
    ];

    return { menuArr };
})

function createFoodHeader(text) {
    const foodHeader = document.createElement('h1');
    const menuItemContainer = document.querySelector('.menu-item-container');
    foodHeader.textContent = text.toUpperCase();
    menuItemContainer.appendChild(foodHeader);
}

function createFoodDiv(type) {
    const foodDiv = document.createElement('div');
    const menuItemContainer = document.querySelector('.menu-item-container');
    foodDiv.classList.add(type + 'Div');
    menuItemContainer.appendChild(foodDiv);
}

export function menuLoad() {
    const menuTab = document.querySelector('.menuTab');
    const menu = foodMenu().menuArr;

    if(menuTab.classList.contains('active')) return;

    const content = document.getElementById('content');
    content.innerHTML = '';

    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-container');
    content.appendChild(menuContainer);

    const menuName = document.createElement('h1');
    menuName.textContent = 'CAROLE & TUESDAY MENU';
    menuContainer.appendChild(menuName);

    const menuItemContainer = document.createElement('div');
    menuItemContainer.classList.add('menu-item-container');
    menuContainer.appendChild(menuItemContainer);

    // Initialize the foodDiv so I can change the foodDiv
    let foodDiv = null;

    for (let i = 0; i < menu.length; i++) {
        const itemDiv = document.createElement('div');
        const itemName = document.createElement('h2');
        const itemDescription = document.createElement('p');
        const itemPrice = document.createElement('p');
        const itemPhotoDiv = document.createElement('div');

        const itemPhoto = new Image();
        const itemPolaroid = new Image();

        itemDiv.classList.add('menu-item');
        itemPhoto.classList.add('menu-photo');
        itemPhotoDiv.classList.add('menu-photo-div');

        itemName.textContent = menu[i].name;
        itemDescription.innerHTML = menu[i].description;
        itemPrice.textContent = menu[i].price;
        itemPhoto.src = menu[i].photo;

        // Create the Food Headers
        if (i === 0) {
            createFoodHeader('Beverages');
            createFoodDiv(menu[i].type);
            foodDiv = document.querySelector('.' + menu[i].type + 'Div');
        } else if (i === 8) {
            createFoodHeader('Brunch');
            createFoodDiv(menu[i].type);
            foodDiv = document.querySelector('.' + menu[i].type + 'Div');
        } else if (i === 11) {
            createFoodHeader('Desserts');
            createFoodDiv(menu[i].type);
            foodDiv = document.querySelector('.' + menu[i].type + 'Div');
        }

        foodDiv.appendChild(itemDiv);
        itemDiv.appendChild(itemName);
        itemDiv.appendChild(itemPrice);
        itemDiv.appendChild(itemPhotoDiv);
        itemPhotoDiv.appendChild(itemPhoto);
        itemDiv.appendChild(itemDescription);

        // If there is a polaroid then add it
        if (menu[i].polaroid != '') {
            itemPolaroid.src = menu[i].polaroid;
            itemPolaroid.classList.add('menu-polaroid');
            itemPhotoDiv.appendChild(itemPolaroid);
        }
    }
}