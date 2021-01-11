$(document).ready(function(){
    $("form").submit(function(event){
        event.preventDefault();
        let a = $("#weight").val()
        let b = $("#height").val()

        let bmi = (a/(b*b)*10000).toFixed(2)
        
        $("#results").text(bmi)

        let color

        if(bmi < 18.6 || bmi >= 24.9) color = "red" 
        else if(bmi >= 18.6 && bmi <24.9) color = "green"
        
        console.log(color)
        $("#results").css("color", color)
    })
})