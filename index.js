function distanceFromHqInBlocks (num1) {
    if (num1 >= 42) {
        return num1 - 42;
    }else if(num1 < 42) {
        return 42 - num1;
    }
} 

function distanceFromHqInFeet (num1) {
    return  distanceFromHqInBlocks (num1) * 264;
}

function distanceTravelledInFeet (num1, num2) {
    if (num1 <= num2) {
    return (num2 - num1) * 264;
    }else if(num1 > num2) {
        return (num1 - num2) * 264;
    }
}

function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination);
    if (distance < 400) {
    return 0;
    } else if (distance > 400 && distance < 2000) {
        return 2.56;
    } else if (distance > 2000 && distance < 2500) {
        return 25;
    } else (distance > 2500) 
        return 'cannot travel that far';
}
