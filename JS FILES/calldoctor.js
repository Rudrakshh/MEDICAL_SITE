$(document).ready(function(){

                

    $('.calling').click(()=>{
        alert('CALLING........')
    })

    $('#searchdoctorbtn').click(()=>{
        $('body').fadeTo('slow','0.4');
        $('body').fadeTo('fast','1')
        $('#pagerefresh').slideDown();
        $('#pagerefresh').slideUp('slow');
        document.getElementById('calldoctorinput').value="";

    })

    $('.doc').mouseenter(function(){
        $(this).addClass('dochover')
    })

    $('.doc').mouseleave(function(){
        $(this).removeClass('dochover')
    })

    $('#pagerefresh').hide()
})