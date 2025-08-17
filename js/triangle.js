/*
* objective: get base, height of a triangle. Calculate the area by using the
  provided formula. and then display the area.
* step-1: get the base value of the traingle
* step-2: added an id in the base input field
* step-3: use getElementbyId to access the input field
* step-4: get value from the input field. (value is string now)
* step-5: convert the value to a number. Use pareFloat()
*/
function calculateTriangleArea(){
    //get base value
    const baseField = document.getElementById('base_triangle_field');
    const baseFieldText = baseField.value;
    const base = parseFloat(baseFieldText);
    //console.log(base);

    //get height value
    const heightField = document.getElementById('height_triangle_field');
    const heightFieldText = heightField.value;
    const height = parseFloat(heightFieldText);
    //console.log(height);

    //calculate triangle area
    const tringleArea = 0.5 * base * height;
    //console.log(tringleArea);

    //display triangle area
    const calculateArea = document.getElementById('claculated_triangle_area');
    calculateArea.innerText = tringleArea;
}