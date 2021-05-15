$(document).ready(function(){
    $('#searchdoctorbtn').click(()=>{
        $('body').fadeTo('slow','0.4');
        $('body').fadeTo('fast','1')
        $('#pagerefresh').slideDown();
        $('#pagerefresh').slideUp('slow');
        document.getElementById('searchmedicine').value="";

    })
    $('#pagerefresh').hide()
})