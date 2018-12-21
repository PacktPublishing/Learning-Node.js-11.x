if(!window.NumberList) {

window.temp = function() {


	const numbers = [];

	this.sumAll = function() {

		let sum =0;

		for(let i =0; i<numbers.length;i++) {

			sum + =numbers[i];
		}

	}


	this.multiplyAll = function() {

		let product =0;
		for(let i =0;i<numbers.length;i++){

			product *= numbers[i];
		}



	}

	this.clear = function() {

			numbers.splice(0,number.length);

		}


		this.push = function(number) {

			numbers.push(number);
		}


}


}