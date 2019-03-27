var expect = chai.expect;

describe('测试用例', function() {
  it('area(10, 5) = 50', function() {
    var r = rectangle();
    expect(r.area(10, 5)).to.be.equal(50);          
  });

  it('area("10", "5") = 50', function() {
    var r = rectangle();
    expect(r.area('10', '5')).to.be.equal(50);          
  });

  it('valid(-2) = {isOk:false,reason:"不能为负数"}',function(){
    expect(valid(-2)).to.be.deep.equal({isOk:false,reason:'不能为负数'});
  });
  it('valid("abc") = {isOk:false,reason:"不是合法数字"}',function(){
    expect(valid('abc')).to.be.deep.equal({isOk:false,reason:'不是合法数字'});
  });
  it('valid("") = {isOk:false,reason:"不能为空"}',function(){
    expect(valid('')).to.be.deep.equal({isOk:false,reason:'不能为空'});
  });
});

