// Code your solution in this file!
function distanceFromHqInBlocks(blocks){
    return Math.abs(blocks - 42)
}
function distanceFromHqInFeet(blocks){
    return distanceFromHqInBlocks(blocks)*264
}
function distanceTravelledInFeet(start,end){
    return Math.abs(start - end)*264 
}
function calculatesFarePrice(start,end){
    let feetDistance = distanceTravelledInFeet(start , end)
    if (feetDistance < 400){
    return 0
    } else if(feetDistance >= 400 && feetDistance <= 2000){
    return ((feetDistance - 400) * .02)
    } else if (feetDistance > 2000 && feetDistance<2500){
    return 25
    } else {
    return 'cannot travel that far'
    }
}