!function(){function n(n){var i=location.search.length>0?location.search.substring(1):null;if(null!==i){for(var t={},e=i.split("&"),s=0;s<e.length;s++){var r=e[s].indexOf("=");if(r!=-1){var l=e[s].substring(0,r),o=e[s].substring(r+1);o=decodeURIComponent(o),t[l]=o}}return t[n]}return null}var i=$("#recruit-info .col-2 .tab-content");$("#recruit-info .col-1 .tab").click(function(){$(this).addClass("cur").siblings().removeClass("cur"),i.eq($(this).index()).addClass("cur").siblings().removeClass("cur")});var t=$("#recruit-info .col-2 .tab-content-2"),e=t.find(".option-content");t.find(".options .option").click(function(){$(this).addClass("cur").siblings().removeClass("cur"),e.eq($(this).index()).addClass("cur").siblings().removeClass("cur")}),e.find(".title").click(function(){$(this).parent().toggleClass("cur").siblings().removeClass("cur")});var s=n("key");if(null!==s&&""!==s){for(var r=new RegExp(s),l='<span class="highlight">'+s+"</span>",o=[0,0,0,0,0,0,0],c=t.find(".options .option"),a=0,u=e.length;a<u;a++)for(var f=e.eq(a).find(".item .title h3"),d=0,h=f.length;d<h;d++){var g=f.eq(d).html().replace(r,function(){return o[a]++,l});f.eq(d).html(g)}for(var v=0,p=o.length;v<p;v++)o[v]>0&&c.eq(v).append('<i class="num">'+o[v]+"</i>");$("#recruit-info .col-1 .tab").eq(1).click()}$("header .container .nav").click(function(){$("header .container .links").toggleClass("show")})}();