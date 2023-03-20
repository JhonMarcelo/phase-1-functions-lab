// Code your solution in this file!
function distanceFromHqInBlocks(blockNumber){
let numberOfBlocksAway = blockNumber - 42;

if(numberOfBlocksAway > 0){
    return numberOfBlocksAway;
} else {
    return Math.abs(numberOfBlocksAway)
}
}

function distanceFromHqInFeet(someValue){
    let numberOfBlocks = distanceFromHqInBlocks(someValue);
    return numberOfBlocks * 264
}

function distanceTravelledInFeet(block1,block2){
    let blockDistance = block2 - block1;
    if (blockDistance>0){
        return blockDistance*264;
    } else {
        return (Math.abs(blockDistance))*264;
    }

}

function calculatesFarePrice(start,destinatin){
let distanceInFeet = distanceTravelledInFeet(start,destinatin);
if (distanceInFeet <= 400){
    return 0;
} else if (distanceInFeet > 2500){
    return "cannot travel that far";
} else if ((distanceInFeet > 400) && (distanceInFeet < 2000)){
    return (distanceInFeet-400)*.02
} else if (distanceInFeet > 2000){
    return 25;
}

}