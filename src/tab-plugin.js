/*
 * tab-plugin
 * https://github.com/lyuehh/grunt_demo_jquery_tab
 *
 * Copyright (c) 2012 
 * Licensed under the MIT license.
 */

(function($) {
  $.fn.tab = function() {
    var $div = $(this);
    var $lis = $div.find('li.tab_li');
    var $tabs = $div.find('div.tab');

    $(this).on('click', 'li.tab_li', function(e) {
      var $el = $(e.target);
      $lis.removeClass('li_current');
      $el.addClass('li_current');

      var target = $el.data('target');
      $tabs.removeClass('tab_current').hide();
      $div.find('.' + target).addClass('tab_current').show();
    });
  };
}(jQuery));

