var $list = $('ul');

$('#add').on('click', function () {
  var $item = $('<li></li>'),
      $link = $('<a href="#"></a>');
  
  $link.text($list.find('li').length + 1)
    .appendTo($item);
  
  $item.appendTo($list);
});

$('#sub').on('click', function () {
  $list.find('li:last').remove();
});

$('#basis').on('keyup change', function () {
  $list.find('li').css('flex-basis', $(this).val() + '%');
});