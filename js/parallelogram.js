function calculateParallelogramArea(){
    //get base
    const base = getInputValueById('base_parallelogram_field');
    
    //get height
    const height = getInputValueById('height_parallelogram_field');

    //calculate area
    const area = base*height;

    //display parallelogram area
    setInnerTextById('calculate_parallelogram_area', area);
}

//function for get value from input field
function getInputValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputText = inputField.value;
    const inputValue = parseFloat(inputText);

    return inputValue;
}

//function for display 
function setInnerTextById(id, value){
    const setField = document.getElementById(id);
    setField.innerText = value;
}