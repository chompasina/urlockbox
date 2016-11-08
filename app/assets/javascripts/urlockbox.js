$(document).ready(function(){
  changeStatus();
  renderLinkList();
});


function changeStatus(){
  $('#link-list').on('click', '#toggle-link-status', function(){
    var $link = $(this).closest('.link');
    var $read = $link.find('.link-status').text();
    var button = $link.context;
    var id = button.getAttribute('data-id');
    if(button.innerHTML === 'Mark as Read'){
      button.innerHTML = "Mark as Unread";
    } else {
      button.innerHTML = "Mark as Read";
    }
    
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
        }
      });
    });
  });
}

function renderLinkList(){
  $.ajax({
    type: 'GET',
    url: 'api/v1/links/',
    dataType: 'JSON'
  })
    .then(collectLinks);
  }
  
function collectLinks(linkList){
  linkList.map(function(link){
    renderLink(link);
  });
}

function renderLink(link){
  $('#link-list').prepend(
    "<div class='link' data-id='" +
    link.id +
    "'><h6>Added link " +
    link.id + 
    " on " +
    link.created_at +
    "</h6><p class='title-field' contenteditable='true'><em>" +
    link.title + 
    "</em></p><p class='url-field' contenteditable='true'>" +
    changeLink(link) +
    "</p><p class='url-status'> Read? " +
    link.read +
    "</p>" +
    "<button data-id='" +
    link.id +
    "' id='toggle-link-status'>" +
    changeButton(link) +
    "</button></div>"
  )
}

function changeButton(link){
  if(link.read){
    return "Mark as Unread"; 
  } else {
    return "Mark as Read";
  }
}

function changeLink(link){
  if(link.read){
    $('.url-field').addClass('.link-read')
    return link.url;
  } else {
    return link.url;
  }
}
  