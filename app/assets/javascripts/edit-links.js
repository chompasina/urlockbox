function editTitle(){
  $('#latest-links').on('keypress', '.title-field', function(e) {
    if(e.which === 13){
      
    var $link = $(this).closest(".link");
    var $updated = $link.find('.title-field').text();
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
  $('#latest-links').on('focusout', '.title-field', function(e){
    var $link = $(this).closest(".link");
    var $updated = $link.find('.title-field').text();
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

function editBodyOnClick(){
  $('#latest-links').on('focusout', '.body-field', function(e){
    var $link = $(this).closest(".link");
    var $updated = $link.find('.body-field').text();
    var updateParams = {
        body: $updated
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

function editBody(){
  $('#latest-links').on('keypress', '.body-field', function(e) {
    if(e.which === 13){
      
    var $link = $(this).closest(".link");
    var $updated = $link.find('.body-field').text();
    var updateParams = {
        body: $updated
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
