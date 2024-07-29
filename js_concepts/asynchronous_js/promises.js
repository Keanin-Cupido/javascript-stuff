// Promises

const promise = new Promise((resolve, reject) => {
	const allWentWell = false
	;
	if (allWentWell == true) {
		resolve("All things went well.")
	} else {
		reject("Oops, something went wrong.");
	}
});

// const pendingPromise = new Promise((resolve, reject) => {
// 	const randomNumber = Math.floor(Math.random() * 10);

// 	console.log(randomNumber)

// 	setTimeout(() => {
// 		if (randomNumber < 4) {
// 			resolve("Well done, you guessed right!");
// 		} else {
// 			reject("Oops! You guessed wrong!")
// 		}
// 	}, 2000);
// });

promise.then((value) => {
	console.log(value);
}).catch((error) => {
	console.log(error);
})
