$(function(){
  if(require){
    var ngui = require('nw.gui');
    var nwin = ngui.Window.get();
    nwin.show();
  }
});