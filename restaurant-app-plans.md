
### FOOD PICK-UP / ORDERING


## USER STORIES
* As a user, I want to browse the menu of the restaurant because I'm hungry.
* As a user, I want to place an order from the menu, because I want to order food.
* As a user, I should get an SMS saying my order has been placed, because I want to know the order was successful
* As the restaurant owner, I should receive the order via SMS, because I  want to fill the order.
* As a user I should get a notification from the restaurant saying my order has been received AND how long it will take.
* As a user I should get a notification saying my order is ready for pick-up.


## ERD
* Nouns from the user stores:
menu, orders, SMS text, order length, user, owner


## Routes (bread / restful)

B GET   /menu
R GET   /menu/:id (individual item)
E POST  /menu/:id/edit
A POST  /menu
D POST  /menu/:id/delete

## MVD - minimum viable demo


## Wireframes

## SPA vs multipage 