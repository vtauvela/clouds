/*! jqlouds - v - 2014-07-06
* https://github.com/enricodeleo/jqlouds
* Copyright (c) 2014 Enrico Deleo; Licensed MIT */
!function(a){a.extend({random:function(a){return Math.floor(a*(Math.random()%1))},randomBetween:function(b,c){return b+a.random(c-b+1)}}),a.fn.jQlouds=function(b){return b=a.extend({},a.jQlouds.options,b),this.each(function(){var c=a.jQlouds.jQloudsFactory(b,this);a(this).addClass("jqlouds-clouds").css({position:"relative",minHeight:b.maxHeight+"px",height:b.skyHeight+"px"}).append(c),b.wind===!0&&a(this).trigger("jqlouds.init",[a(this)])})},a.jQlouds=function(b){return b=a.extend({},a.jQlouds.options,b),function(){}},a.jQlouds.options={src:"img/new-cloud.png",maxWidth:300,maxHeight:200,minClouds:0,maxClouds:10,skyHeight:250,wind:!1},a.jQlouds.jQloudsFactory=function(b,c){var d,e=a(c).width(),f="",g=a.randomBetween(b.minClouds,b.maxClouds);d=b.skyHeight?b.skyHeight:a(c).height();for(var h=0;g>h;h++){var i=a.randomBetween(1,4),j=Math.floor(b.maxHeight/i),k=Math.floor(b.maxWidth/i),l=a("<img />",{"class":"jqlouds-cloud",src:b.src,height:j,width:k});if(l.css({position:"absolute",bottom:d*("0."+a.randomBetween(1,9)+a.randomBetween(1,9))-j+"px",left:e*("0."+a.randomBetween(1,90))+"px"}),1===a.randomBetween(1,3)){var m="blur(3px)";l.addClass("blur").css("filter",m).css("webkitFilter",m).css("mozFilter",m).css("oFilter",m).css("msFilter",m)}2===a.randomBetween(1,3)&&l.css({opacity:"0."+a.randomBetween(5,8)}),f+=l[0].outerHTML}return f},a(document).on("jqlouds.init",function(b,c){c.find("img.jqlouds-cloud").each(function(){a.jQlouds.jQloudsAnimate(a(this))})}),a(document).on("jqlouds.wind",function(b,c){a.jQlouds.jQloudsAnimate(c)}),a.jQlouds.jQloudsAnimate=function(b){var c;c=0===a.randomBetween(0,1)?"+":"-",b.delay(a.randomBetween(2e3,6e3)).animate({left:c+"="+a.randomBetween(0,10)},a.randomBetween(4e3,7e3),"linear",function(){a(document).trigger("jqlouds.wind",[b])})}}(jQuery);


$('body').jQlouds({
  maxClouds: 10,
  minClouds: 10,
  maxWidth: 300,
  maxHeight: 200,
  wind: true,
  src: 'img/new-cloud.png'
});