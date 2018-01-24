/*! Thrive Leads - The ultimate Lead Capture solution for wordpress - 2017-06-07
* https://thrivethemes.com 
* Copyright (c) 2017 * Thrive Themes */

var TVE_jQFn={},TCB_Front={tableSort:function(a){a.on("click",function(){function b(a,b){return a.text==b.text?0:a.text>b.text?1:-1}function c(a,b){return a.text==b.text?0:a.text>b.text?-1:1}var d=ThriveGlobal.$j(this),e=d.index(),f=d.parents(".tve_make_sortable"),g=f.find("tbody"),h=[],i=[],j="down"==d.attr("data-direction")?"up":"down",k=[];d.attr("data-direction",j),ThriveGlobal.$j(f).find("tbody tr").each(function(){var a=ThriveGlobal.$j(this),b=a.find("> td").eq(e),c=parseInt(b.text());isNaN(c)?h.push({tr:a,text:b.text().trim().toLowerCase()}):i.push({tr:a,text:c})}),"down"==j?h.sort(b):h.sort(c),"down"==j?i.sort(b):i.sort(c),k="down"==j?i.concat(h):h.concat(i),ThriveGlobal.$j.each(k,function(a,b){g.append(b.tr)}),a.attr("data-direction",""),d.attr("data-direction",j)})},getCookie:function(a){for(var b=a+"=",c=document.cookie.split(";"),d=0;d<c.length;d++){for(var e=c[d];" "==e.charAt(0);)e=e.substring(1,e.length);if(0==e.indexOf(b))return e.substring(b.length,e.length)}return null},setCookie:function(a,b,c){if("number"==typeof c.expires){var d=c.expires,e=c.expires=new Date;e.setTime(+e+864e5*d)}return document.cookie=[encodeURIComponent(a),"=",encodeURIComponent(b),c.expires?"; expires="+c.expires.toUTCString():"",c.path?"; path="+c.path:"",c.domain?"; domain="+c.domain:"",c.secure?"; secure":""].join("")},postGridLayout:function(){var a=ThriveGlobal.$j(".tve_post_grid_masonry");if(a.length>0)try{a.masonry()}catch(a){console.log(a)}var b=ThriveGlobal.$j(".tve_post_grid_grid");b.length<=0||b.find(".tve_pg_row").each(function(){var a=0,b=ThriveGlobal.$j(this).css("height","");b.find(".tve_post").each(function(){var b=ThriveGlobal.$j(this),c=parseInt(b.css("height"));c>a&&(a=c),b.css("height","100%")}),b.css("height",a-1+"px")})},changeAutoplayVideo:function(){ThriveGlobal.$j(".thrv_responsive_video").each(function(){var a=ThriveGlobal.$j(this),b=a.find("iframe");0==b.length&&(b=a.find(".tve-video"));var c=b.attr("src"),d=b.attr("data-src"),e=a.attr("data-type"),f="";if(void 0===d&&(d=""),"youtube"==e||"vimeo"==e?f="&autoplay=1":"wistia"==e?f="&autoPlay=true":"self"==e&&(f="1"),tve_frontend_options.is_editor_page&&"1"===a.attr("data-autoplay")&&"self"!==e){var g=c.replace(f,""),h=d.replace(f,"");b.attr("src",g).attr("data-src",h)}tve_frontend_options.is_editor_page||"1"!==a.attr("data-autoplay")||(0!==d.length&&b.attr("data-src",d+f),0!==c.length&&("self"==e?b.attr("autoplay",f):b.attr("src",c+f)))})},isValidUrl:function(a){return/(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/.test(a)},pageSectionHeight:function(){var a=ThriveGlobal.$j(window);ThriveGlobal.$j(".pdfbg.pdwbg").css({"box-sizing":"border-box",height:a.height()+"px"}),ThriveGlobal.$j(".pddbg").css("max-width",a.width()+"px"),ThriveGlobal.$j(".pddbg.pdfbg").each(function(){var b=ThriveGlobal.$j(this).css("height",""),c=parseInt(b.attr("data-height")),d=parseInt(b.attr("data-width")),e=a.width();if(!isNaN(c)&&c&&d&&!isNaN(d))if(e<=d){var f=e*c/d;b.css("min-height",f+"px")}else b.css("min-height",c+"px")})},getBrowserScrollSize:function(){var a=ThriveGlobal.$j,b={border:"none",height:"200px",margin:"0",padding:"0",width:"200px"},c=a("<div>").css(a.extend({},b)),d=a("<div>").css(a.extend({left:"-1000px",overflow:"scroll",position:"absolute",top:"-1000px"},b)).append(c).appendTo("body").scrollLeft(1e3).scrollTop(1e3),e={height:d.offset().top-c.offset().top||0,width:d.offset().left-c.offset().left||0};return d.remove(),e},openLightbox:function(a,b){function c(a,b){a.find("iframe").not(".thrv_social_default iframe").each(function(){var a=ThriveGlobal.$j(this).addClass("tcb-dr-done");a.attr("data-src",a.attr("src")),a.attr("src","")}),a.find("video").each(function(){ThriveGlobal.$j(this)[0].pause()}),void 0===b&&1===ThriveGlobal.$j(".tve_lb_open").length&&(e.removeClass(g).css("padding-right",""),f.removeClass(g)),a.removeClass("tve_lb_open tve_lb_opening").addClass("tve_lb_closing"),setTimeout(function(){a.attr("class","").css("display","none").find("tve_p_lb_content").trigger("tve.lightbox-close")},300),ThriveGlobal.$j("#tve-lg-error-container").hide()}function d(b){var c,d,e=a.find(".tve_p_lb_content"),f=ThriveGlobal.$j(window).height(),g=void 0!==b&&b?"animate":"css";TCB_Front.postGridLayout(),c=e.outerHeight(!0),d=(f-c)/2,a.find(".tve_p_lb_overlay")[g]({height:c+80+"px","min-height":f+"px"},200),e[g]({top:(d<40?40:d)+"px"},200),c+40>f&&a.addClass("tve-scroll")}var e=ThriveGlobal.$j("body"),f=ThriveGlobal.$j("html"),g="tve-o-hidden tve-l-open tve-hide-overflow",h=this.getBrowserScrollSize().width,i=parseInt(e.css("padding-right"));a.find("input[placeholder]").thrive_iphone_placeholder(),a.find("video").each(function(){ThriveGlobal.$j(this)[0].currentTime=0,ThriveGlobal.$j(this)[0].play()}),a.off().on("click",".tve_p_lb_close",function(){return c(a),!1}),e.off("keyup.tve_lb_close").on("keyup.tve_lb_close",function(b){if(27==b.which)return c(a),!1}),a.children(".tve_p_lb_overlay").off("click.tve_lb_close").on("click.tve_lb_close",function(){return c(a),!1}),c(ThriveGlobal.$j(".tve_p_lb_background.tve_lb_open"),!0),a.addClass("tve_p_lb_background tve_lb_anim_"+b),e.addClass(g),f.addClass(g),ThriveGlobal.$j(window).height()<ThriveGlobal.$j(document).height()&&e.css("padding-right",i+h+"px"),a.find(".tve_scT").length?a.find(".tve_scT").each(function(){var a=ThriveGlobal.$j(this),b=parseInt(a.attr("data-selected"));tve_frontend_options.is_editor_page||a.find("> ul li").eq(isNaN(b)?0:b).click()}):a.find("iframe").not(".thrv_social_default iframe").each(function(){var a=ThriveGlobal.$j(this);a.attr("data-src")&&a.attr("src",a.attr("data-src"))}),setTimeout(function(){a.addClass("tve_lb_opening"),setTimeout(function(){d()},0)},20),a.find(".tve_p_lb_content").trigger("tve.before-lightbox-open"),setTimeout(function(){a.removeClass("tve_lb_opening").addClass("tve_lb_open").find(".tve_p_lb_content").trigger("tve.lightbox-open")},300),ThriveGlobal.$j(window).resize(function(){d()}),a.on("lbresize",function(){d(!0)})},event_triggers:function(a){window.TVE_Event_Manager_Registered_Callbacks&&a.find(".tve_evt_manager_listen").each(function(){var a=ThriveGlobal.$j(this),b=a.attr("data-tcb-events");if(b||(b=a.closest(".thrv_wrapper").attr("data-tcb-events")),!b)return!0;try{b=ThriveGlobal.$j.parseJSON(b.replace("__TCB_EVENT_","").replace("_TNEVE_BCT__","")),ThriveGlobal.$j.each(b,function(b,c){if(TVE_Event_Manager_Registered_Callbacks[c.a])if("thrive_wistia"===c.a){if(ThriveGlobal.wistia_loaded||(ThriveGlobal.wistia_loaded=[]),-1!==ThriveGlobal.wistia_loaded.indexOf(c.config.event_option_uniq))return;ThriveGlobal.wistia_loaded.push(c.config.event_option_uniq);var d=c.config.event_video_url.split("/").pop(),e=c.config.event_start_min_time?60*parseInt(c.config.event_start_min_time):0,f=c.config.event_start_sec_time?parseInt(c.config.event_start_sec_time):0,g=" popoverContent=html popover=true videoFoam=true playbar="+(c.config.event_option_play_bar?"true":"false");g+=" chromeless="+(c.config.event_option_hide_controls?"true":"false"),g+=" controlsVisibleOnLoad="+(c.config.event_option_onload?"true":"false"),g+=" fullscreenButton="+(c.config.event_option_fs?"false":"true"),c.config.event_video_color&&(g+=" playerColor="+c.config.event_video_color),!isNaN(e)&&isNaN(f),a.wrap('<span id="'+c.config.event_option_uniq+"_"+d+'" class="tve_wistia_popover wistia_embed wistia_async_'+d+" "+g+'"></span>')}else a.off(c.t+".tcbevt").on(c.t+".tcbevt",function(){return TVE_Event_Manager_Registered_Callbacks[c.a].call(a[0],c.t,c.a,c.config?c.config:{})})})}catch(a){console.log("Could not parse events"),console.log(a)}})},show_data_elemements:function(a){tve_frontend_options.is_editor_page||ThriveGlobal.$j(".thrv_data_element").filter(":not(.thrv_data_element_start)").each(function(){var b=ThriveGlobal.$j(this),c=ThriveGlobal.$j(window).height();a+c>=b.offset().top+b.outerHeight()&&b.addClass("thrv_data_element_start").trigger("tve.start-animation")})},onDOMReady:function(){function a(a){var b=a.find(".tve_wistia_container"),c=b.attr("data-start-time"),d=b.attr("data-video-id"),e={};window._wq=window._wq||[],e["wistia-"+d+"-1"]=function(a){a.time(c),a.play(),a.popover.show()},_wq.push(e)}function b(){h.filter(":not(.tve-recapcha-rendered)").each(function(){var a=ThriveGlobal.$j(this),b=window.innerWidth<400?"compact":a.attr("data-size");a.addClass("tve-recaptcha-rendered"),grecaptcha.render(this.id,{sitekey:a.attr("data-site-key"),theme:a.attr("data-theme"),type:a.attr("data-type"),size:b})})}function c(){"undefined"==typeof grecaptcha?setTimeout(c,50):b()}!window.TVE_Dash||TVE_Dash.ajax_sent?this.getShareCounts():ThriveGlobal.$j(document).on("tve-dash.load",function(a){var b=TCB_Front.getShareCounts(ThriveGlobal.$j("body"),{},!0);b&&TVE_Dash.add_load_item("tcb_social",b[0],b[1])}),ThriveGlobal.$j.each(TVE_jQFn,function(a,b){ThriveGlobal.$j.fn[a]=b});var d=ThriveGlobal.$j("ul.tve_w_menu.tve_horizontal"),e=d.length;if(d.each(function(){this.style.zIndex=e+5,ThriveGlobal.$j(this).find("ul").css("z-index",e+6),e--}),ThriveGlobal.$j(".tve_scT").each(function(){var a=ThriveGlobal.$j(this),b=parseInt(a.attr("data-selected"));a.find("iframe").not(".thrv_social_default iframe").each(function(){var a=ThriveGlobal.$j(this);a.is(":visible")&&a.attr("data-src")&&a.attr("data-src").length&&a.attr("src").length<=0?(a.attr("src",a.attr("data-src")),a.attr("data-src",""),a.removeClass("tcb-dr-done")):a.is(":visible")||a.attr("src").length&&(a.addClass("tcb-dr-done"),a.attr("data-src",a.attr("src")),a.attr("src",""))}),tve_frontend_options.is_editor_page||a.find("> ul li").eq(isNaN(b)?0:b).click()}),ThriveGlobal.$j(".thrv_toggle_shortcode").each(function(){ThriveGlobal.$j(this).find("iframe").not(".thrv_social_default iframe").not(".tcb-dr-done").each(function(){var a=ThriveGlobal.$j(this);a.addClass("tcb-dr-done"),a.attr("src")&&a.attr("data-src",a.attr("src")),a.attr("src","")})}),tve_frontend_options.is_editor_page)try{ThriveGlobal.$j("html").getNiceScroll().remove()}catch(a){}else{if(TCB_Front.getCookie("account_create_fields")&&"null"!=TCB_Front.getCookie("account_create_fields")){var f=decodeURIComponent(TCB_Front.getCookie("account_create_fields"));f=JSON.parse(f),ThriveGlobal.$j.each(f,function(a,b){var c=ThriveGlobal.$j("body").find("input[name="+b.name+"]");c.val(b.value).hide(),c.parent().append('<div class="tve-editable-field"><p>'+b.value+'</p><span class="thrv-icon thrv-icon-mode_edit tve-edit-field"></span></div>')}),TCB_Front.setCookie("account_create_fields",null,{path:"/"})}ThriveGlobal.$j("input[type=password], input[type=confirm_password]").on("keyup",function(){var a,b=ThriveGlobal.$j(this),c=g(b.val()),d="#e3ecef",e="";b.next().find(".tve-password-strength").css({"background-color":"#e3ecef"}),c<30?(d="#ef5350",e="Weak",a=b.next().find(".tve-password-strength").first()):c>=30&&c<60?(d="#ffa726",e="So-so",a=b.next().find(".tve-password-strength:lt(2)")):c>=60&&c<80?(d="#8bc34a",e="Good",a=b.next().find(".tve-password-strength:lt(3)")):(d="#4caf50",e="Great!",a=b.next().find(".tve-password-strength:lt(4)")),a.each(function(){ThriveGlobal.$j(this).css({"background-color":d})}),b.next().find(".tve-password-strength-text").text(e).css({color:d})});var g=function(a){var b=0;if(!a)return b;for(var c={},d=0;d<a.length;d++)c[a[d]]=(c[a[d]]||0)+1,b+=5/c[a[d]];var e={digits:/\d/.test(a),lower:/[a-z]/.test(a),upper:/[A-Z]/.test(a),nonWords:/\W/.test(a)},f=0;for(var g in e)f+=1==e[g]?1:0;return b+=10*(f-1),parseInt(b)};ThriveGlobal.$j(document).on("click",".tve-edit-field",function(){ThriveGlobal.$j(this).parent().hide().prev().show()}),ThriveGlobal.$j(document).on("click",".tve-close-error-message",function(){ThriveGlobal.$j(this).parent().hide().prev().show()}),ThriveGlobal.$j(".thrv_fill_counter").each(function(){var a=ThriveGlobal.$j(this);a.one("tve.start-animation",function(){var b=a.find(".tve_fill_counter"),c=b.attr("data-fill"),d=2*c,e=["-webkit-transform","-ms-transform","transform"];for(var f in e)ThriveGlobal.$j(".tve_fill_c_in, .tve_fill_circle.tve_fill_circle1",this).css(e[f],"rotate("+c+"deg)"),ThriveGlobal.$j(".tve_fill_c_in-d",this).css(e[f],"rotate("+d+"deg)")})}),ThriveGlobal.$j(".thrv_number_counter").each(function(){ThriveGlobal.$j(this).on("tve.start-animation",function(){function a(b,d){b<=d?(c.text(b),b+=h,b+h>d&&(c.text(d),clearTimeout(g)),g=setTimeout(function(){a(b,d)},50)):clearTimeout(g)}function b(a,d){a>=d?(c.text(a),a-=h,a-h<d&&(c.text(d),clearTimeout(g)),g=setTimeout(function(){b(a,d)},50)):clearTimeout(g)}var c=ThriveGlobal.$j(".tve_numberc_text",this),d=c.attr("data-counter"),e=c.attr("data-counter-start")?c.attr("data-counter-start"):0,f=parseInt(e),g=null,h=Math.ceil((d>f?d:f)/100);h=h||1,f<d?a(f,d):b(f,d)})});ThriveGlobal.$j(".tve_p_lb_content").find("video").each(function(){ThriveGlobal.$j(this)[0].pause()}),ThriveGlobal.$j(".tve_p_lb_content iframe").not(".thrv_social_default iframe").not(".tcb-dr-done").each(function(){var a=ThriveGlobal.$j(this).addClass("tcb-dr-done");a.attr("src")&&a.attr("data-src",a.attr("src")),a.attr("src","")}),ThriveGlobal.$j(".thrv_content_reveal").each(function(){var a=ThriveGlobal.$j(this),b=parseInt(a.attr("data-after")),c=a.parents(".tve_p_lb_content"),d=a.children("thrv_tabs_shortcode").length,e=a.children(".thrv_toggle_shortcode").length;b=isNaN(b)?0:b,a.find("iframe").not(".tcb-dr-done").not(".thrv_social_default iframe").each(function(){var a=ThriveGlobal.$j(this);a.addClass("tcb-dr-done"),a.attr("src")&&a.attr("data-src",a.attr("src")),a.attr("src","")});var f=function(){setTimeout(function(){a.slideDown(200,function(){a.trigger("lbresize")}),a.data("scroll")&&jQuery("html, body").animate({scrollTop:a.offset().top-270}),"1"===tve_frontend_options.is_single&&"string"==typeof a.attr("data-redirect-url")&&a.attr("data-redirect-url").length&&TCB_Front.isValidUrl(a.attr("data-redirect-url"))&&(window.location=a.attr("data-redirect-url")),a.find("iframe").not(".thrv_social_default iframe").each(function(){var a=ThriveGlobal.$j(this);d&&e||a.attr("src",a.attr("data-src"))}),a.trigger("tve-content-revealed")},1e3*b)};c.length?c.bind("tve.lightbox-open",f):f()}),ThriveGlobal.$j(".thrv_tw_qs").tve_front_tw_qs(),ThriveGlobal.$j(".tve_countdown_timer_evergreen").thrive_tcb_timer(),ThriveGlobal.$j(".thrv_countdown_timer").not(".tve_countdown_timer_evergreen").thrive_tcb_timer(),ThriveGlobal.$j(".thrv_lead_generation").tve_front_lead_generation(),setTimeout(function(){try{ThriveGlobal.$j(".tve_typefocus").each(function(){var a=ThriveGlobal.$j(this),b=[],c=parseInt(a.attr("data-speed"));0!==a.attr("data-typist").length&&(b.push(a.text()),b=b.concat(a.attr("data-typist").split("|")),a.typed({strings:b,loop:!0,typeSpeed:125,backSpeed:50,highlightClass:a.attr("data-highlight")?"tve_selected_typist":"",backDelay:c,contentType:"text",startDelay:800,showCursor:a.hasClass("tve_typefocus_cursor")}))})}catch(a){console.log(a)}},1e3),ThriveGlobal.$j(".thrv_responsive_video").off().click(function(){var b=ThriveGlobal.$j(this),c=b.attr("data-type");if(b.data("tve-video-clicked"))if("wistia"==c)a(b);else{var d=Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor")>0,e=navigator.userAgent.toLowerCase().indexOf("chrome")>-1;if(0===parseInt(ThriveGlobal.$j(this).attr("data-controls"))||0===parseInt(ThriveGlobal.$j(this).attr("data-controls"))&&d||e){var f=ThriveGlobal.$j(this).find("video");f.prop("paused")?f[0].play():f[0].pause()}}else if(0!=ThriveGlobal.$j(this).find(".video_overlay_image").length){var g=b.find("iframe");0===g.length&&(g=b.find(".tve-video"));var h=g.attr("src");if("youtube"==c||"vimeo"==c)g.attr("src",h+"&autoplay=1"),b.find(".video_overlay_image").fadeOut();else if("wistia"==c){var i=b.find(".tve_wistia_container");if(0!==i.length){if("undefined"!=typeof Wistia){var j=Wistia.api(i.attr("id")),k=parseInt(i.attr("data-start-time"));!isNaN(k)&&k&&j.time(k),j.play()}else a(b);return!1}g.attr("src",h+"&autoPlay=true"),b.find(".video_overlay_image").fadeOut()}else if("self"==c){var f=ThriveGlobal.$j(this).find("video");f.prop("paused")?(f[0].play(),ThriveGlobal.$j(this).find(".video_overlay_image").removeClass()):f[0].pause(),b.find(".video_overlay_image").fadeOut()}}else{var f=ThriveGlobal.$j(this).find("video");f.attr("controls")||(f.prop("paused")?f[0].play():f[0].pause())}b.data("tve-video-clicked",!0)})}if(TCB_Front.changeAutoplayVideo(),TCB_Front.postGridLayout(),ThriveGlobal.$j(window).load(function(){TCB_Front.postGridLayout()}),window.FB&&setTimeout(function(){ThriveGlobal.$j(".thrv_social_default .tve_s_fb_share, .thrv_social_default .tve_s_fb_like").each(function(){FB.XFBML.parse(this)})},200),ThriveGlobal.$j(window).on("scroll",function(){var a=ThriveGlobal.$j(document).scrollTop();TCB_Front.show_data_elemements(a);try{ThriveGlobal.$j(".tve_typefocus").each(function(){var b=ThriveGlobal.$j(this),c=ThriveGlobal.$j(window).height();b.data("typed")&&(a+c>=b.offset().top&&b.offset().top>a||"start"==b.attr("data-typefocus")?b.typed("start"):(b.attr("data-typefocus"),b.typed("pause")))})}catch(a){console.log(a)}}),ThriveGlobal.$j(window).trigger("scroll"),!tve_frontend_options.is_editor_page){var h=ThriveGlobal.$j(".tve-captcha-container");if(h.length){var i=!1;window.tve_gapi_loaded||(ThriveGlobal.$j.getScript("https://www.google.com/recaptcha/api.js?render=explicit",c),i=!0,window.tve_gapi_loaded=!0),i||c()}var j=ThriveGlobal.$j(".tve-fb-comments");j.length&&(ThriveGlobal.$j("#fb-root").length&&ThriveGlobal.$j("head").append('<div id="fb-root"></div>'),j.each(function(){""==ThriveGlobal.$j(this).attr("data-href")&&ThriveGlobal.$j(this).attr("data-href",window.location),ThriveGlobal.$j(this).addClass("fb-comments"),FB.XFBML.parse(this.parentNode)}));var k=ThriveGlobal.$j(".thrv_disqus_comments #disqus_thread");k.length&&(window.disqus_shortname=k.attr("data-disqus_shortname"),""==k.attr("data-disqus_url")?window.disqus_url=window.location:window.disqus_url=k.attr("data-disqus_url"),window.disqus_identifier=window.disqus_url,"undefined"==typeof DISQUS&&ThriveGlobal.$j.getScript("//"+disqus_shortname+".disqus.com/embed.js"))}},onSocialCustomClick:{wnd:function(a,b,c){var d=void 0!==window.screenLeft?window.screenLeft:screen.left,e=void 0!==window.screenTop?window.screenTop:screen.top,f=window.innerWidth?window.innerWidth:document.documentElement.clientWidth?document.documentElement.clientWidth:screen.width,g=window.innerHeight?window.innerHeight:document.documentElement.clientHeight?document.documentElement.clientHeight:screen.height,h=f/2-b/2+d,i=g/2-c/2+e,j=window.open(a,"Thrive Share","scrollbars=yes,resizable=yes,toolbar=no,menubar=no,scrollbars=no,location=no,directories=no,width="+b+", height="+c+", top="+i+", left="+h);return window.focus&&j.focus(),j},fb_share:function(a){var b=a.data();return b.href||(b.href=location.href),b.type&&"feed"!=b.type?this.wnd("https://www.facebook.com/sharer/sharer.php?u="+encodeURIComponent(b.href),650,500):FB.ui({method:"feed",link:b.href,caption:b.caption,name:b.name,description:b.description,picture:b.image},function(a){}),!1},g_share:function(a){var b=a.data();b.href||(b.href=location.href),this.wnd("https://plus.google.com/share?url="+encodeURIComponent(b.href),600,600)},t_share:function(a){var b=a.data();b.href||(b.href=location.href),this.wnd("https://twitter.com/intent/tweet?url="+encodeURIComponent(b.href)+(b.tweet?"&text="+encodeURIComponent(b.tweet):"")+(b.via?"&via="+b.via:""),550,450)},in_share:function(a){var b=a.data();b.href||(b.href=location.href),this.wnd("https://www.linkedin.com/shareArticle?mini=true&url="+encodeURIComponent(b.href),550,400)},pin_share:function(a){var b=a.data();b.href||(b.href=location.href),this.wnd("https://pinterest.com/pin/create/button/?url="+encodeURIComponent(b.href)+(b.media?"&media="+encodeURIComponent(b.media):"")+(b.description?"&description="+encodeURIComponent(b.description):""),600,600)},xing_share:function(a){var b=a.data();b.href||(b.href=location.href),this.wnd("https://www.xing.com/spi/shares/new?url="+encodeURIComponent(b.href),600,500)}},getShareCounts:function(a,b,c){a=a||ThriveGlobal.$j("body");var d=a.find(".tve_social_items.tve_social_custom");if(d.length){var e={action:"tve_social_count",for:[]};if(void 0!==b?ThriveGlobal.$j.each(b,function(a,b){e[a]=b}):"undefined"!=typeof tve_path_params&&tve_path_params.post_id&&(e.post_id=tve_path_params.post_id),d.each(function(a){var b=ThriveGlobal.$j(this),c={};if(b.data("tve-social-counts")||!b.hasClass("tve_social_cb")&&"1"!==b.parent().attr("data-counts"))return void b.data("tve-social-counts",1);b.data("tve-social-counts",1);var d=b.prev(".tve_s_share_count"),f=b.children(".tve_s_item").each(function(){var a=ThriveGlobal.$j(this).addClass("tve_count_loading");c[a.attr("data-s")]=a.attr("data-href")});if(c.hasOwnProperty("t_share")&&1===f.length)return f.removeClass("tve_count_loading"),d.remove(),void b.parent().removeAttr("data-counts");e.for[a]=c}),!e.for.length)return null;var f=function(a){a&&a.counts&&a.totals&&d.each(function(b){var c=ThriveGlobal.$j(this),d=c.prev(".tve_s_share_count"),e=c.children(".tve_s_item");if(ThriveGlobal.$j.each(a.counts[b],function(a,b){e.filter(".tve_s_"+a).find(".tve_s_count").html(b.formatted)}),e.removeClass("tve_count_loading"),a.totals&&a.totals[b]&&"1"===c.parent().attr("data-counts")){var f=parseInt(c.parent().attr("data-min_shares"));f=isNaN(f)?0:f,d.find(".tve_s_cnt").html(a.totals[b].formatted),d[f<=a.totals[b].value?"show":"hide"]()}})};if(void 0!==c&&c)return[e,f];ThriveGlobal.$j.ajax({type:"post",xhrFields:{withCredentials:!0},url:tve_frontend_options.ajaxurl,data:e,dataType:"json"}).done(f)}}};TVE_jQFn.tve_front_tw_qs=function(){return this.each(function(){var a=ThriveGlobal.$j(this);if(a.data("tve_front_tw_qs_done"))return this;a.data("tve_front_tw_qs_done",!0),a.click(function(){window.open(b(),"_blank")});var b=function(){var b=a.attr("data-use_custom_url")&&a.attr("data-custom_url"),c=b?a.attr("data-custom_url"):window.location.href,d=a.data("url")+"?text="+encodeURIComponent(a.find("p").text())+"&url="+encodeURIComponent(c);return a.data("via").length>0&&(d+="&via="+a.data("via")),d}})},TVE_jQFn.tve_front_lead_generation=function(){return this.each(function(){var a=ThriveGlobal.$j(this),b=a.find("form"),c=b.find(".tve-f-a-hidden").val();if(0==b.length&&(a.find(".thrv_lead_generation_container").wrapInner('<form method="post"></form>'),b=a.find("form")),void 0!==c&&"#"==b.attr("action")&&b.attr("action",c),a.data("tve_lg_done"))return this;if(a.data("tve_lg_done",!0),void 0!==window.SegMet&&SegMet&&-1!==b[0].action.indexOf("infusionsoft")&&!b.data("tve-segmet-submit")){b.data("tve-segmet-submit",1);var d=b[0].submit;b[0].submit=function(){return b.data("tve-segmet-submitted")?d.call(b[0]):(b.data("tve-segmet-submitted",1),b.submit())}}var e={errClass:"tve-lg-error",init:function(){this.container=ThriveGlobal.$j("#tve-lg-error-container"),this.container.length||(this.container=ThriveGlobal.$j('<div id="tve-lg-error-container"></div>').appendTo("body"),this.container.on("click",".tve-lg-err-close",ThriveGlobal.$j.proxy(this.close,this))),this.container.empty().hide(),this.clear()},close:function(){this.container.fadeOut(200);var a=b.find("."+this.errClass);return a.length||(a=b.find("input,select,textarea")),a.first().focus(),!1},clear:function(){b.find("input,select,textarea").removeClass(this.errClass)},markApiError:function(a){return this.container.append('<div class="tve-lg-err-item tve-lg-ext-err">'+a+"</div>"),this},_markError:function(a,b,c){a&&a.addClass(this.errClass),"required"===c&&this.container.find(".tve-lg-required").length||this.container.append('<div class="tve-lg-err-item tve-lg-'+c+'">'+b+"</div>")},show:function(){this.container.append('<a href="javascript:void(0)" class="tve-lg-err-close" title="Close"><span class="thrv-icon thrv-icon-cross"></span></a>');var a=this;setTimeout(function(){var c=b.offset(),d=parseInt(b.css("margin-top")),e=parseInt(b.css("margin-left")),f=c.top-10-a.container.outerHeight(!0)-(isNaN(d)?0:d);b.parents(".thrv-ribbon").length&&("bottom"==b.parents(".tve-leads-ribbon").attr("data-position")?f+=7:f=c.top+b.outerHeight()),a.container.css({top:f+"px",left:c.left-(isNaN(e)?0:e),width:b.outerWidth()}).fadeIn(200)},50)},phone:function(a,b){return!a.val().replace(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,"").length||(this._markError(a,b,"phone"),!1)},required:function(a,b){return!!("radio"===a.attr("type")?ThriveGlobal.$j('input[name="'+a.attr("name")+'"]').is(":checked"):"checkbox"===a.attr("type")?a.is(":checked"):ThriveGlobal.$j.trim(a.val()).length>0)||(this._markError(a,b,"required"),!1)},password:function(a,b){var c=!0;return a.val()||1!==a.data("required")||(c=!1),!!c||(this._markError(a,b,"password"),!1)},mismatch:function(a,b){var c=!0;return a.password!=a.confirm_password&&(c=!1),!!c||(this._markError("",b,"passwordmismatch"),!1)},email:function(a,b){return!!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(a.val())||(this._markError(a,b,"email"),!1)},getErrors:function(a){try{return JSON.parse(a.find(".tve-lg-err-msg").val())}catch(a){return{required:"Please fill in all of the required fields",phone:"The phone number is not valid",email:"The email address is not valid"}}}},f=function(a,c){var d=b.find("#_form_type").val(),e=b.find("input[name=name]").val()?b.find("input[name=name]").val():"",f=b.find("input[name=email]").val();if(a){b.parents(".tl-style").first().find(".tve_p_lb_close").trigger("click");var g=ThriveGlobal.$j.Event("leads_messages.tcb");b.trigger(g),"lead_generation"==d&&(b.find("input").val(""),b.parents(".tve_p_lb_content").find(".tve_p_lb_close").click()),c.success=c.success.replace("[lead_email]",f),c.success=c.success.replace("[lead_name]",e),jQuery("body").slideDown("fast",function(){jQuery("body").prepend('<div class="tvd-toast tve-fe-message"><div class="tve-toast-message"><div class="tve-toast-icon-container"><span class="tve_tick thrv-icon-checkmark"></span></div><div class="tve-toast-message-container">'+c.success+"</div></div></div>")}),setTimeout(function(){jQuery(".tvd-toast").hide()},6e3)}else{var h=b.parent(),i=h.parent(),j=i.find(".tve-error-wrapper");1==b.find("#_error_message_option").val()?(h.hide(),0==j.length?(i.append('<div class="tve-error-wrapper"><div class="tve-error-content"></div><button class="tve-close-error-message">Retry</button></div>'),c.error=c.error.replace("[lead_email]",f),c.error=c.error.replace("[lead_name]",e),i.find(".tve-error-content").append(c.error)):i.find(".tve-error-wrapper").show()):location.reload()}b.tve_form_loading(!0)};!function(){a.data("form-target")&&a.data("form-target").length&&a.find("form").attr("target",a.data("form-target"))}(),a.find(".tve-lg-err-msg").length&&function(){var c=e.getErrors(a);b.submit(function(a){if(b.data("tve-force-submit"))return!0;var d=!0,g=ThriveGlobal.$j(this),h={};if(e.init(),g.find("input, select, textarea").each(function(){var a=ThriveGlobal.$j(this),b=a.data("validation"),f=a.data("required"),g=a.data("iphone-placeholder");""!==g&&a.val()===g&&a.val(""),"password"==a.attr("type")&&(h[a.attr("name")]=a.val()),1===f&&(e.required(a,c.required)||(d=!1)),void 0!==b&&"none"!==b&&e[b]&&(e[b](a,c[b])||(d=!1))}),g.find("#g-recaptcha-response").length>0&&""==g.find("#g-recaptcha-response").val()&&(e.markApiError("Please validate captcha form"),d=!1),2==Object.keys(h).length&&(e.mismatch(h,c.passwordmismatch)||(d=!1)),!d)return e.show(),b.find("."+e.errClass).first().focus(),!1;if(b.tve_form_loading(),"api"==b.parents(".thrv_lead_generation").attr("data-connection")){var i=b.serialize()+"&action=tve_api_form_submit&url="+encodeURIComponent(location.href),j=b.find("#_submit_option").val(),k=ThriveGlobal.$j.Event("form_conversion.tcb");b.trigger(k);var l=b.find("#_create_account").val();if(l)var m=b.find("input").not("input[type=hidden]").not("input[type=password]").serializeArray();return k.post_data&&(i+="&"+ThriveGlobal.$j.param(k.post_data)),ThriveGlobal.$j.ajax({type:"post",xhrFields:{withCredentials:!0},url:tve_frontend_options.ajaxurl,data:i}).fail(function(){e.markApiError("An error occurred while submitting your data. Please try again").show(),b.tve_form_loading(!0)}).done(function(a){try{a=ThriveGlobal.$j.parseJSON(a);var c=a.form_messages,d="";if(a.redirect&&(d=a.redirect,delete a.redirect),delete a.form_messages,a.variation){a.variation;delete a.variation}if(a.back_url){var e=a.back_url;delete a.back_url}var g=Object.keys(a).length>0&&!a.error;if(a.error)return void f(g,c)}catch(a){console.log(a)}var h=ThriveGlobal.$j.Event("lead_conversion_success.tcb");if(b.trigger(h),!h.content_unlocked){var i=b.find("#_error_message_option").val();if(!j||"reload"==j&&(g||1!=i))return void location.reload();if("redirect"==j){var k=b.find("#_back_url").val();if(k&&TCB_Front.isValidUrl(k)&&(g||1!=i))return void(location.href=k)}else{if("state"==j&&g){var n=b.find(".tve-switch-state-trigger");if(n.trigger("click"),"lightbox"!=b.find("input[name=_form_type]").val()&&n.attr("data-tcb-events").indexOf("tl_state_lightbox")>0){var o=ThriveGlobal.$j.Event("leads_messages.tcb");o.lightbox_state=!0,b.trigger(o),b.tve_form_loading(!0)}return void(TL_Front.parent_state&&(b.parents(".tl-style").first().find(".tve_p_lb_close").trigger("click"),delete TL_Front.parent_state))}if("klicktipp-redirect"==j&&g){if(d&&TCB_Front.isValidUrl(d))return void(location.href=d)}else if("page"==j&&g&&e&&TCB_Front.isValidUrl(e))return l&&m&&TCB_Front.setCookie("account_create_fields",JSON.stringify(m),{path:"/"}),void(location.href=e)}return f(g,c),!0}}),a.stopPropagation(),a.preventDefault(),!1}var n=ThriveGlobal.$j.Event("should_submit_form.tcb");if(b.trigger(n),"1"!==b.find("input#_asset_option").val()&&!n.flag_need_data)return!0;var i=b.serialize()+"&action=tve_custom_form_submit&email="+function(a){if(a.find('[data-validation="email"]').length)return a.find('[data-validation="email"]').val();var b="";return a.find("input").each(function(){if(this.name&&this.name.match(/email/i))return b=this.value,!1}),b}(b)+"&name="+function(a){var b=!1;return a.find("input").each(function(){var a=ThriveGlobal.$j(this),c=a.attr("placeholder"),d=a.attr("name");if(c&&-1!==c.toLowerCase().indexOf("name")||d&&-1!==d.toLowerCase().indexOf("name"))return b=a,!1}),!1!==b?b.val():""}(b),k=ThriveGlobal.$j.Event("form_conversion.tcb");return b.trigger(k),k.post_data&&(i+="&"+ThriveGlobal.$j.param(k.post_data)),ThriveGlobal.$j.ajax({type:"post",xhrFields:{withCredentials:!0},url:tve_frontend_options.ajaxurl,data:i}).always(function(a){b.find("input,select,textarea").removeAttr("disabled"),b.data("tve-force-submit",!0).submit()}),a.stopPropagation(),!1})}()})},TVE_jQFn.tve_form_loading=function(a){var b=this,c=b.find("button[type=submit]").parent(),d=b.find(".tcb-form-loader");return void 0!==a&&a?(d.fadeOut(),b.find("input,select,textarea").removeAttr("disabled"),c.find("button").fadeIn(),this):(d.length||(d=ThriveGlobal.$j('<div class="tcb-form-loader"><span class="tcb-form-loader-icon thrv-icon-spinner9"></span></div>').appendTo(c),c.css({position:"relative",width:c.width()+"px",height:c.height()+"px"})),c.find("button").hide(),d.show(),this)},TVE_jQFn.thrive_tcb_timer=function(){return this.each(function(){function a(){setTimeout(function(){c.find(".tve_t_day .t-digits").css("min-width",c.find(".tve_t_sec .t-digits > span").outerWidth()*j+"px")},10)}var b,c=ThriveGlobal.$j(this),d=new Date,e=new Date(c.attr("data-date")+"T"+c.attr("data-hour")+":"+c.attr("data-min")+":"+(c.attr("data-sec")||"00")+c.attr("data-timezone")),f=0,g=0,h=0,i=0,j=2,k=c.attr("data-text"),l=c.hasClass("tve_countdown_timer_evergreen"),m=c.attr("data-norestart"),n=parseInt(c.attr("data-day")),o=parseInt(c.attr("data-hour")),p=parseInt(c.attr("data-min")),q=parseInt(c.attr("data-sec"));if(c.data("tcb_timer_done"))return this;if(c.data("tcb_timer_done",!0),l){
e=new Date;var r=TCB_Front.getCookie(c.attr("data-id"));if(r){r=r.split("-");var s=new Date(r[0],r[1]-1,r[2],r[3],r[4],r[5]);e.setTime(s)}else{e.setTime(d.getTime()+24*n*3600*1e3+3600*o*1e3+60*p*1e3+1e3*q);var t=e.getFullYear()+"-"+(e.getMonth()+1)+"-"+e.getDate()+"-"+e.getHours()+"-"+e.getMinutes()+"-"+e.getSeconds();TCB_Front.setCookie(c.attr("data-id"),t,{expires:m?new Date("2034-01-01"):e})}}c.parents(".thrv_content_reveal").on("tve-content-revealed",a),c.parents(".tve_p_lb_content").on("tve.before-lightbox-open",a);var u=function(a,b){if(a.html()==b)return a;a.removeClass("next");var c=a.clone().removeClass("go-down").addClass("next").html(b);return a.before(c).next(".go-down").remove(),a.addClass("go-down"),setTimeout(function(){c.addClass("go-down")},20),a},v=function(a,b,c){void 0===c&&(c=!1);var d=0;if(b<=99)u(a.find(".part-1").first(),b%10),u(a.find(".part-2").first(),Math.floor(b/10)),d=2;else for(;b;)d++,u(a.find(".part-"+d).first(),b%10),b=Math.floor(b/10);if(!1!==c&&d<c)for(var e=d+1;e<=c;e++)u(a.find(".part-"+e).first(),0)},w=function(){i--,i<0&&(i=59,h--),h<0&&(h=59,g--),g<0&&(g=23,f--),v(c.find(".tve_t_sec .t-digits"),i),v(c.find(".tve_t_min .t-digits"),h),v(c.find(".tve_t_hour .t-digits"),g),v(c.find(".tve_t_day .t-digits"),f,j),f<=0&&g<=0&&h<=0&&i<=0&&(f=g=h=i=0,clearInterval(b),x())},x=function(){c.addClass("tve_cd_expired"),c.find(".t-digits span").html("0"),k&&(c.find(".tve_t_part").addClass("ct_finished"),c.find(".tve_t_text").html(k).fadeIn(200));var a=ThriveGlobal.$j.Event("tve.countdown-finished");c.trigger(a)};!l&&d>=e?x():(i=Math.floor((e.getTime()-d.getTime())/1e3),h=Math.floor(i/60),i%=60,g=Math.floor(h/60),h%=60,f=Math.floor(g/24),g%=24,f>99&&(j=f.toString().length),function(){var a=function(a,b){return ThriveGlobal.$j('<span class="part-p ct-d-placeholder">&nbsp;</span><span class="part-'+a+'">'+b+"</span>")};c.find(".tve_t_sec .t-digits").empty().append(a(2,Math.floor(i/10))).append(a(1,i%10)),c.find(".tve_t_min .t-digits").empty().append(a(2,Math.floor(h/10))).append(a(1,h%10)),c.find(".tve_t_hour .t-digits").empty().append(a(2,Math.floor(g/10))).append(a(1,g%10));for(var b=c.find(".tve_t_day .t-digits").empty(),d=f,e=1;e<=j;e++)b.append(a(e,d%10)),d=Math.floor(d/10);b.css("min-width","")}(),c.addClass("init_done"),b=setInterval(w,1e3)),l&&d>=e&&(clearInterval(b),x())})},TVE_jQFn.thrive_iphone_placeholder=function(){if(!0===(/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream))return this.each(function(){var a=ThriveGlobal.$j(this),b=a.attr("placeholder");return"password"===a.attr("type")?this:a.data("iphone-placeholder")?this:(a.attr("placeholder","").val(b),void a.on("focus",function(){a.val()===b&&a.val("")}).on("blur",function(){""===a.val()&&a.val(b)}).data("iphone-placeholder",b))})},"undefined"!=typeof ThriveGlobal&&ThriveGlobal.$j(document).ready(function(){function a(){ThriveGlobal.$j(".tve-m-trigger:visible").length?ThriveGlobal.$j(".tve-m-trigger").each(function(){var a=ThriveGlobal.$j(this).parent().find("> ul");if(!a.data("tve-colors-added")&&a.find("ul a").attr("data-tve-custom-colour")){var b=a.find("ul a").attr("data-tve-custom-colour");a.find("> li > a").each(function(){var a=ThriveGlobal.$j(this);a.attr("data-tve-custom-colour")&&(a.attr("data-o-color",a.attr("data-tve-custom-colour")),a.attr("data-tve-custom-colour",b))})}a.data("tve-colors-added",!0)}):(ThriveGlobal.$j(".tve-m-expanded").removeClass("tve-m-expanded"),ThriveGlobal.$j(".tve-m-trigger").each(function(){var a=ThriveGlobal.$j(this).parent().find("> ul");if(!a.data("tve-colors-added")&&a.find("> li > a").attr("data-o-color")){var b=a.find("> li > a"),c=b.attr("data-o-color");b.attr("data-tve-custom-colour",c).removeAttr("data-o-color")}a.data("tve-colors-added",!1)}))}var b=ThriveGlobal.$j(tve_frontend_options.is_editor_page?"#tve_editor":"body"),c=[];b.on("click",".tve_scT > ul li",function(a){var b=ThriveGlobal.$j(this),c=b.parents(".tve_scT").first(),d=c.find("> .tve_scTC").eq(b.index()),e=c.find("> ul .tve_tS"),f=e.attr("data-tve-custom-colour"),g=b.attr("data-tve-custom-colour");return b.attr("data-tve-custom-colour",void 0!==f&&!1!==f?f:void 0!==g&&!1!==g?g:""),e.attr("data-tve-custom-colour",void 0!==g&&!1!==g?g:""),tve_frontend_options.is_editor_page||c.attr("data-selected",b.index()),c.find("> ul .tve_tS").removeClass("tve_tS"),c.find("> .tve_scTC").hide(),b.addClass("tve_tS"),d.show(),TCB_Front.postGridLayout(),d.find("iframe").not(".thrv_social_default iframe").each(function(){var a=ThriveGlobal.$j(this);a.attr("data-src")&&(a.attr("src",a.attr("data-src")),a.attr("data-src",""),a.removeClass("tcb-dr-done"))}),c.find("> .tve_scTC").each(function(a){if(a!==b.index()){ThriveGlobal.$j(this).find("iframe").not(".thrv_social_default iframe").not(".tcb-dr-done").each(function(){var a=ThriveGlobal.$j(this);a.attr("src")&&(a.attr("data-src",a.attr("src")),a.attr("src",""),a.addClass("tcb-dr-done"))})}}),a.preventDefault(),!1}),b.off("click.tvetoggleelem").on("click.tvetoggleelem",".tve_faqB",function(){var a=ThriveGlobal.$j(this).parents(".tve_faq"),b=ThriveGlobal.$j(this),c=ThriveGlobal.$j(b).siblings(".tve_faqC");c.is(":visible")?(c.find("iframe").not(".thrv_social_default iframe").each(function(){var a=ThriveGlobal.$j(this);a.attr("src")&&a.attr("data-src",a.attr("src")),a.attr("src","")}),c.slideUp("fast",function(){c.trigger("lbresize")}),a.removeClass("tve_oFaq")):(c.find("iframe").not(".thrv_social_default iframe").each(function(){var a=ThriveGlobal.$j(this);a.attr("data-src")&&a.attr("src",a.attr("data-src"))}),c.slideDown("fast",function(){c.trigger("lbresize")}),TCB_Front.postGridLayout(),a.addClass("tve_oFaq"))}).on("click",".thrv_social_custom .tve_s_link",function(){var a=ThriveGlobal.$j(this).parents(".tve_s_item"),b=a.attr("data-s");TCB_Front.onSocialCustomClick[b]&&TCB_Front.onSocialCustomClick[b](a)}),tve_frontend_options.is_editor_page||(b.on("mouseenter",".tve_w_menu.tve_horizontal li",function(){var a=ThriveGlobal.$j(this);a.parents(".tve-m-expanded").length||a.hasClass("menu-item-has-children")&&a.find("> ul").stop().fadeIn("fast")}).on("mouseleave",".tve_w_menu.tve_horizontal li",function(){var a=ThriveGlobal.$j(this);a.parents(".tve-m-expanded").length||a.hasClass("menu-item-has-children")&&a.find("> ul").stop().fadeOut("fast")}),b.on("click",".tve-m-trigger",function(){return ThriveGlobal.$j(this).parent().find("ul").first().toggleClass("tve-m-expanded"),!1}),b.on("click",".thrv_contents_table a",function(a){var b=ThriveGlobal.$j,c=b(this),d=b(c.attr("href"));d.length&&b("html, body").animate({scrollTop:d.offset().top-130})}),"undefined"!=typeof TVE_Event_Manager_Registered_Callbacks&&(TCB_Front.event_triggers(b),tve_frontend_options.page_events&&ThriveGlobal.$j.each(tve_frontend_options.page_events,function(a,b){TVE_Event_Manager_Registered_Callbacks[b.a]&&ThriveGlobal.$j(document).on("tve-page-event-"+b.t,function(){return TVE_Event_Manager_Registered_Callbacks[b.a].call(document,b.t,b.a,b.config?b.config:{})})})),c.push(TCB_Front.postGridLayout),c.push(a),a()),TCB_Front.onDOMReady(),"undefined"==typeof ThriveApp&&(TCB_Front.pageSectionHeight(),c.push(TCB_Front.pageSectionHeight)),ThriveGlobal.$j(window).resize(function(){ThriveGlobal.$j.each(c,function(a,b){b.call(null)})}),TCB_Front.tableSort(ThriveGlobal.$j(".tve_make_sortable tr:last-child th"))});