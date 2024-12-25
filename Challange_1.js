let massMark, heightMark, massJohn, heightJohn, BMIMark, BMIJohn = 0;
let markHigherBMI;

function calculateBMI(weight, height){
    return weight / (height * height);
}

function compareBMIs(markBMI, johnBMI){
    return markBMI > johnBMI;
}

BMIMark = calculateBMI(78, 1.69);
BMIJohn = calculateBMI(92, 1.95);
markHigherBMI = compareBMIs(BMIMark, BMIJohn);
console.log(`Test Data 1:\n${BMIMark} > ${BMIJohn}: ${markHigherBMI}`);

BMIMark = calculateBMI(95, 1.88);
BMIJohn = calculateBMI(85, 1.76);
markHigherBMI = compareBMIs(BMIMark, BMIJohn);
console.log(`Test Data 2:\n${BMIMark} > ${BMIJohn}: ${markHigherBMI}`);
