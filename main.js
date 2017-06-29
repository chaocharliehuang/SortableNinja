var imgHTML = "<ul id='sortable'>";
for (var i = 1; i <= 5; i++) {
    imgHTML += '<li>';
    /*imgHTML += '<li class="ui-state-default"><span class="ui-icon ui-icon-arrowthick-2-n-s"></span>';*/
    imgHTML += "<img src='sort" + i + ".png' alt='ninja puzzle'>";
    imgHTML += "</li>";
}
imgHTML += "</ul>";
$('.puzzle').append(imgHTML);

$( function() {
    $( "#sortable" ).sortable();
    $( "#sortable" ).disableSelection();
  } );