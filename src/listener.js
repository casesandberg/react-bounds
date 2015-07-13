/* jshint node: true, esnext: true, browser: true */
"use strict";

// http://www.backalleycoder.com/2013/03/18/cross-browser-event-based-element-resize-detection/

var requestFrame = (function(){
    var raf = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame ||
        function(callback){ return window.setTimeout(callback, 20); };
    return function(callback){ return raf(callback); };
  })();

var cancelFrame = (function(){
  var cancel = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame ||
         window.clearTimeout;
  return function(id){ return cancel(id); };
})();

function resizeListener(e) {
  var win = e.target || e.srcElement;
  if (win.__resizeRAF__) cancelFrame(win.__resizeRAF__);
  win.__resizeRAF__ = requestFrame(function(){
    var trigger = win.__resizeTrigger__;
    trigger.__resizeListeners__.forEach(function(callback){
      callback.call(trigger, e);
    });
  });
}

function objectLoad(e) {
  this.contentDocument.defaultView.__resizeTrigger__ = this.__resizeElement__;
  this.contentDocument.defaultView.addEventListener('resize', resizeListener);
}

function addResizeTrigger(element) {
  var obj = element.__resizeTrigger__ = document.createElement('object');
  obj.setAttribute('style', 'display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; pointer-events: none; z-index: -1;');
  obj.__resizeElement__ = element;
  obj.onload = objectLoad;
  obj.data = 'about:blank';
  element.appendChild(obj);
}

module.exports = {
  add: function(element, callback){
    if (!element.__resizeListeners__) {
      element.__resizeListeners__ = [];
      addResizeTrigger(element);
    }
    element.__resizeListeners__.push(callback);
  },

  remove: function(element, callback){
    element.__resizeListeners__.splice(element.__resizeListeners__.indexOf(callback), 1);
  }
};
