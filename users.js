$('form').submit(function(){
  // console.log($('#first').val());

  // var arr = [$('#first').val(),$('#last').val(),$('#email').val(),$('#contact').val()]
  // console.log(arr);
  $('table').append('<tr></tr>');
  $('table tr:last-child').append('<td>'+$('#first').val()+'</td>');
  $('table tr:last-child').append('<td>'+$('#last').val()+'</td>');
  $('table tr:last-child').append('<td>'+$('#email').val()+'</td>');
  $('table tr:last-child').append('<td>'+$('#contact').val()+'</td>');
  return false;
});
