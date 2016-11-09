function editTitle(){
  $('#link-list').on('keypress', '.title-field', function(e) {
    if(e.which === 13){
      
    var $link = $(this);
    var $updated = $link.text();
    var updateParams = {
        title: $updated
    };
    $.ajax({
      type: 'PUT',
      url: 'api/v1/links/' + $link.data('id') + ".json",
      data: updateParams
    });
    $(this).blur();
    window.getSelection().removeAllRanges();
  }
  });
}

function editTitleOnClick(){
  $('#link-list').on('focusout', '.title-field', function(e){
    var $link = $(this).closest(".link");
    var $updated = $link.text();
    var updateParams = {
        title: $updated
    };
    $.ajax({
      type: 'PUT',
      url: 'api/v1/links/' + $link.data('id') + ".json",
      data: updateParams
    });
    $(this).blur();
    window.getSelection().removeAllRanges();
  });  
}

function editUrlOnClick(){
  $('#link-list').on('focusout', '.url-field', function(e){
    var $link = $(this).closest(".link");
    var $updated = $link.text();
    var updateParams = {
        url: $updated
    };
    $.ajax({
      type: 'PUT',
      url: 'api/v1/links/' + $link.data('id') + ".json",
      data: updateParams
    });
    $(this).blur();
    window.getSelection().removeAllRanges();
  });  
}

function editUrl(){
  $('#link-list').on('keypress', '.url-field', function(e) {
    if(e.which === 13){
      
    var $link = $(this).closest(".link");
    var $updated = $link.text();
    var updateParams = {
        url: $updated
    };
    $.ajax({
      type: 'PUT',
      url: 'api/v1/links/' + $link.data('id') + ".json",
      data: updateParams
    });
    $(this).blur();
    window.getSelection().removeAllRanges();
  }
  });
}


function searchBar(){
  var $rows = $('.link-table').children()
  var $links = $rows.children("tr.link-row")

  $('.search-bar').on('keyup', function(e){
    var $currentSearchTerm = e.target.value;
    console.log($currentSearchTerm)
    
    $links.each(function(index, link){
      if ($(link).find(".title-field").text().toLowerCase().indexOf($currentSearchTerm) !== -1 || $(link).find(".url-field").text().toLowerCase().indexOf($currentSearchTerm) !== -1 ){
        $(link).show();
      } else {
        $(link).hide();
      }
    });
  });
}

function filterRead(){
  var $rows = $('.link-table').children()
  var $links = $rows.children("tr.link-row")

  $('.filter-read').on('click', function(e){
    $links.each(function(index, link){
      if ($(link).data("status") === true ){
        $(link).show();
      } else {
        $(link).hide();
      }
    });
  });
}

function filterUnread(){
  var $rows = $('.link-table').children()
  var $links = $rows.children("tr.link-row")

  $('.filter-unread').on('click', function(e){
    $links.each(function(index, link){
      if ($(link).data("status") === false ){
        $(link).show();
      } else {
        $(link).hide();
      }
    });
  });
}

function filterAlpha(){
  var $rows = $('.link-table').children()
  var $links = $rows.children("tr.link-row")

  $('.filter-alpha').on('click', function(){
    $links.sort(function(a, b){
      var upA = $(a).find(".title-field").text().toUpperCase();
      debugger;
      var upB = $(b).find(".title-field").text().toUpperCase();
      
      return (upA < upB) ? -1 : (upA > upB) ? 1: 0;
    })
  $.each($links, function(index, item) { $rows.append(item); });
})
}
