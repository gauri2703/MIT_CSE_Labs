$(document).ready(function () {
    console.log("we are using jquery");
    //$('p').click();
    $('p').click(function () {
        console.log('you clicked on p');
        //  $('p').hide(); //jitne p hai unpe click krne 
        //$(this).hide(); //sirf clicked vle ko
        //$('#id').hide();
        // $('.class').hide();
        //$('#second').hide();
        $('.odd').hide();

    })

    $('p').dblclick(function(){
        $('#second').hide();


    });
    $('p').hover(function(){
        $('.odd').hide();


    })

    $('#but1').click(function(){
        $('#wiki').toggle(500);
    })
    $('#but2').click(function(){
        $('#wiki').fadeOut(500);
    })
    $('#but3').click(function(){
        $('#wiki').fadeIn(500);
    })
    $('#but4').click(function(){
        $('#wiki').fadeTo(500, 0.5);
    })
    $('#but5').click(function(){
        $('#wiki').fadeToggle(500);
    })

    //slide methods - speed and callback parameters are optional
    $('#but7').click(function(){
        $('#wiki').slideUp(500);
    })
    $('#but8').click(function(){
        $('#wiki').slideDown(500);
    })
    $('#but9').click(function(){
        $('#wiki').slideToggle(500,function(){
            console.log('done');

        })
    })
    $('#wiki').css('background-color', 'red');
})
/*there are 3 selector in jquery
1. element selector $('p').clck();
2. id               $('#second').hide();
3. class            $('.odd').hide();
// other selectors
$('*').click() // clicks on all the elements
$('p.odd').click() // clicks on all the odd elements
$('p:first').click() // clicks on all 1st element*/


// Events in jQuery
  // Mouse events = click, dblclick, mouseenter, mouseleave
  // KeyboardEvent = keypress, keydown, MediaKeyStatusMap
  // form events = submit, change, focus, blur
  // document/window events = load, resize, scroll, unload