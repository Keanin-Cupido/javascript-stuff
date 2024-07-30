const preheatOven = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const preheatOven = true;

            if(preheatOven) {
                resolve("Preheat oven to 180deg.");
            } else {
                reject("Failed Task.");
            }
        }, 1000);
    })
};

const addSugarAndChocoChips = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const addChoco = false;

            if(addChoco) {
                resolve("Place sugar and choco.");
            } else {
                reject("Failed Task.");
            }
        }, 2000);
    })
};

const bakeChocoBrownies = async () => {
    try {
        const taskOne = await preheatOven();
        console.log(taskOne);
    
        const taskTwo = await addSugarAndChocoChips();
        console.log(taskTwo);
    
        setTimeout(() => {
            console.log("Enjoy the brownies!");
        }, 3000)
    } catch (error) {
        console.log("Error: ", error)
    }
};

bakeChocoBrownies();