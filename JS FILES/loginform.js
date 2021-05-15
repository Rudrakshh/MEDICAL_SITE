$(document).ready(function(){
    $('#submit').click(function(e){
        var check=document.getElementById('passw').value;
        if(check.length<8){
            alert('ENTER CORRECT PASSWORD')
            e.preventDefault()
        }
        
    })
})