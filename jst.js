// function that builds a grid in the "container"
function createGrid(x) 
{
    for (var i = 0; i < x; i++) {
        $("#container").append(" <div class='row' id='row"+i+"'"+ "</div>");
        
        for (var j = 0; j < x; j++) {
            $('#row'+ i+ '').append("<div class='box' ><div class='inner'></div></div>");
        }

    }
    //$(".grid").width(1000/x);
    //$(".grid").height(1000/x);
};

// function that clears the grid
function clearGrid(){
    $(".grid").remove();
};  

// function that prompts the user to select the number of boxes in a new grid
// the function then also creates that new grid
function refreshGrid(){
  /*  var z = prompt("How many boxes per side?");
var cr=prompt("How many colors per side?");
    clearGrid();
    createGrid(z);    */
window.location.reload();
};

 var z = prompt("Hello User,Enter the number of boxes you want? upto 15 is considerable");
//var cr=prompt("How many colors per side?");
function myFunction()
{
return document.getElementById("coloq").value;

}
// create a 16x16 grid when the page loads
// creates a hover effect that changes the color of a square to black when the mouse passes over it, leaving a (pixel) trail through the grid
// allows the click of a button to prompt the user to create a new grid
//var cr=myFunction();
$(document).ready(function() {
    createGrid(z);
    $(".box").click(function() {
        $(this).css("background-color", myFunction());
        });
    $("#coloq").click(function() {
        $(".box").css("background-color", "");        
        });
    $(".box").dblclick(function() {
        $(this).css("background-color", "");
        });
    $("#newGrid").click(function() {
        refreshGrid();
    $(".box").dblclick(function() {
        $(this).css("background-color", "");
        });
        $(".box").click(function() {
        $(this).css("background-color",myFunction());
        });
    }); 
});
