$(document).ready(function(){
  changeStatus();
});

function changeStatus(){
  $('#link-list').on('click', '#toggle-link-status', function(){
    var $link = $(this).closest('.link');
    var $read = $link.find('.link-status').text();
    // debugger;
    var button = $link.context;
    // var button = document.getElementById("toggle-link-status");
    var id = button.getAttribute('data-id');
    
    $.getJSON('/api/v1/links/' + id, function(link){
      var status = link.read;
      $.ajax({
        type: 'PUT',
        url: '/api/v1/links/' + id + '.json',
        data: {
              read: !status
              },
        success: function(link){
          $('#link-status' + id).html("Read? " + !status);
          if(status === true){
            button.innerHTML("Mark as Unread");
          } else {
            button.innerHTML("Mark as Read");
          }
        }
      });
    });
  });
}