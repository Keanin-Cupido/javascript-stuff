function task1(callback) {
	setTimeout(() => {
		console.log("1. first");
		callback();
	}, 5000);
}

function task2(callback) {
	setTimeout(() => {
		console.log("2. second");
		callback();
	}, 500);
}

function task3(callback) {
	setTimeout(() => {
		console.log("3. third");
		callback();
	}, 7000);
}

task1(() => {
	task2(() => {
		task3(() => {});
	});
});