function calculateRectangleArea(){
    //get width value
    const widthField = document.getElementById('width_rectangle_field');
    const widthText = widthField.value;
    const width = parseFloat(widthText);

    //get length value
    const lengthField = document.getElementById('length_rectangle_field');
    const lenghtText = lengthField.value;
    const length = parseFloat(lenghtText);

    //calculate area
    const area = width*length;
    //console.log(area);

    //display rectangle area
    const calculateArea = document.getElementById('calculate_rectangle_area');
    calculateArea.innerText = area;
}