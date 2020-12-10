$(document).ready(function(){
    $(".box").on("click", function(){
        //When we click on an element with a 'box' class, this method will be called.
        var classNames = $(this).attr("class").split(" ");
        var boxClass = classNames[0];
        var className = classNames[1];
        if ($(this).css("background-color") == "rgb(255, 0, 0)") {
            //If the object is already red turn it black.
            $("." + className).css("baclground-color", "#000");
        }else{
            //else, turn all elements with a box class black
            //and then change the color of all elements
            //with the same class name as the clicked element
            //to red.
            $("." + boxClass).css("background-color", "#000");
            $("." + className).css("background-color", "red");
        }
    });
});