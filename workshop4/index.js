$(document).ready(function(){
  $('#button').click(function() {
   $.get('http://demo6952230.mockable.io',
    function(response) {
       alert(response.data);
   });
  });
});
