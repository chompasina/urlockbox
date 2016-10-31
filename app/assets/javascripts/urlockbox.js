$(document).ready(function(){
  toggleRead();
});

// function toggleRead(){
//   $('#toggle-link-status').on('click', function(){
//     var $link = $(this).closest('.link');
//     var $status = $link.find('.link-status');
//     if($status.text() === 'false'){
//       $status.text('true');
//     }
//     if($status.text() === 'true'){
//       $status.text('false');
//     }
//     var $updated = $link.find('.link-status').text();
//     var updateParams = {
//       link: $updated
//     };
//     
//     $.ajax({
//       type: 'PUT',
//       url: 'api/v1/links/' + $link.data('id') + ".json",
//       data: updateParams
//     });
//   });
// }

function toggleRead(){
  $.getJSON('api/v1/links.json')
  .then(function(links){
    $.each(links, function(index, link){
      changeStatus(link.id);
    });
  });
}

function changeStatus(id){
  $('#toggle-link-status' + id).on('click', function(){
    event.preventDefault();
    
    $.getJSON('/api/v1/links/' + id, function(link){
      var status = link.read;
      $.ajax({
        type: 'PUT',
        url: '/api/v1/links/' + id + '.json',
        data: {
          link: {read: !status}
        },
        success: function(link){
          $('#link-status' + id).html("Read: " + !status);
        }
      });
    });
  });
}