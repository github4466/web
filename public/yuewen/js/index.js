!function(){function e(e){var s=$("#"+e);$(window).width(),$(window).height(),s.height(),s.width();$('<div id="pop-box-mask"></div>').appendTo("body").fadeIn(200),s.find(".icon-close").click(function(){i(e)}),s.animate({opacity:"show"},300)}function i(e){$("#pop-box-mask").remove(),$("#"+e).animate({opacity:"hide"},100)}var s,o=$("#slide-show .slide-ctrl .circle"),n=$("#slide-show .slide"),t=o.length,a=0;n.eq(0).show(),$("#slide-show").hover(function(){clearInterval(s)},function(){s=setInterval(function(){o.eq(a).addClass("cur").siblings().removeClass("cur"),n.eq(a).fadeIn(500).siblings().fadeOut(500),a++,a===t&&(a=0)},3e3)}).trigger("mouseleave"),o.on("click",function(){$(this).addClass("cur").siblings().removeClass("cur");var e=$(this).index();n.eq(e).fadeIn(500).siblings().fadeOut(500),a=e});var l=$("#book .container").width(),r=0;$("#book .pre").on("click",function(){r--,r===-1&&(r=2),$("#book ul").css("margin-left",-r*l+"px")}),$("#book .next").on("click",function(){r++,3===r&&(r=0),$("#book ul").css("margin-left",-r*l+"px")});var c=$("#mobile-product .slide");c.eq(0).show(),$("#mobile-product .slide-ctrl .ctrl-item").on("click",function(){$(this).addClass("cur").siblings().removeClass("cur"),c.eq($(this).index()).fadeIn(300).siblings().fadeOut(300)});var d=$("#brand .slides li");$("#brand .links a").hover(function(){var e=$(this).index();$(this).addClass("cur").siblings().removeClass("cur"),d.eq(e).addClass("cur").siblings().removeClass("cur")},function(){}),$("#news .article-more button").click(function(){$.ajax({url:"./html/articles.html",type:"GET",dataType:"html",success:function(i){var s=/<ul class="container">[\s\S]*<\/ul>/.exec(i);console.log(s),$("#news .article-more .text").html(s),e("article-box")}})});var u=[];u[0]=$("#book").offset().top,u[1]=$("#mobile-product").offset().top,u[2]=$("#brand").offset().top,u[3]=$("#news").offset().top,u[4]=$("#contact").offset().top;var h=$("header"),f=$("header .links a"),v=$("header").height();$(window).scroll(function(){var e=$(window).scrollTop()+v;e>100?h.addClass("header-change"):h.removeClass("header-change");for(var i=0;i<u.length;i++)if(Math.abs(e-u[i])<50)return void f.eq(i).addClass("cur").siblings().removeClass("cur")}).trigger("scroll"),f.click(function(){var e=u[$(this).index()]-v;return $("html, body").animate({scrollTop:e+"px"},{duration:500,easing:"swing"}),!1})}();