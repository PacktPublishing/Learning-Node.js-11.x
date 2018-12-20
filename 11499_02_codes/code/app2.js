

const dirfile = "dir.txt";
const flagfile = "flas.txt";


const fs = require('fs');


fs.open(flagfile,"r+", (error,fd) => {

	if(error) {

		console.log('code : ${error.code}\message: ${error.message}');
	}

	else{

			//read
			//write

			console.log('file(${fd} Successfully opened');



			fs.close(fd, (error) =>{

				console.log("file closed");
			})

	}


})