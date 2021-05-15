console.log('MADE BY RUDRAKSH')
$(document).ready(function(){
    $('#logo').hide().slideDown('slow');
    $('#trendingrow').hide().slideDown('slower');

    $('.trend').mouseenter(function(){
        $(this).addClass('trend2')
    })

    $('.trend').mouseleave(function(){
        $(this).removeClass('trend2')
    })

    $('.doctor').mouseenter(
        function(){
            $(this).addClass('decopacity')
        }
    )

    $('.doctor').mouseleave(
        function(){
            $(this).removeClass('decopacity')
        }
    )

    $('.trend').mouseenter(function(){
           $(this).addClass('trendhover')
       })

   $('.trend').mouseleave(function(){
           $(this).removeClass('trendhover')
       })



    $('#mainbox').keypress((e)=>{
        if(e.keyCode==13){
            var sea=document.getElementById('mainbox').value;
            if(sea=="consult doctor"){
                $('#seedoctor').trigger('click')
                document.getElementById('mainbox').value=""
            }

            else if(sea=="chat bot"){
                $('#logo2').trigger('click')
                document.getElementById('mainbox').value=""
            }
            else{
                alert("SORRY, WE CAN'T FIND WHAT YOU ARE LOOKING FOR")
            }

        }
    })
})