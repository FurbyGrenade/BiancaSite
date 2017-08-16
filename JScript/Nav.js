/**
 * @author James
 */
/* Write JavaScript here */
$(document).ready(function(){
	
  //social
  $(".social-fb").hover(function(){
    $(this).css("background-image","url('../SiteIcons/SocialIcons/FacebookIconRollover.png')");
    },function(){
    $(this).css("background-image","url('../SiteIcons/SocialIcons/FacebookIcon.png')");
  });
  
  $(".social-twitter").hover(function(){
    $(this).css("background-image","url('../SiteIcons/SocialIcons/TwitterIconRollover.png')");
    },function(){
    $(this).css("background-image","url('../SiteIcons/SocialIcons/TwitterIcon.png')");
  });
  
  $(".social-pinterest").hover(function(){
    $(this).css("background-image","url('../SiteIcons/SocialIcons/PinterestIconRollover.png')");
    },function(){
    $(this).css("background-image","url('../SiteIcons/SocialIcons/PinterestIcon.png')");
  });
  
  $(".social-linkedin").hover(function(){
    $(this).css("background-image","url('../SiteIcons/SocialIcons/LinkedinIconRollover.png')");
    },function(){
    $(this).css("background-image","url('../SiteIcons/SocialIcons/LinkedinIcon.png')");
  });
  
  $(".social-instagram").hover(function(){
    $(this).css("background-image","url('../SiteIcons/SocialIcons/InstagramIconRollover.png')");
    },function(){
    $(this).css("background-image","url('../SiteIcons/SocialIcons/InstagramIcon.png')");
  });
  
  $(".social-mail").hover(function(){
    $(this).css("background-image","url('../SiteIcons/SocialIcons/EmailIconRollover.png')");
    },function(){
    $(this).css("background-image","url('../SiteIcons/SocialIcons/EmailIcon.png')");
  });
  
  
	//owl eyes
  	var mouseX = 0, mouseY = 0, limitX = 15, limitY = 14;
	$(window).mousemove(function(e){
	  var offset = $('#owl-eyes-container').offset();
	   mouseX = Math.min(e.pageX - offset.left, limitX);
	   mouseY = Math.min(e.pageY - offset.top, limitY);
	   if (mouseX < 0) mouseX = 0;
	   if (mouseY < 0) mouseY = 0;
	});

	// timed movement interval
	var follower = $("#owl-eyes");
	var xp = 0, yp = 0;
	var loop = setInterval(function(){
	    // change to alter eye speed, higher is slower - 20 default
	    xp += (mouseX - xp) / 10;
	    yp += (mouseY - yp) / 10;
	    follower.css({left:xp, top:yp});
    }, 30);
    
  
  
  //nav bar
  $("#nav-blog").hover(function(){
    $(this).css("background-image","url('../SiteIcons/NavigationIcons/BlogIconRollover.png')");
    },function(){
    $(this).css("background-image","url('../SiteIcons/NavigationIcons/BlogIcon.png')");
  });
  
  $("#nav-photos").hover(function(){
    $(this).css("background-image","url('../SiteIcons/NavigationIcons/PhotoIconRollover.png')");
    },function(){
    $(this).css("background-image","url('../SiteIcons/NavigationIcons/PhotoIcon.png')");
  });
  
  $("#nav-videos").hover(function(){
    $(this).css("background-image","url('../SiteIcons/NavigationIcons/VideoIconRollover.png')");
    },function(){
    $(this).css("background-image","url('../SiteIcons/NavigationIcons/VideoIcon.png')");
  });
  
  $("#nav-juggling").hover(function(){
    $(this).css("background-image","url('../SiteIcons/NavigationIcons/JugglingIconRollover.png')");
    },function(){
    $(this).css("background-image","url('../SiteIcons/NavigationIcons/JugglingIcon.png')");
  });
  
  $("#nav-piano").hover(function(){
    $(this).css("background-image","url('../SiteIcons/NavigationIcons/PianoIconRollover.png')");
    },function(){
    $(this).css("background-image","url('../SiteIcons/NavigationIcons/PianoIcon.png')");
  });
  
  $("#nav-about").hover(function(){
    $(this).css("background-image","url('../SiteIcons/NavigationIcons/AboutIconRollover.png')");
    },function(){
    $(this).css("background-image","url('../SiteIcons/NavigationIcons/AboutIcon.png')");
  });
  
  $("#nav-contact").hover(function(){
    $(this).css("background-image","url('../SiteIcons/NavigationIcons/ContactIconRollover.png')");
    },function(){
    $(this).css("background-image","url('../SiteIcons/NavigationIcons/ContactIcon.png')");
  });
});