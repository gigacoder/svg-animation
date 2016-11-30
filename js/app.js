// function pathPrepare ($el) {
//   var lineLength = $el[0].getTotalLength();
//   $el.css("stroke-dasharray", lineLength);
//   $el.css("stroke-dashoffset", lineLength);
// }
//
// var $word = $("path#word");
// var $dot = $("path#dot");
//
// // prepare SVG
// pathPrepare($word);
// pathPrepare($dot);
//
// // init controller
// var controller = new ScrollMagic.Controller();
//
// // build tween
// var tween = new TimelineMax()
// .add(TweenMax.to($word, 0.9, {strokeDashoffset: 0, ease:Linear.easeNone})) // draw word for 0.9
// .add(TweenMax.to($dot, 0.3, {strokeDashoffset: 0, ease:Linear.easeNone}))  // draw dot for 0.1
// .add(TweenMax.to("path", 1, {stroke: "#33629c", ease:Linear.easeNone}), 0);			// change color during the whole thing
//
// // build scene
// var scene = new ScrollMagic.Scene({triggerElement: "#trigger1", duration: 200, tweenChanges: true})
// .setTween(tween)
// .addIndicators() // add indicators (requires plugin)
// .addTo(controller);
//--------------------------------------------------------------------



function pathPrepare ($el) {
  var lineLength = $el[0].getTotalLength();
  $el.css("stroke-dasharray", lineLength);
  $el.css("stroke-dashoffset", lineLength);
}

var $curvy = $("path#curvy");
var $leftRightLine = $("path#leftRightLine");
// var $fadein-trigger = $("g#fadein-trigger");

// prepare SVG
pathPrepare($curvy);
pathPrepare($leftRightLine);

// init controller
var controller = new ScrollMagic.Controller();
// build tween
var tween = new TimelineMax()
.add(TweenMax.to($curvy, 0.9, {strokeDashoffset: 0, ease:Linear.easeNone})) // draw word for 0.9
.add(TweenMax.to($leftRightLine, 0.6, {strokeDashoffset: 0, ease:Linear.easeNone}))  // draw dot for 0.1
.add(TweenMax.to($curvy, 1, {stroke: "#33629c", ease:Linear.easeNone}), 0)		// change color during the whole thing
.add(TweenMax.to($leftRightLine, 1, {stroke: "#33629c", ease:Linear.easeNone}), 0);			// change color during the whole thing



// build scene
var scene = new ScrollMagic.Scene({triggerElement: "#trigger2", duration: 200, tweenChanges: true})
.setTween(tween)
.addIndicators() // add indicators (requires plugin)
.addTo(controller);
//--------------------------------------------------------------------



//----------- section two animation
function pathPrepare2 ($el) {
  var lineLength = $el[0].getTotalLength();
  $el.css("stroke-dasharray", lineLength);
  $el.css("stroke-dashoffset", lineLength);
}

var $vertline= $("path#vertline");
var $horzline = $("path#horzline");
// var $fadein-trigger = $("g#fadein-trigger");
// prepare SVG
pathPrepare2($vertline);
pathPrepare2($horzline);

// init controller
var controller = new ScrollMagic.Controller();
// build tween
var tween = new TimelineMax()
.add(TweenMax.to($vertline, 0.9, {strokeDashoffset: 0, ease:Linear.easeNone})) // draw word for 0.9
.add(TweenMax.to($horzline, 0.6, {strokeDashoffset: 0, ease:Linear.easeNone}))  // draw dot for 0.1
.add(TweenMax.to($vertline, 1, {stroke: "#33629c", ease:Linear.easeNone}), 0)		// change color during the whole thing
.add(TweenMax.to($horzline, 1, {stroke: "#33629c", ease:Linear.easeNone}), 0);	// change color during the whole thing



// build scene
var scene = new ScrollMagic.Scene({triggerElement: "#trigger3", duration: 200, tweenChanges: true})
.setTween(tween)
.addIndicators() // add indicators (requires plugin)
.addTo(controller);
//--------------------------------------------------------------------


// fade in fade out strats here
//
//

// -246.85502,138.05845
var fadein_tween = TweenMax.to(' #fadein-trigger ', .5,{ opacity: 1, transform: "translateX(-17.84615em) translateY( 9.84615em)" });
var fadeout_tween = TweenMax.to('#fadein-trigger', .5,{ opacity: 0, transform: "translateX(-17.84615em) translateY( 7.84615em)" });


// var fadein_tween = TweenMax.to(' #fadein-trigger ', .5,{ opacity: 1, transform: "translateX(-246.85502) translateY(138.05845)" });
// var fadeout_tween = TweenMax.to('#fadein-trigger', .5,{ opacity: 0, transform: "translateX(-246.85502) translateY(168.05845)" });
console.log(fadein_tween);
var controller = new ScrollMagic.Controller();
var fadein_scene = new ScrollMagic.Scene({
  triggerElement: '#fadein-trigger',
  reverse: true
})
.setTween(fadein_tween)
.addTo(controller);

var fadeout_scene = new ScrollMagic.Scene({
  triggerElement: '#fadeout-trigger',
  reverse: true
})
.setTween(fadeout_tween)
.addTo(controller);
