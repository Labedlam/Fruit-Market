var apple = new Fruit("apple", randomNumber(0.5, 10));
var banana = new Fruit("banana", randomNumber(0.5, 10));
var orange = new Fruit("orange", randomNumber(0.5, 10));
//var grape = new Fruit("grape", randomNumber(0.5, 10));
var pear = new Fruit("pear", randomNumber(0.5, 10));
var dollars = 100;

var fruitArray=[apple,banana,orange,pear];
for (var i=0; i <fruitArray.length; i++){
	startInterval(fruitArray[i]);

}




$(document).ready(function(){
loopThrough();


 $("#productList").on('click',".button",function(){

 	var clickedPrice=$(this).nearest("#");
 	buy(clickedPrice);
 	
 });

// });
	//append to dom fruit start price
	//every 15 seconds, update price on dom, update wallet on dom
	//click button to buy
	//raise counter of clicked item
	//update average purchased price
});

function buy(item) {
	if (dollars < item.price) {
		return dollars;
	} else {
	dollars -= item.price;
	return dollars;
}}

function Fruit (name, startingPrice) {	
	this.name = name;
	this.price = startingPrice;
	this.bought = 0;
	this.spent = 0;
	this.setPrice = function(){
		var currentPrice = this.price;
		currentPrice += randomDollar();
 		this.price = currentPrice;
	 		if (this.price >9.99) {
			this.price =9.99;
		} else if (this.price < 0.5) {
			this.price = 0.5;
		}
		console.log(this);
 		return this.price;
	}
}


function startInterval(fruit) {
	setInterval(
	function() {
	fruit.setPrice()}, 5000);
    setInterval(function(){$("#productList").children().remove();},5000);
	setInterval(function(){loopThrough();},5000);
}	

function randomNumber(min, max) {
	return Number((Math.random() * (1 + max - min) + min).toFixed(2));
}
function randomDollar() {
	return Number(((Math.random() * 1) - 0.5).toFixed(2));
}

function loopThrough(){
	for (var i=0; i <fruitArray.length; i++){
var $el="<div id='"+fruitArray[i].name+"'>" +"<div> Name: "+fruitArray[i].name+"</div>"
	+ "<div class='priceUpdateBrowser' data-price="fruitArray[i].price>Price: "+fruitArray[i].price+"</div>"
	+"<div ">Average Price: "+fruitArray[i].average+"</div>"
	+"<div class='button'>Buy: </div>"
	+"<div>Total Bought: "+fruitArray[i].bought+"</div>"
	+"</div>";
$("#productList").append($el);

}

};



