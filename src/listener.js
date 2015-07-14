/* jshint node: true, esnext: true, browser: true */
"use strict";

// http://www.backalleycoder.com/2013/03/18/cross-browser-event-based-element-resize-detection/

// http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/
var requestFrame = function(callback){
  var raf = window.requestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            function(callback){
              return window.setTimeout(callback, 1000 / 60);
            };

  return raf(callback);
};

var cancelFrame = function(id){
  var cancel = window.cancelAnimationFrame ||
               window.mozCancelAnimationFrame ||
               window.webkitCancelAnimationFrame ||
               window.clearTimeout;

  return cancel(id);
};

function resizeListener(e) {
  var element = e.target || e.srcElement;
  if (element.resizeAnimation) {
    cancelFrame(element.resizeAnimation);
  };
  element.resizeAnimation = requestFrame(function() {
    var trigger = element.resizeTrigger;
    trigger.resizeListener.forEach(function(callback) {
      callback.call(trigger, e);
    });
  });
}

function objectLoad(e) {
  this.contentDocument.defaultView.resizeTrigger = this.resizeElement;
  this.contentDocument.defaultView.addEventListener('resize', resizeListener);
}

function addChildTrigger(element) {
  var obj = document.createElement('object');
  obj.setAttribute('style', 'display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; pointer-events: none; z-index: -1;');
  // Make it not focusable
  obj.setAttribute('tabindex', '-1');
  obj.resizeElement = element;
  obj.onload = objectLoad;
  obj.data = 'about:blank';

  element.appendChild(obj);
  element.resizeTrigger = obj;
}

module.exports = {
  add: function(element, callback){
    if (!element.resizeListener) {
      element.resizeListener = [];
      addChildTrigger(element);
    }
    element.resizeListener.push(callback);
    // console.log(element);
  },

  remove: function(element, callback){
    element.resizeListener.splice(element.resizeListener.indexOf(callback), 1);
  }
};
