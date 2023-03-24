/*Challenge: calculate the height of an isosceles triangle
Isosceles triangle height formula: h = √ (a2-(b2/4))
*/

function calculateTriangle(side1, side2, base) {
    if (side1 === side2) {
        const side = side1;
        const height = Math.sqrt((Math.pow(side, 2)) - ((Math.pow(base, 2)) / 4));

        return {
            side: side,
            height: height,
            perimeter: (side * 2) + base, 
            area: (base * height) / 2,
        }
    }
    else {
        return 'This is not an isoscele triangle'
    }
}
