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
    // window.location.href='/api/cart';
    $.ajax({
      url: "/api/orders",
      method: "POST",
      // data: {
      //   id: $(e.target).attr('value')
      // },
      // sucess: () => {
      //   // console.log($(this).val());
      //   console.log('button clicked!');
      // }
    });

  });

  // $(".place-order").on('click', e => {

  //   window.location.href='/api/orders';
  // });



  // handle order button click

  $(".order-button").click(e => {
    e.preventDefault();
    const id = $(e.target).attr('value');
    console.log('id: ', id);
    // $(".added-to-cart").addClass(id)  //.show();
    // $(`#${id}`).show()
    // $(".order-button").addClass(id);
    // $(`.${id}`).add('.added-to-cart').show()
   // $(".order-button").addClass(id);
  //  console.log('this', $(this).val());
  //   console.log('val', ($(".order-button").val()));
  //   if ($(".order-button").val() === id) {
  //     $(".added-to-cart").show();
  //   };



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


  //////test
  $(".place-order").click( function(e) {
    e.preventDefault();
    console.log('im in the click handler');
    //console.log('value', $(e.target).attr('value'));


    //  console.log('event!', e);
    //  console.log($(this))
    //const data = e;
    $.ajax({
      url: "/api/sendMesssage",
      method: "POST",
      // data: {
      //   data
      //   //id: $(this)
      //   // id: $(e.target).attr('value')
      // },
      success: () => {
        // console.log($(this).val());
        console.log('button clicked!');
        // window.location.href='/api/orders'
      },
      error: (x, y, z) => {
        console.log(x, y, z)
      }

    });
  });
});
