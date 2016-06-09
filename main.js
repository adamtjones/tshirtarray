//Adam work for Wednesday

var blueShirt = {
	color: 'blue',
	price: 29.00,
}
var pinkShirt = {
	color: 'pink',
	price: 19.00,
}
var orangeShirt = {
	color: 'orange',
	price: 39.00,
}


//Previous work from Pair project Monday
var total = 0;

//keeps track of our items in the cart:
var isBlueInCart = false;
var isPinkInCart = false;
var isOrangeInCart = false;

//gets the HTML elements for our subtotal and total boxes
var subtotalBox = document.getElementById('subtotal');
var totalBox = document.getElementById('total');

//gets the HTML elements for our boxes
var blueCart = document.getElementById('blueCart');
var pinkCart = document.getElementById('pinkCart');
var orangeCart = document.getElementById('orangeCart');

//what happens after a user clicks the Add To Cart button?
function addToCart(price,color) {
	
	
	subtotalBox.innerHTML = total;
	totalBox.innerHTML = calculateFinalTotal();

}

//Calculate Final Total
function calculateFinalTotal() {
	return (total*.065)+total;
}

