function rectangle(){
  return {
    'perimeter':function(width,height){
      return 2*(Number(width) + Number(height));
    },
    'area':function(width,height){
      return Number(width)*Number(height);
    }
  };
}

function valid(data){
  var result = {
    isOk:false,
    reason:''
  };
  
  if(data === ''){
    result.reason = '不能为空';
    return result;
  }

  if(Number(data) < 0){
    result.reason = '不能为负数';
    return result;
  }

  if(!/^-?(0|[1-9]\d*)(\.\d*)?([eE][+-]?\d+)?$/.test(data)){
    result.reason = '不是合法数字';
    return result;
  }

  result.isOk = true;
  return result;
}
