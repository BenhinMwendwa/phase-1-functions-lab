
let mainLocation = 42

function distanceFromHqInBlocks(pickUplocation) {
    return Math.abs(mainLocation - pickUplocation)
}

console.log(distanceFromHqInBlocks(50))


function distanceFromHqInFeet(pickUplocation){
const block = distanceFromHqInBlocks(pickUplocation)
const feet = 264;

return block * feet
}

console.log(distanceFromHqInFeet(50))

function distanceTravelledInFeet(start, destination) {
   const feet= 264 
   const distance= destination - start

   return Math.abs(feet * distance)
} 
console.log(distanceTravelledInFeet(400,670))


function calculatesFarePrice(start, destination) 
{
const distance = distanceTravelledInFeet(start,destination)
if (distance <= 400) {
    return 0;

    }else if (distance > 400 && distance < 2000) {
        return ((distance - 400) * 0.02);

    }
    else if (distance > 2000 && distance < 2500) {
        return 25
    }

        else 
            return 'cannot travel that far';

console.log(calculatesFarePrice(405 ,2100))

console.log(calculatesFarePrice(477 ,2600))
}