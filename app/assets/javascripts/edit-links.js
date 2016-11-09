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
      if ($(link).find(".title-field").text().toLowerCase().indexOf($currentSearchTerm) !== -1 ){
        $(link).show();
      } else {
        $(link).hide();
      }
    });
  });
}

