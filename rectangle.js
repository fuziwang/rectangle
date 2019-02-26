$(function(){
  var width = $('#width'),
      height = $('#height'),
      btnCal = $('#calculate'),
      perimeter = $('#perimeter'),
      area = $('#area'),
      ptxt = $('p');
  btnCal.click(function(){
    var wval = width.val(),
        hval = height.val();

    var w = Number(width.val()),
        h = Number(height.val());
    
    var p = 2*(w+h),
        a = w*h;
    perimeter.val(p);
    area.val(a);
  });
});
