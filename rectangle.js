/* global rectangle: true */
$(function(){
  var width = $('#width'),
      height = $('#height'),
      btnCal = $('#calculate'),
      perimeter = $('#perimeter'),
      area = $('#area');
  btnCal.click(function(){

    var w = Number(width.val()),
        h = Number(height.val());
    
    var rect = rectangle();
    perimeter.val(rect.perimeter(w,h));
    area.val(rect.area(w,h));
  });
});
