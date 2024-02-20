$(document).ready(function () {
    $('#btn').click(function () {
        var bg = $('#colors option:selected').text();
        $('#div2').css("background-color", bg);
        var ft = $('#fonts option:selected').text();
        $('#div2').css("font-family", ft);
        var fs = parseFloat($('#fsize').val());
        $('#p2').css("font-size", fs);
        var bd = $('input[type="radio"]:checked').val();
        $('#div2').css("border", bd);
        var txt = $('#txtarea').val();
        $('#p2').html(txt);
        var x = $('input[type="checkbox"]:checked').length > 0;
        if (x) {
            $('#p3').replaceWith("<img id=\"myimg\" src='birthday.jpg' style='justify-content: center;' height='200px' width='200px'>");
        }
        else {
            $('#p3').replaceWith('<p id="p3"></p>');
            $('#myimg').replaceWith('<p id="p3"></p>');
        }
    });
});