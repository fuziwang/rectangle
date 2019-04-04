/* global rectangle: true */
$(function(){
  var $width = $('#width'),
      $height = $('#height'),
      $form = $('form'),
      $perimeter = $('#perimeter'),
      $area = $('#area'),
      $widthValidation = $('#width-validation'),
      $heightValidation = $('#height-validation');

  $form.submit(function(e){
    var w = $width.val(),
        h = $height.val();
    
    var rect = rectangle();
    $perimeter.val(rect.perimeter(w,h));
    $area.val(rect.area(w,h));
    e.preventDefault();
  });
});
