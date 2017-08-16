/* Write JavaScript here */
$(document).ready(function(){
	//slideshow
  	//hide all images except first in slideshow
	$("#slideshowFlowers img:gt(0)").hide();
	$("#slideshowLandscapes img:gt(0)").hide();
	$("#slideshowPhilly img:gt(0)").hide();
	$("#slideshowTravel img:gt(0)").hide();
	
	// hide all but first slideshow
	$("#slideshowLandscapes").hide();
	$("#slideshowPhilly").hide();
	$("#slideshowTravel").hide();
	
	/*
	// hide slideshow buttons
	$('#button-pause').hide();
	$('#button-play').hide();
	$('#button-slideshow-left').hide();
	$('#button-slideshow-right').hide();
	*/
	
	// disable all but first slideshow
	var FlowersHidden = false;
	var FlowersPaused = false;
	var LandscapesHidden = true;
	var LandscapesPaused = true;
	var PhillyHidden = true;
	var PhillyPaused = true;
	var TravelHidden = true;
	var TravelPaused = true;
	
	var FADE_OUT_TIME = 0;
	var FADE_IN_TIME = 0;
	var FADE_IN_TIME_BUTTON = 500;
	var FADE_OUT_TIME_BUTTON = 500;
	
	var currentSlide = $('#slideshowFlowers');
	  
	setInterval(function(){ // slideshow timer
		nextSlideshow("0");
	}, 5000);
	
	//next slideshow function
	var nextSlideshow = function(arrowPressed){
		if(!FlowersHidden && (nextSlideshow.arguments[0] === 1 || !FlowersPaused) ){
			var current1 = $('#slideshowFlowers img:visible');
			var next1 = current1.next().length ? current1.next() : $('#slideshowFlowers img:eq(0)');
			current1.fadeOut(FADE_OUT_TIME);
			next1.fadeIn(FADE_IN_TIME);
		}
		else if(!LandscapesHidden && (nextSlideshow.arguments[0] === 1 || !LandscapesPaused) ){
			var current2 = $('#slideshowLandscapes img:visible');
			var next2 = current2.next().length ? current2.next() : $('#slideshowLandscapes img:eq(0)');
			current2.fadeOut(FADE_OUT_TIME);
			next2.fadeIn(FADE_IN_TIME);
		}
		else if(!PhillyHidden && (nextSlideshow.arguments[0] === 1 || !PhillyPaused) ){
			var current3 = $('#slideshowPhilly img:visible');
			var next3 = current3.next().length ? current3.next() : $('#slideshowPhilly img:eq(0)');
			current3.fadeOut(FADE_OUT_TIME);
			next3.fadeIn(FADE_IN_TIME);
		}
		else if(!TravelHidden && (nextSlideshow.arguments[0] === 1 || !TravelPaused) ){
			var current4 = $('#slideshowTravel img:visible');
			var next4 = current4.next().length ? current4.next() : $('#slideshowTravel img:eq(0)');
			current4.fadeOut(FADE_OUT_TIME);
			next4.fadeIn(FADE_IN_TIME);
		}
	};
	
	//previous slideshow function
	var prevSlideshow = function(arrowPressed){
		if(!FlowersHidden && (prevSlideshow.arguments[0] === 1 || !FlowersPaused) ){
			var current1 = $('#slideshowFlowers img:visible');
			var prev1 = current1.prev().length ? current1.prev() : $('#slideshowFlowers img:last');
			current1.fadeOut(FADE_OUT_TIME);
			prev1.fadeIn(FADE_IN_TIME);
		}
		else if(!LandscapesHidden && (prevSlideshow.arguments[0] === 1 || !LandscapesPaused) ){
			var current2 = $('#slideshowLandscapes img:visible');
			var prev2 = current2.prev().length ? current2.prev() : $('#slideshowLandscapes img:last');
			current2.fadeOut(FADE_OUT_TIME);
			prev2.fadeIn(FADE_IN_TIME);
		}
		else if(!PhillyHidden && (prevSlideshow.arguments[0] === 1 || !PhillyPaused) ){
			var current3 = $('#slideshowPhilly img:visible');
			var prev3 = current3.prev().length ? current3.prev() : $('#slideshowPhilly img:last');
			current3.fadeOut(FADE_OUT_TIME);
			prev3.fadeIn(FADE_IN_TIME);
		}
		else if(!TravelHidden && (prevSlideshow.arguments[0] === 1 || !TravelPaused) ){
			var current4 = $('#slideshowTravel img:visible');
			var prev4 = current4.prev().length ? current4.prev() : $('#slideshowTravel img:last');
			current4.fadeOut(FADE_OUT_TIME);
			prev4.fadeIn(FADE_IN_TIME);
		}
	};
		
	// pause button
	$('#button-pause').click(function(){
		// disable slideshow for showing slideshow
		if(!FlowersPaused && !FlowersHidden)
			FlowersPaused = true;
		else if(!LandscapesPaused && !LandscapesHidden)
			LandscapesPaused = true;
		else if(!PhillyPaused && !PhillyHidden)
			PhillyPaused = true;
		else if(!TravelPaused && !TravelHidden)
			TravelPaused = true;
	});
	
	// play button
	$('#button-play').click(function(){		
		// disable slideshow for showing slideshow
		if(FlowersPaused && !FlowersHidden)
			FlowersPaused = false;
		else if(LandscapesPaused && !LandscapesHidden)
			LandscapesPaused = false;
		else if(PhillyPaused && !PhillyHidden)
			PhillyPaused = false;
		else if(TravelPaused && !TravelHidden)
			TravelPaused = false;
	});
	
	// left and right arrow click
	$('#button-slideshow-left').click(function(){
		prevSlideshow(1);
	});
	
	$('#button-slideshow-right').click(function(){
		nextSlideshow(1);
	});
	
	// select gallery from pictures at bottom
	
	$("#slideshowFlowersArea").click(function(){
		if(!TravelHidden){
			$("#slideshowTravel").hide();
		}
		else if(!LandscapesHidden){
			$("#slideshowLandscapes").hide();
		}
		else if(!PhillyHidden){
			$("#slideshowPhilly").hide();
		}
		
		if(FlowersHidden){
			$("#slideshowFlowers").fadeIn();
			
			$('#slideshow-title').fadeOut(function(){
				$('#slideshow-title').text("Flowers").show();
			});
		}
		
		FlowersHidden = false;
		LandscapesHidden = true;
		PhillyHidden = true;
		TravelHidden = true;
	});
	
	$("#slideshowLandscapesArea").click(function(){
		if(!FlowersHidden){
			$("#slideshowFlowers").hide();
		}
		else if(!TravelHidden){
			$("#slideshowTravel").hide();
		}
		else if(!PhillyHidden){
			$("#slideshowPhilly").hide();
		}
		
		if(LandscapesHidden){
			$("#slideshowLandscapes").fadeIn();
			
			$('#slideshow-title').fadeOut(function(){
				$('#slideshow-title').text("Landscapes").show();
				
			});
		}
		
		FlowersHidden = true;
		LandscapesHidden = false;
		PhillyHidden = true;
		TravelHidden = true;
	});
	
	$("#slideshowPhillyArea").click(function(){
		if(!FlowersHidden){
			$("#slideshowFlowers").hide();
		}
		else if(!LandscapesHidden){
			$("#slideshowLandscapes").hide();
		}
		else if(!TravelHidden){
			$("#slideshowTravel").hide();
		}
		
		if(PhillyHidden){
			$("#slideshowPhilly").fadeIn();
			
			$('#slideshow-title').fadeOut(function(){
				$('#slideshow-title').text("Philadelphia").show();
			});
		}
		
		FlowersHidden = true;
		LandscapesHidden = true;
		PhillyHidden = false;
		TravelHidden = true;
	});
	
	$("#slideshowTravelArea").click(function(){
		if(!FlowersHidden){
			$("#slideshowFlowers").hide();
		}
		else if(!LandscapesHidden){
			$("#slideshowLandscapes").hide();
		}
		else if(!PhillyHidden){
			$("#slideshowPhilly").hide();
		}
		
		if(TravelHidden){
			$("#slideshowTravel").fadeIn();
			
			$('#slideshow-title').fadeOut(function(){
				$('#slideshow-title').text("Travel").show();
			});
		}
		
		FlowersHidden = true;
		LandscapesHidden = true;
		PhillyHidden = true;
		TravelHidden = false;
	});
	
	//change slideshow thumbnail text on hover
	$("#slideshowFlowersArea").hover(
		function(){
			$("#slideshow-flowers-title").css("color", "#ca11ec");
		},
		function(){
			$("#slideshow-flowers-title").css("color", "#11a2ec");
		}
	);
	
	$("#slideshowLandscapesArea").hover(
		function(){
			$("#slideshow-landscapes-title").css("color", "#ca11ec");
		},
		function(){
			$("#slideshow-landscapes-title").css("color", "#11a2ec");
		}
	);
	
	$("#slideshowPhillyArea").hover(
		function(){
			$("#slideshow-philly-title").css("color", "#ca11ec");
		},
		function(){
			$("#slideshow-philly-title").css("color", "#11a2ec");
		}
	);
	
	$("#slideshowTravelArea").hover(
		function(){
			$("#slideshow-travel-title").css("color", "#ca11ec");
		},
		function(){
			$("#slideshow-travel-title").css("color", "#11a2ec");
		}
	);
	
	//change slideshow icons on hover
	$("#button-slideshow-left").hover(
		function(){
			$("#button-slideshow-left").css("background", "url('../SiteAssets/Slideshow/ButtonLeftHover.png') no-repeat");
		},
		function(){
			$("#button-slideshow-left").css("background", "url('../SiteAssets/Slideshow/ButtonLeft.png') no-repeat");
		}
	);
	
	$("#button-pause").hover(
		function(){
			$("#button-pause").css("background", "url('../SiteAssets/Slideshow/ButtonPauseHover.png') no-repeat");
		},
		function(){
			$("#button-pause").css("background", "url('../SiteAssets/Slideshow/ButtonPause.png') no-repeat");
		}
	);
	
	$("#button-play").hover(
		function(){
			$("#button-play").css("background", "url('../SiteAssets/Slideshow/ButtonPlayHover.png') no-repeat");
		},
		function(){
			$("#button-play").css("background", "url('../SiteAssets/Slideshow/ButtonPlay.png') no-repeat");
		}
	);
	
	$("#button-slideshow-right").hover(
		function(){
			$("#button-slideshow-right").css("background", "url('../SiteAssets/Slideshow/ButtonRightHover.png') no-repeat");
		},
		function(){
			$("#button-slideshow-right").css("background", "url('../SiteAssets/Slideshow/ButtonRight.png') no-repeat");
		}
	);
	
});