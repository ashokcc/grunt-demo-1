/*global QUnit:false, module:false, test:false, asyncTest:false, expect:false*/
/*global start:false, stop:false ok:false, equal:false, notEqual:false, deepEqual:false*/
/*global notDeepEqual:false, strictEqual:false, notStrictEqual:false, raises:false*/
(function($) {

  /*
    ======== A Handy Little QUnit Reference ========
    http://docs.jquery.com/QUnit

    Test methods:
      expect(numAssertions)
      stop(increment)
      start(decrement)
    Test assertions:
      ok(value, [message])
      equal(actual, expected, [message])
      notEqual(actual, expected, [message])
      deepEqual(actual, expected, [message])
      notDeepEqual(actual, expected, [message])
      strictEqual(actual, expected, [message])
      notStrictEqual(actual, expected, [message])
      raises(block, [expected], [message])
  */

  module('jQuery#tab', {
    setup: function() {
      this.li = $('#qunit-fixture').find('.tab_li');
      this.tab = $('#qunit-fixture').find('.tab');
    }
  });

  test('tab num was 2', 2, function() {
    equal(this.tab.length, 2, 'there are 2 tabs..');
    equal(this.li.length, 2, 'there are 2 li..');
  });

  test('tab show and hide', 2, function() {
    notEqual($(this.tab[0]).css('display'), 'none', 'tab1 was showed');
    equal($(this.tab[1]).css('display'), 'none', 'tab2 was hide');
  });

  test('click li t2', 4, function() {
    $('.tab_plugin').tab();
    $('.t2').click();
    equal($('.t1').hasClass('li_current'), false, 't1 has no class li_current');
    ok($('.t2').hasClass('li_current'), 't2 should has class li_current');

    notEqual($(this.tab[1]).css('display'), 'none', 'tab2 was showed');
    equal($(this.tab[0]).css('display'), 'none', 'tab1 was hide');
  });

}(jQuery));
