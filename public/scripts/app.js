// Client facing scripts here
// const dishes = require('../../../routes/dishes');
// console.log('here', dishes);
// const dishes = require("../../routes/dishes");

$(document).ready(function() {
  const createDishElement = dish => {
    const $dish = $(`<section class="each-dish"></section>`);
    const $dishImg = $(`
      <header class="each-dish-header">
        <img class="dish-pic" src=${dish.img}>
      </header>
   `);
   const $dishContext = $(`
    <footer class="each-dish-footer">
      <p class="dish-title">${dish.title}</p>
      <p class="dish-description">${dish.description}</p>
    </footer>
  `);
  // <button class="order-button" type="submit">order</button>
  $dish.append($dishImg, $dishContext);
  return $dish;
};

  // $('.all-dishes').empty();  
    const renderDishes = dishes => {
      // console.log(dishes);
    for (const dish of dishes) {
      $(".all-dishes").append(createDishElement(dish));
    }
  };
  //get info from the database and call the render function
  const loadDishes = () => {
    $.ajax({
      url: '/api/dishes', 
      method: 'GET',
      success: (data) => {
        console.log('in loadDishes:', data);
        renderDishes(data);
      },
      error: (err) => {
        console.log(err);
      }
    });
  };
  loadDishes();


   
  // // prevents XSS
  // const escape = (str) => {
  //   let div = document.createElement('div');
  //   div.appendChild(document.createTextNode(str));
  //   return div.innerHTML;

});

