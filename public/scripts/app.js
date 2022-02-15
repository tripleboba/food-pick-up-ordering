// Client facing scripts here
// const dishes = require('../../../routes/dishes');
// console.log('here', dishes);
// const dishes = require("../../routes/dishes");

$(document).ready( function() {

  $(".cart-icon").click(()=>{
    window.location.href='/api/cart';
  })


  // handle click on cart-icon to go to the orders page
  $(".cart-icon").click(e => {
    window.location.href='/api/cart';
  });


  // handle order button click

  $(".order-button").click(e => {
    e.preventDefault();

    $.ajax({
      url: "/api/dishes",
      method: "POST",
      data: {
        id: $(e.target).attr('value')
      },
      // sucess: () => {
      //   // console.log($(this).val());
      //   console.log('button clicked!');
      // }
    });
  });

  $(".place-order").click(e => {
    e.preventDefault();
    console.log('im in the click handler');
    console.log($(e.target).attr('value'));
    $.ajax({
      url: "/api/orders",
      method: "POST",
      data: {
        id: $(e.target).attr('value')
      },
      // sucess: () => {
      //   // console.log($(this).val());
      //   console.log('button clicked!');
      // }
    });
