$(document).ready(function(){
  $('.add').click(function(){
    var num1=parseInt($('#num1').val());
    var num2=parseInt($('#num2').val());
    var result=num1+num2;
    $('#result').val(result);
  });

  $('.sub').click(function(){
    var num1=parseInt($('#num1').val());
    var num2=parseInt($('#num2').val());
    var result=num1-num2;
    $('#result').val(result);
  });

  $('.mul').click(function(){
    var num1=parseInt($('#num1').val());
    var num2=parseInt($('#num2').val());
    var result=num1*num2;
    $('#result').val(result);
  })
})