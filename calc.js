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

function isLegalKey(key,content,pos){
  if(/[abcdf-zABCDF-Z`~!@#$%^&*()\-=_+[\]{}|;:'",<>/?\\]/.test(key)){
    return false;
  }
  
  if(key === '.'){
    if(pos === 0 || content.indexOf('.') !== -1) return false;
    if(pos === 1 && content.substring(0,1) === '-') return false;
  }
  
  if(key === 'e'){
    if(pos === 0 || content.indexOf('e')!== -1 
         || content.indexOf('E')!==-1) return false;
    if(pos === 1 && content.substring(0,1) === '-') return false;
  }

  if(key === 'E'){
    if(pos === 0 || content.indexOf('e')!== -1 
         || content.indexOf('E')!==-1) return false;
    if(pos === 1 && content.substring(0,1) === '-') return false;
  }
  return true;
}
