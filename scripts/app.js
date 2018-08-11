var app = angular.module("angularApp", ['ngSanitize']);

function onLoad() {
    // This is the first example of an alert function
    //alert("function onLoad() called");
    //First time showing time
    //document.getElementById("timestamp").innerHTML = Date();
    //getAPIBadge();

}

/*
function checkNumber() {

    var theNumber, theMessage;

    //without angular
    //theNumber = document.getElementById("smallnumber").value;

    //with angular
    // Get the value of the input field with id="numb"
    theNumber = $('#smallnumber').val();


    //If x is not a number or less than one or greater than 10
    if (isNaN(theNumber) || theNumber<1 || theNumber>10) {
        theMessage = "Number was expected to be between 1 and 10";
    } else {
        theMessage = "Number is good";
    }
    //display without angular
    //document.getElementById("numberMessage").innerHTML = theMessage;

    //with angular
    $('#numberMessage').text(theMessage);
}



function getAPIBadge() {
    var ctcAPI = "http://ChooseToCodeAPI.azurewebsites.net/api/values/";
    $.post( ctcAPI, {
        SchoolName:"Choose to Code School Example", 
        ZipCode: "71000", 
        Level:"Master Example"
    }).done(function( data ) {
        $("#badge").html(data);
    });
}
*/