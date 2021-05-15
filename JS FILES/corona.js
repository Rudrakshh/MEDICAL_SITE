$(document).ready(function(){
    $('#nav1 li:nth-child(1)').click(function(){
        $('#article').show();
        $('#overview').hide();
        $('#prevention').hide();
        $('#symtoms').hide()
    })
    $('#nav1 li:nth-child(2)').click(function(){
        $('#article').hide();
        $('#overview').show();
        $('#prevention').hide();
        $('#symtoms').hide()
    })
    $('#nav1 li:nth-child(3)').click(function(){
        $('#article').hide();
        $('#overview').hide();
        $('#prevention').show();
        $('#symtoms').hide()
    })
    $('#nav1 li:nth-child(4)').click(function(){
        $('#article').hide();
        $('#overview').hide();
        $('#prevention').hide();
        $('#symtoms').show()
    })
    $('#overview').hide();
    $('#prevention').hide();
    $('#symtoms').hide()
})
