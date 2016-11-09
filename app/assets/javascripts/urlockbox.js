$(document).ready(function(){
  changeStatus();
  searchBar();
  filterRead();
  filterUnread();
  filterAlpha();
  editTitle();
  editTitleOnClick();
  editUrlOnClick();
  editUrl();
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