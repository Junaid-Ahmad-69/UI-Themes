
        let  count=0;
        function correct(){
        if(document.getElementById("ok1").checked==true)
        {
            // alert("Your answer is Wrong !");
        }
        else if(document.getElementById('ok2').checked==true){
             var mark1 = document.getElementById("count");
             count++;
        }
        else if(document.getElementById('ok3').checked==true)
        {
            // alert('Your answer is wrong !');
        }
        else{
            alert("please select one option");
        }
}