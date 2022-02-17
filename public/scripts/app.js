// Client facing scripts here

$(document).ready( function() {

  // handle nav title go back to /api/dishes
  $(".title-container").click(()=>{
    window.location.href='/api/dishes';
  })

  // handle order button click
  $(".order-button").click(e => {
    e.preventDefault();
    const id = $(e.target).attr('value');
    console.log('[from scripts/app] order-btt-id: ', id);
    $.ajax({
      url: "/api/dishes",
      method: "POST",
      data: {
        id: $(e.target).attr('value')
      }
    });
  });

  // handle click on cart-icon to go to the orders page
  $(".cart-icon").click(e => {
    $.ajax({
      url: "/api/orders",
      method: "POST",
    });
    window.location.href='/api/cart';
  });

  // handle place-order-btn in cart
  $(".place-order").click(e => {
    $.ajax({
      url: "/api/orders",
      method: "POST",
    });
    window.location.href='/api/orders';
  });

  // when order is placed, handle sending sms
  $(".place-order").click( function(e) {
    $.ajax({
      url: "/api/customerMsg",
      method: "POST",
      error: (x, y, z) => {
        console.log(x, y, z)
      }
    });
  });
  $(".place-order").click( function(e) {
    $.ajax({
      url: "/api/restaurantMsg",
      method: "POST",
      error: (x, y, z) => {
        console.log(x, y, z)
      }
    });
  });

});
