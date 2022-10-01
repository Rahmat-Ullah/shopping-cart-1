/*
1 add event lostener to the case plus button
2 get the value inside the case number field (input field)
3 convert the number to an interger
4 new case number
5 save the value to the case number field
*/
function updateCaseNumber(isIncrease){
    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberString = caseNumberField.value;
    const previousCaseNumber = parseFloat(caseNumberString);

    let newCaseNumber;

    if(isIncrease == true){
        newCaseNumber = previousCaseNumber + 1;
    }
    else{
        newCaseNumber = previousCaseNumber - 1;
    }
    caseNumberField.value = newCaseNumber;
}

document.getElementById('btn-case-plus').addEventListener('click', function(){
    updateCaseNumber(true);
})

document.getElementById('btn-case-minus').addEventListener('click', function(){
    updateCaseNumber(false);
    // const caseNumberField = document.getElementById('case-number-field');
    // const caseNumberString = caseNumberField.value;
    // const previousCaseNumber = parseFloat(caseNumberString);

    // const newCaseNumber = previousCaseNumber - 1;
    // caseNumberField.value = newCaseNumber;
})