function disp(){
    var question= prompt("Enter the question : ");
    document.getElementById("question").innerHTML=question;
    
    var  option1 =prompt("Option 1: ");
    document.getElementById("option1").innerHTML=option1;

    var  option2 =prompt("Option 2: ");
    document.getElementById("option2").innerHTML=option2;

    var  option3 =prompt("Option 3: ");
    document.getElementById("option3").innerHTML=option3;

    var  option4 =prompt("Option 4: ");
    document.getElementById("option4").innerHTML=option4;

    var option5 = prompt("Enter Correct Option: ");
}
for(var i=1 ; i<prompt.length; i++)
{
    var option1= document.getElementById("option2").innerHTML=option1;
}
function correct(){
    for(var a=1; a<prompt.length; a++)
    {
        if(document.getElementById("radio").checked==option5){
            alert("ture");
        }
        else{
            alert("wrong!");
        }
    }
}