/* global chai describe rectangle valid isLegalKey it: true */
var expect = chai.expect;


describe('validate() 测试', function() {

  it('空数据是非法数据', function() {
    var result = valid('');
    expect(result.isOK).not.to.be.ok;
  });

  it('非数值字符串是非法数据', function() {
    var result = valid('abc');
    expect(result.isOK).not.to.be.ok;
  });

  it('字母数字混合是非法数据', function() {
    var result = valid('abc123');
    expect(result.isOK).not.to.be.ok;
  });

  it('标点符号数字混合是非法数据', function() {
    var result = valid('%^134');
    expect(result.isOK).not.to.be.ok;
  });

  it('负数是非法数据', function() {
    var result = valid('-44');
    expect(result.isOK).not.to.be.ok;
  });
});

describe('isLegalKey() 测试', function() {
  describe('合法字符：5', function() {
    it('允许出现在空文本中', function() {
      expect(isLegalKey('5', '', 0)).to.be.ok;
    });

    it('允许出现在合法数据前', function() {
      expect(isLegalKey('5', '3.141', 0)).to.be.ok;
    });

    it('允许出现在合法数据中间', function() {
      expect(isLegalKey('5', '3.141', 2)).to.be.ok;
    });

    it('允许出现在合法数据末尾', function() {
      expect(isLegalKey('5', '3.141', 5)).to.be.ok;
    });
  });

  describe('合法字符：.', function() {
    it('允许出现在整数末尾', function() {
      expect(isLegalKey('.', '3141', 4)).to.be.ok;
    });

    it('允许出现在整数第一位数字后的任意位置', function() {
      expect(isLegalKey('.', '3141', 1)).to.be.ok;
    });

    it('不允许出现在整数前', function() {
      expect(isLegalKey('.', '3141', 0)).not.to.be.ok;
    });

    it('不允许出现在空文本中', function() {
      expect(isLegalKey('.', '', 0)).not.to.be.ok;
    });

    it('不允许出现在负号后', function() {
      expect(isLegalKey('.', '-', 1)).not.to.be.ok;
    });

    it('不允许出现在小数中', function() {
      expect(isLegalKey('.', '3.141', 5)).not.to.be.ok;
    });
  });

  describe('合法字符：e', function() {
    it('允许出现在非科学计数法的合法数字末尾', function() {
      expect(isLegalKey('e', '3', 1)).to.be.ok;
    });

    it('允许出现在非科学计数法的合法数字中间', function() {
      expect(isLegalKey('e', '3.141', 3)).to.be.ok;
    });

    it('不允许出现在非科学计数法的合法数字前', function() {
      expect(isLegalKey('e', '3.141', 0)).not.to.be.ok;
    });

    it('不允许出现在空文本中', function() {
      expect(isLegalKey('e', '', 0)).not.to.be.ok;
    });

    it('不允许出现在负号后', function() {
      expect(isLegalKey('e', '-', 1)).not.to.be.ok;
    });

    it('不允许出现在科学计数法数字的末尾', function() {
      expect(isLegalKey('e', '3.14e2', 6)).not.to.be.ok;
    });

    it('不允许出现在科学计数法数字的中间', function() {
      expect(isLegalKey('e', '3.14e2', 4)).not.to.be.ok;
    });

    it('不允许出现在科学计数法数字的前面', function() {
      expect(isLegalKey('e', '3.14e2', 0)).not.to.be.ok;
    });

    it('不允许出现在 E 科学计数法数字的末尾', function() {
      expect(isLegalKey('e', '3.14E2', 6)).not.to.be.ok;
    });

    it('不允许出现在 E 科学计数法数字的中间', function() {
      expect(isLegalKey('e', '3.14E2', 4)).not.to.be.ok;
    });

    it('不允许出现在 E 科学计数法数字的前面', function() {
      expect(isLegalKey('e', '3.14E2', 0)).not.to.be.ok;
    });
  });

  describe('合法字符：E', function() {
    it('允许出现在非科学计数法的合法数字末尾', function() {
      expect(isLegalKey('E', '3.141', 5)).to.be.ok;
    });

    it('允许出现在非科学计数法的合法数字中间', function() {
      expect(isLegalKey('E', '3.141', 3)).to.be.ok;
    });
    
    it('不允许出现在非科学计数法的合法数字前', function() {
      expect(isLegalKey('E', '3.141', 0)).not.to.be.ok;
    });

    it('不允许出现在空文本中', function() {
      expect(isLegalKey('E', '', 0)).not.to.be.ok;
    });

    it('不允许出现在负号后', function() {
      expect(isLegalKey('E', '-', 1)).not.to.be.ok;
    });

    it('不允许出现在科学计数法数字的末尾', function() {
      expect(isLegalKey('E', '3.14E2', 6)).not.to.be.ok;
    });

    it('不允许出现在科学计数法数字的中间', function() {
      expect(isLegalKey('E', '3.14E2', 4)).not.to.be.ok;
    });

    it('不允许出现在科学计数法数字的前面', function() {
      expect(isLegalKey('E', '3.14E2', 0)).not.to.be.ok;
    });

    it('不允许出现在 e 科学计数法数字的末尾', function() {
      expect(isLegalKey('E', '3.14e2', 6)).not.to.be.ok;
    });

    it('不允许出现在 e 科学计数法数字的中间', function() {
      expect(isLegalKey('E', '3.14e2', 4)).not.to.be.ok;
    });

    it('不允许出现在 e 科学计数法数字的前面', function() {
      expect(isLegalKey('E', '3.14e2', 0)).not.to.be.ok;
    });
  });

  describe('非法字母：c', function() {
    it('不允许出现在空文本中', function() {
      expect(isLegalKey('c', '', 0)).not.to.be.ok;
    });

    it('不允许出现在合法数字前', function() {
      expect(isLegalKey('c', '3.141', 0)).not.to.be.ok;
    });

    it('不允许出现在合法数字中间', function() {
      expect(isLegalKey('c', '3.141', 3)).not.to.be.ok;
    });

    it('不允许出现在合法数字末尾', function() {
      expect(isLegalKey('c', '3.141', 5)).not.to.be.ok;
    });
  });

  describe('非法字母：X', function() {
    it('不允许出现在空文本中', function() {
      expect(isLegalKey('X', '', 0)).not.to.be.ok;
    });

    it('不允许出现在合法数字前', function() {
      expect(isLegalKey('X', '3141', 0)).not.to.be.ok;
    });

    it('不允许出现在合法数字中间', function() {
      expect(isLegalKey('X', '3141', 3)).not.to.be.ok;
    });

    it('不允许出现在合法数字末尾', function() {
      expect(isLegalKey('X', '3141', 4)).not.to.be.ok;
    });
  });

  describe('非法符号：%', function() {
    it('不允许出现在空文本中', function() {
      expect(isLegalKey('%', '', 0)).not.to.be.ok;
    });

    it('不允许出现在合法数字前', function() {
      expect(isLegalKey('%', '3.1e4', 0)).not.to.be.ok;
    });

    it('不允许出现在合法数字中间', function() {
      expect(isLegalKey('%', '3.1e4', 3)).not.to.be.ok;
    });

    it('不允许出现在合法数字末尾', function() {
      expect(isLegalKey('%', '3.1e4', 5)).not.to.be.ok;
    });
  });
});
