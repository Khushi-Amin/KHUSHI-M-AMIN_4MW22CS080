function findMax(numbers) {
    if (numbers.length === 0) {
        return null;
    }
    
    let maxNumber = numbers[0];
    
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > maxNumber) {
            maxNumber = numbers[i];
        }
    }
    
    return maxNumber;
}
console.log(findMax([3, 1, 4, 5, 5, 9, 2, 16, 12]));
console.log(findMax([]));