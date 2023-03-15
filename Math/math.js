console.group('Square');

const sideSquare = 5;
const squarePerimeter = sideSquare * 4;
const squareArea = sideSquare ** 2;

function calculateSquare (side) {
    return {
        perimeter: side * 4,
        area: side ** 2,
    }
}

console.log({sideSquare, squarePerimeter, squareArea,});

console.groupEnd('Square');

console.group('Triangle');

const baseTriangle = 4;
const sideTriangle1 = 6;
const sideTriangle2 = 6;
const heightTriangle = 5.5;
const trianglePerimeter = baseTriangle + sideTriangle1 + sideTriangle2;
const triangleArea = (baseTriangle * heightTriangle) / 2;

function calculateTriangle(side1, side2, base, height) {
    return {
        perimeter: side1 + side2 + base, 
        area: (base * height) / 2,
    }
}

console.log({baseTriangle, sideTriangle1, sideTriangle2, heightTriangle, trianglePerimeter, triangleArea,});

console.groupEnd('Triangle')