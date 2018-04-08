// Distingushing between types of Strings

let unit: string = 'awesome';
let miles: 'miles' = 'awesome';

type distanceMetric = 'MILES' | 'KILOMETERS' | 'MERTERS' | 'YARDS' | 'FEET' | 'INCHES';
function moveCharactor(distance: number, value: distanceMetric) {
    console.log(`Youe moved ${distance} ${value}`);
}

moveCharactor(3, 'MILES');
moveCharactor(3, 'test');