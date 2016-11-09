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
  var $table = $('table')
  var $tableBody = $table.find('tbody');
  $('.filter-alpha').on('click', function(){
    rows = $tableBody.find('tr.link-row');
    sortedRows = rows.sort(sortRows);
    $tableBody.remove('tr.link-row');
    $tableBody.append(sortedRows);
    })
}

function sortRows(a, b){
  if ( $(a).find('td:first-Child').text().toUpperCase() > $(b).find('td:first-Child').text().toUpperCase() ) {
    return 1;
  }
  if ( $(a).find('td:first-Child').text().toUpperCase() < $(b).find('td:first-Child').text().toUpperCase() ) {
    return -1;
  }
  return 0;
}
