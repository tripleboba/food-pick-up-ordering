// Client facing scripts here
// const dishes = require('../../../routes/dishes');
// console.log('here', dishes);
// const dishes = require("../../routes/dishes");

$(document).ready( function() {
  $(".cart-icon").click(()=>{
    window.location.href='/api/cart';
  })
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
});





// ------- place order button ----- updates owner order page//
$(document).ready( function() {
  $(".place-order").click(e => {
    e.preventDefault();
    console.log('clicked me');
    $.ajax({
      url: "/api/orders",
      method: "POST"
      // data: {
      //   id: $(e.target).attr('value')
      // },
      // sucess: () => {
      //   // console.log($(this).val());
      //   console.log('button clicked!');
      // }
    });

  });
});
