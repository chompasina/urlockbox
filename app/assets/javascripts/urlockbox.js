$(document).ready(function(){
  changeStatus();
  // renderLinkList();
});


function changeStatus(){
  $('#link-list').on('click', '#toggle-link-status', function(e){
    var button = e.target;
    toggleStatus(button);
  });
}

function toggleStatus(button){
  var status = $(button).data('status');
  var newStatus = !status;
  storeNewStatus(button, newStatus);
}

function storeNewStatus(button, newStatus){
  var linkId = $(button).data('id');
  $.ajax({
    method: "PUT",
    url: "/api/v1/links/" + linkId + '.json',
    data: {id: linkId, read: newStatus},
    success: function(){
      var id = $(button).data('id');
      var row = $('.link-row[data-id="' + id + '"]')
      updateStatus(id, row);
      updateButton(id,row);
      updateStyle(id);
    }
  })
}

function updateStatus(id, row){
  var $linkRead = $('#link-status-'+ id + '' )
  if ($linkRead.text() === "Read? true"){
    $linkRead.text("Read? false")
  } else if ($linkRead.text() === "Read? false"){
    $linkRead.text("Read? true")
  }
}

function updateButton(id, row){
  var $button = $('.button[data-id="' + id + '"]')
  if($button.text() === 'Mark as Unread'){
      $button.text("Mark as Read");
  } else {
    $button.text("Mark as Unread");
  }
}

function updateStyle(id){
  var $url = $('.url-field[data-id="' + id + '"]')
  if($url[0].style['cssText'] === 'text-decoration: line-through;'){
    $url[0].style['cssText'] = 'text-decoration: none;'
  } else {
    $url[0].style['cssText'] = 'text-decoration: line-through;'
  }
}

   
//     var $link = $(this).closest('.link');
//     var $read = $link.find('.link-status').text();
//     var button = $link.context;
//     var id = button.getAttribute('data-id');
//     if(button.innerHTML === 'Mark as Read'){
//       button.innerHTML = "Mark as Unread";
//     } else {
//       button.innerHTML = "Mark as Read";
//     }
//     
//     $.getJSON('/api/v1/links/' + id, function(link){
//       var status = link.read;
//       $.ajax({
//         type: 'PUT',
//         url: '/api/v1/links/' + id + '.json',
//         data: {
//               read: !status
//               },
//         success: function(link){
//           $('#link-status' + id).html("Read? " + !status);
//         }
//       });
//     });
//   });
// }

// function renderLinkList(){
//   $.ajax({
//     type: 'GET',
//     url: 'api/v1/links/',
//     dataType: 'JSON'
//   })
//     .then(collectLinks);
//   }
//   
// function collectLinks(linkList){
//   linkList.map(function(link){
//     renderLink(link);
//   });
// }
// 
// function renderLink(link){
//   $('#link-list').prepend(
//     "<div class='link' data-id='" +
//     link.id +
//     "'><h6>Added link " +
//     link.id + 
//     " on " +
//     link.created_at +
//     "</h6><p class='title-field' contenteditable='true'><em>" +
//     link.title + 
//     "</em></p><p class='url-field' contenteditable='true'>" +
//     changeLink(link) +
//     "</p><p class='url-status'> Read? " +
//     link.read +
//     "</p>" +
//     "<button data-id='" +
//     link.id +
//     "' id='toggle-link-status'>" +
//     changeButton(link) +
//     "</button></div>"
//   )
// }

// function changeButton(link){
//   if(link.read){
//     return "Mark as Unread"; 
//   } else {
//     return "Mark as Read";
//   }
// }
// 
// function changeLink(link){
//   if($('.url-field').hasClass('link-read')){
//     $('.url-field').removeClass('link-read');
//     return link.url; 
//   } else if (link.read){
//     $('.url-field').addClass('link-read')
//     return link.url;
//   } else {
//     return link.url;
//   }
// } 
//   