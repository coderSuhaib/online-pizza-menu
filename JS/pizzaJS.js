function getReceipt() {
	// This initializes our string so it can get passed from  
	// function to function, growing line by line into a full receipt
	var text1 = "<h3>You Ordered:</h3>";
	var runningTotal = 0;
	var sizeTotal = 0;
	var sizeArray = document.getElementsByClassName("size");
	for (var i = 0; i < sizeArray.length; i++) {
		if (sizeArray[i].checked) {
			var selectedSize = sizeArray[i].value;
			text1 = text1+selectedSize+"<br>";
		}
	}
	if (selectedSize === "Personal Pizza") {
		sizeTotal = 6;
	} else if (selectedSize === "Medium Pizza") {
		sizeTotal = 10;
	} else if (selectedSize === "Large Pizza") {
		sizeTotal = 14;
	} else if (selectedSize === "Extra Large Pizza") {
		sizeTotal = 16;
	}
	runningTotal = sizeTotal;
	getMeat(runningTotal,text1); // All three of these variables will be passed on to each function
};

function getMeat(runningTotal,text1) {
	var meatTotal = 0;
	var selectedMeat = [];
	var meatArray = document.getElementsByClassName("meats");
	for (var j = 0; j < meatArray.length; j++) {
		if (meatArray[j].checked) {
			selectedMeat.push(meatArray[j].value);
			text1 = text1+meatArray[j].value+"<br>";
		}
	}
	var meatCount = selectedMeat.length;
	if (meatCount > 1) {
		meatTotal = (meatCount - 1);
	} else {
		meatTotal = 0;
	}
	runningTotal = (runningTotal + meatTotal);
	getVeggies(runningTotal,text1);
};

function getVeggies(runningTotal,text1) {
	var veggieTotal = 0;
	var selectedveggie = [];
	var veggieArray = document.getElementsByClassName("veggies");
	for (var h = 0; h < veggieArray.length; h++) {
		if (veggieArray[h].checked) {
			selectedveggie.push(veggieArray[h].value);
			text1 = text1+veggieArray[h].value+"<br>";
		}
	}
	var veggieCount = selectedveggie.length;
	if (veggieCount > 1) {
		veggieTotal = (veggieCount - 1);
	} else {
		veggieTotal = 0;
	}
	runningTotal = (runningTotal + veggieTotal);
	getCheese(runningTotal,text1);
};

function getCheese(runningTotal,text1) {
	var CheeseTotal = 0;
	var cheeseArray = document.getElementsByName("cheese");
	for (var k = 0; k < cheeseArray.length; k++) {
		if (cheeseArray[k].checked) {
			var selectedcheese = cheeseArray[k].value;
			text1 = text1+selectedcheese+"<br>";
		}
	}
	if (selectedcheese === "Regular") {
		CheeseTotal = 0;
	} else if (selectedcheese === "No Cheese") {
		CheeseTotal = 0;
	} else if (selectedcheese === "Extra Cheese") {
		CheeseTotal = 3;
	} 
	runningTotal = (runningTotal + CheeseTotal);
	getCrust(runningTotal,text1);
};

function getCrust(runningTotal,text1) {
	var crustTotal = 0;
	var crustArray = document.getElementsByName("crust");
	for (var m = 0; m < crustArray.length; m++) {
		if (crustArray[m].checked) {
			var selectedCrust = crustArray[m].value;
			text1 = text1+selectedCrust+"<br>";
		}
	}
	if (selectedCrust === "Plain Crust") {
		crustTotal = 0;
	} else if (selectedCrust === "Garlic Butter Crust") {
		crustTotal = 0;
	} else if (selectedCrust === "Cheese Stuffed Crust") {
		crustTotal = 3;
	} else if (selectedCrust === "Spicy Crust") {
		crustTotal = 0;
	} else if (selectedCrust === "House Special Crust") {
		crustTotal = 0;
	}
	runningTotal = (runningTotal + crustTotal);
	getSauce(runningTotal,text1);
};

function getSauce(runningTotal,text1) {
	var sauceTotal = 0;
	var sauceArray = document.getElementsByName("sauce");
	for (var p = 0; p < sauceArray.length; p++) {
		if (sauceArray[p].checked) {
			var selectedSauce = sauceArray[p].value;
			text1 = text1+selectedSauce+"<br>";
		}
	}
	if (selectedSauce === "Marinara Sauce") {
		sauceTotal = 0;
	} else if (selectedSauce === "White Sauce") {
		sauceTotal = 0;
	} else if (selectedSauce === "Barbeque Sauce") {
		sauceTotal = 0;
	} else if (selectedSauce === "No Sauce") {
		sauceTotal = 0;
	} 
	runningTotal = (runningTotal + sauceTotal);
	document.getElementById("showText").innerHTML=text1;
	document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";
};
