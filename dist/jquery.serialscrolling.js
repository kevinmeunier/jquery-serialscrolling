/*!
 * jQuery serialscrolling
 * https://github.com/kevinmeunier/jquery-serialscrolling
 *
 * Copyright 2022 Meunier Kévin
 * https://www.meunierkevin.com
 *
 * Released under the MIT license
 */
(function($){
  'use strict';

  $.fn.serialscrolling = function(options){
    const settings = $.extend({}, $.fn.serialscrolling.defaults, options);
    const $targetSelector = $(settings.targetSelector);
    const $window = $(window);
    const $stack = $(this);
    const base = this;
    let $current = false;

    $.extend(this, {
      init: function(){
        // Add selected class on scroll
        $window.on('scroll.serialscrolling', this.handleCurrent).trigger('scroll');

        // Handle & bind the event on links
        this.on('click.serialscrolling', this.handleEvent);
      },

      handleCurrent: function(){
        let target;
        let $trigger;

        $targetSelector.each(function(){
          const $page = $(this);
          if( ($page.offset().top - $window.height()/2) < $window.scrollTop() ){
            $trigger = settings.getTrigger($page, $stack);
          }
        });

        if( $trigger && !$trigger.is($current) ){
          base.setCurrent($trigger);

          if( settings.callback )
            settings.callback(id);
        }
      },

      handleEvent: function(){
        const $trigger = $(this);
        const $target = settings.getTarget($trigger);

        base.scrollTo($target, settings.duration, settings.easing);
        return false;
      },

      setCurrent: function($trigger){
        // Remove selected behavior from the previous
        if($current) $current.removeClass('is-current');

        // Set current data in the container
        $current = $trigger;

        // Add selected behavior to the target
        $trigger.addClass('is-current');
      },

      scrollTo: function($target, duration, easing){
        // Animated scrolling
        $('body, html').animate({
          scrollTop: $target.offset().top  + settings.offsetTop
        }, duration, easing);
      }
    });

    this.init();
    return this;
  };


  $.fn.serialscrolling.defaults = {
    targetSelector: '[data-serialscrolling-target]',
    getTarget: function($element){
      const target = $element.attr('data-serialscrolling');
      return $('[data-serialscrolling-target="'+ target +'"]');
    },
    getTrigger: function($page, $stack){
      const target = $page.attr('data-serialscrolling-target');
      return $stack.filter('[data-serialscrolling="'+ target +'"]');
    },
    duration: 800,
    easing: 'easeInOutExpo',
    offsetTop: 0,
    callback: false
  };

})(jQuery);

/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 *
 * Open source under the BSD License.
 *
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
  *
*/
$.easing.easeInOutExpo = function (x, t, b, c, d){
  if (t==0) return b;
  if (t==d) return b+c;
  if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
  return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
};
