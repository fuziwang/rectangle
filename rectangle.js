/* global rectangle: true */
$(function(){
  var $width = $('#width'),
      $height = $('#height'),
      $btnCal = $('#calculate'),
      $perimeter = $('#perimeter'),
      $area = $('#area'),
      $widthValidation = $('#width-validation'),
      $heightValidation = $('#height-validation');

  $btnCal.click(function(){

    var w = $width.val(),
        h = $height.val();
    
    var widthResult = valid(w);
    var heightResult = valid(h);
    
    if(!widthResult.isOk){
      $widthValidation.html('宽度' + widthResult.reason);
      $width.select();
      return;
    }

    if(!heightResult.isOk){
      $heightValidation.html('高度' + heightResult.reason);
      $height.select();
      return;
    }

    $widthValidation.html('');
    $heightValidation.html('');

    var rect = rectangle();
    $perimeter.val(rect.perimeter(w,h));
    $area.val(rect.area(w,h));
  });

  $btnCal.mousedown(function(e){// 当点击事件和失去焦点事件冲突的时候触发
    e.preventDefault();
  });
});
