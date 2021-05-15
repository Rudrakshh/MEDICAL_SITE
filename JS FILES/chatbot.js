$(document).ready(function(){
    $('input').click(function(){
         var nam=document.getElementsByName('v1');
             for(i=0;i<nam.length;i++){
                if(nam[i].checked==true){
                var ans=nam[i].value
                $('#cures ul li').slideUp()
                $('#'+ans).slideDown()
                            
                }
                }
    })

    $('#popupclose').click(function(){
        $('.popup').slideUp();
    })
    $('#cures ul li').hide()
    $('#dis').hide().slideDown('slow')
    $('.popup').hide().show('slower')


})


var i=0;
var j=0;
function type1(){
    var print1="WARNING:"
    if(i<print1.length){
        var ele=document.getElementById('warspan').innerHTML;
        document.getElementById('warspan').innerHTML=ele+print1.charAt(i)
        i++
    }

    else{
        clearInterval(interval1)
        interval2=setInterval(type2,10)
    }
}

function type2(){
    var print2="DON'T TAKE ANY MEDICINE WITHOUT DOCTOR PRECEPTION. THIS PAGE IS JUST FOR EMERGENCY CASES AND KNOWLEDGE."
    if(j<print2.length){
        var ele2=document.getElementById('spanwar2').innerHTML;
        document.getElementById('spanwar2').innerHTML=ele2+print2.charAt(j)
        j++
    }

    else{
        clearInterval(interval2)
    }
}

var interval1=setInterval(type1,50)
var interval2;

function speak()
           {
               var text="DON'T TAKE ANY MEDICINE WITHOUT CONSULTING TO DOCTOR. THIS PAGE IS JUST FOR EMERGENCY CASES AND KNOWLEDGE."
               responsiveVoice.speak(text)

           }