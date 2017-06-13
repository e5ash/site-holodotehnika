$( document ).ready(function() {
	function inctement() {
		$(".increment__input").keydown(function(event) {
	        if ( event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 || 
	            (event.keyCode == 65 && event.ctrlKey === true) || 
	            (event.keyCode >= 35 && event.keyCode <= 39)) {
	                 return;
	        }
	        else {
	            if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
	                event.preventDefault(); 
	            }   
	        }
	    });
		$('.increment__button').click(function() {
			var input = $(this).prevAll('.increment__input'),
				inputVal = Number(input.val());
			input.val(inputVal + 1);
			if ($(this).hasClass('increment__plus')) {
				input.val(inputVal + 1);
			}
			else{
				input.val(inputVal - 1);
			}
		});
	}

	inctement();

	$('.sort__sort-type-2').click(function() {
		$(this).toggleClass('sort__sort-type-2_select');
	});


	var priceDops = $('.product__price .row + .row'),
		priceDopsCount = $('.price__dops-count span');

	$('.dops__checkbox').bind('change', function() {
		var parent = $(this).parents('.dops__item'),
			buttonSpan = parent.find('.button span'),
			buttonTextTrue = 'Опция добавлена',
			buttonTextFalse = 'Добавить опцию',
			price = parent.find('.dops__price-count span').html().replace(/\s/g, ''),
			priceDopsCountHtml = priceDopsCount.html(),
			priceSum = +priceDopsCountHtml + +price;
			// priceSumString = String(priceSum),
			// priceSumReplace = priceSumString.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
		priceDopsCount.html(priceSum);

		if (this.checked) {
			parent.addClass('dops__item_select');
			buttonSpan.html(buttonTextTrue);
			priceDops.addClass('row-two_select');
			priceSum = +priceDopsCountHtml + +price;
		} else { 
			parent.removeClass('dops__item_select');
			buttonSpan.html(buttonTextFalse);
			priceSum = +priceDopsCountHtml - +price;
		}

		priceDopsCount.html(priceSum);
	});

	function fadeInPopup() {
		$('.popup__window_step-2').fadeIn(300);
	}

	var inputCount = 0;

	$('.button-step').click(function() {
		inputCount = 0;
		$('.popup__window_step-1 .input').each(function() {
			if ($(this).val() == "") {
				$(this).css('border', '1px solid red');
				inputCount--;
			}
			else{
				$(this).css('border', '1px solid #1D5985');
				inputCount++;
			}
		});
		if(inputCount == 2){
			$('.popup__window_step-1').fadeOut(300);
			setTimeout(fadeInPopup, 300);
		}
		
	});

	$('.interview-stat__count span').each(function() {
		var parent = $(this).parents('.interview-stat__item'),
			status = parent.find('.interview-stat__status div'),
			count = $(this).html();

		status.css('width', count);
	});

	function fadeInSuccessfully() {
		$('.popup .successfully').fadeIn(300);
	}

	$('.popup_feedback .popup__button').click(function() {
		inputCount = 0;
		$('.popup_feedback .input_requered').each(function() {
			if ($(this).val() == "") {
				$(this).css('border', '1px solid red');
				inputCount--;
			}
			else{
				$(this).css('border', '1px solid #1D5985');
				inputCount++;
			}
		});
		if(inputCount == 2){
			$('.popup .form').fadeOut(300);
			setTimeout(fadeInSuccessfully, 300);
		}
	});


	// Product
	var popupProductTitle = $('.popup.popup_feedback .form .popup__product span')
		popupFeeback = $('.popup_feedback'),
	$('.price__button, .plashka__button').click(function() {
		var parent = $(this).parents('.main'),
			title = parent.find('.title'),
			titleStr = title.html();
		popupProductTitle.html(titleStr);
		$('.popup_feedback').addClass('popup_product');

	});

	$('.dupl__price-btn').click(function() {
		var parent = $(this).parents('.dupl__item'),
			title = parent.find('.dupl__title a'),
			titleStr = title.html();
		popupProductTitle.html(titleStr);
		$('.popup_feedback').addClass('popup_product');

	});


	$('.interview__button').click(function() {
		$('.interview__message.message_true').css('transform', 'translateX(0px)');
	});
	$('.sub-block__button').click(function() {
		$('.sub-block__message.message_true').css('transform', 'translateX(0px)');
	});

	$('.links-tab__button, .links-tab__a').click(function() {
		$('html, body').animate({ scrollTop: $('.product__tabs').offset().top }, 500);
	});


	new WOW().init();


	$(".banner__item").hover(function() {
	    $(this).addClass('bounceIn');
	});

	$('.slider__list').slick({
		slidesToShow: 4,
		prevArrow: '<button type="button" class="slick-prev slick-arrow"><i class="icon icon-arrow-left-bold"></i></button>',
		nextArrow: '<button type="button" class="slick-next slick-arrow"><i class="icon icon-arrow-right-bold"></i></button>',
		responsive: [{
			breakpoint: 1080,
			settings: {
		        slidesToShow: 3,
		    }},{
		    breakpoint: 870,
			settings: {
		        slidesToShow: 2,
		    }},{
		    breakpoint: 620,
			settings: {
		        slidesToShow: 1,
		    }
		}]
	});


	var top_show = 150;
	var delay = 1000;
	$(document).ready(function() {
	    $(window).scroll(function () {
	      if ($(this).scrollTop() > top_show) $('#go-top').fadeIn();
	      else $('#go-top').fadeOut();
	    });
	    $('#go-top').click(function () {
	      $('body, html').animate({
	        scrollTop: 0
	      }, delay);
	    });
	});

	// $('.banner__item').mouseenter(function() {
	// 	$(this).removeClass('fadeInDown');
	// 	$(this).removeAttr('style');
	// 	// $(this).addClass('infinite');

	// });

	$(function(){
		$('.category__banner-button').on('click', function(e){
		  $('html,body').stop().animate({ scrollTop: $('#text').offset().top - 10}, 1000);
		  e.preventDefault();
		});
	});

	$('.callback-block__close').click(function() {
		
	});

	var callbackBlock = {
		block: $('.callback-block'),
		close: $('.callback-block__close'),
		btn: $('.header .number__desc .callback, .footer__callback'),
		speed: 200,
		funShow: function(father){
			var parent = $(this).parent(father),
				block = father.find('.callback-block');
			block.fadeIn(this.speed);
		},
		funHide: function(){
			this.block.fadeOut(this.speed);
		}
	}

	var footer = $('.footer'),
		header = $('.header'),
		plashka = $('.plashka'),
		infoblock = $('.info-block');


	$('.header .number__desc .callback').click(function() {
		callbackBlock.funShow(header);
	});
	$('.footer__callback').click(function() {
		callbackBlock.funShow(footer);
	});
	$('.plashka .callback').click(function() {
		callbackBlock.funShow(plashka);
	});
	$('.info-block .callback').click(function() {
		callbackBlock.funShow(infoblock);
	});
	callbackBlock.close.click(function() {
		callbackBlock.funHide();
	});


	// Mask for input phone 
	!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):jQuery)}(function(a){var b,c=navigator.userAgent,d=/iphone/i.test(c),e=/chrome/i.test(c),f=/android/i.test(c);a.mask={definitions:{9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},autoclear:!0,dataName:"rawMaskFn",placeholder:"_"},a.fn.extend({caret:function(a,b){var c;if(0!==this.length&&!this.is(":hidden"))return"number"==typeof a?(b="number"==typeof b?b:a,this.each(function(){this.setSelectionRange?this.setSelectionRange(a,b):this.createTextRange&&(c=this.createTextRange(),c.collapse(!0),c.moveEnd("character",b),c.moveStart("character",a),c.select())})):(this[0].setSelectionRange?(a=this[0].selectionStart,b=this[0].selectionEnd):document.selection&&document.selection.createRange&&(c=document.selection.createRange(),a=0-c.duplicate().moveStart("character",-1e5),b=a+c.text.length),{begin:a,end:b})},unmask:function(){return this.trigger("unmask")},mask:function(c,g){var h,i,j,k,l,m,n,o;if(!c&&this.length>0){h=a(this[0]);var p=h.data(a.mask.dataName);return p?p():void 0}return g=a.extend({autoclear:a.mask.autoclear,placeholder:a.mask.placeholder,completed:null},g),i=a.mask.definitions,j=[],k=n=c.length,l=null,a.each(c.split(""),function(a,b){"?"==b?(n--,k=a):i[b]?(j.push(new RegExp(i[b])),null===l&&(l=j.length-1),k>a&&(m=j.length-1)):j.push(null)}),this.trigger("unmask").each(function(){function h(){if(g.completed){for(var a=l;m>=a;a++)if(j[a]&&C[a]===p(a))return;g.completed.call(B)}}function p(a){return g.placeholder.charAt(a<g.placeholder.length?a:0)}function q(a){for(;++a<n&&!j[a];);return a}function r(a){for(;--a>=0&&!j[a];);return a}function s(a,b){var c,d;if(!(0>a)){for(c=a,d=q(b);n>c;c++)if(j[c]){if(!(n>d&&j[c].test(C[d])))break;C[c]=C[d],C[d]=p(d),d=q(d)}z(),B.caret(Math.max(l,a))}}function t(a){var b,c,d,e;for(b=a,c=p(a);n>b;b++)if(j[b]){if(d=q(b),e=C[b],C[b]=c,!(n>d&&j[d].test(e)))break;c=e}}function u(){var a=B.val(),b=B.caret();if(o&&o.length&&o.length>a.length){for(A(!0);b.begin>0&&!j[b.begin-1];)b.begin--;if(0===b.begin)for(;b.begin<l&&!j[b.begin];)b.begin++;B.caret(b.begin,b.begin)}else{for(A(!0);b.begin<n&&!j[b.begin];)b.begin++;B.caret(b.begin,b.begin)}h()}function v(){A(),B.val()!=E&&B.change()}function w(a){if(!B.prop("readonly")){var b,c,e,f=a.which||a.keyCode;o=B.val(),8===f||46===f||d&&127===f?(b=B.caret(),c=b.begin,e=b.end,e-c===0&&(c=46!==f?r(c):e=q(c-1),e=46===f?q(e):e),y(c,e),s(c,e-1),a.preventDefault()):13===f?v.call(this,a):27===f&&(B.val(E),B.caret(0,A()),a.preventDefault())}}function x(b){if(!B.prop("readonly")){var c,d,e,g=b.which||b.keyCode,i=B.caret();if(!(b.ctrlKey||b.altKey||b.metaKey||32>g)&&g&&13!==g){if(i.end-i.begin!==0&&(y(i.begin,i.end),s(i.begin,i.end-1)),c=q(i.begin-1),n>c&&(d=String.fromCharCode(g),j[c].test(d))){if(t(c),C[c]=d,z(),e=q(c),f){var k=function(){a.proxy(a.fn.caret,B,e)()};setTimeout(k,0)}else B.caret(e);i.begin<=m&&h()}b.preventDefault()}}}function y(a,b){var c;for(c=a;b>c&&n>c;c++)j[c]&&(C[c]=p(c))}function z(){B.val(C.join(""))}function A(a){var b,c,d,e=B.val(),f=-1;for(b=0,d=0;n>b;b++)if(j[b]){for(C[b]=p(b);d++<e.length;)if(c=e.charAt(d-1),j[b].test(c)){C[b]=c,f=b;break}if(d>e.length){y(b+1,n);break}}else C[b]===e.charAt(d)&&d++,k>b&&(f=b);return a?z():k>f+1?g.autoclear||C.join("")===D?(B.val()&&B.val(""),y(0,n)):z():(z(),B.val(B.val().substring(0,f+1))),k?b:l}var B=a(this),C=a.map(c.split(""),function(a,b){return"?"!=a?i[a]?p(b):a:void 0}),D=C.join(""),E=B.val();B.data(a.mask.dataName,function(){return a.map(C,function(a,b){return j[b]&&a!=p(b)?a:null}).join("")}),B.one("unmask",function(){B.off(".mask").removeData(a.mask.dataName)}).on("focus.mask",function(){if(!B.prop("readonly")){clearTimeout(b);var a;E=B.val(),a=A(),b=setTimeout(function(){B.get(0)===document.activeElement&&(z(),a==c.replace("?","").length?B.caret(0,a):B.caret(a))},10)}}).on("blur.mask",v).on("keydown.mask",w).on("keypress.mask",x).on("input.mask paste.mask",function(){B.prop("readonly")||setTimeout(function(){var a=A(!0);B.caret(a),h()},0)}),e&&f&&B.off("input.mask").on("input.mask",u),A()})}})});

	$(".callback-block__input + input").mask("+7 ( 999 )  999-99-99");
	$(".feedback__phone").mask("+7 (999) 999-99-99");
	$(".input-phone").mask("+7 (999) 999-99-99");



	function responsive() {
		var w = $(window);

		var mobile = {
			btn: $('.nav-btn'),
			nav: $('.nav .container > ul')
		}

		w.on('load resize', function() {
			var wWidth = w.width();
			$('.info-block').each(function() {
				var friend = $(this).prevAll('.catalog-filter__this'),
					friendHeight = friend.height();
				$(this).height(friendHeight + 59);
			});
			if(wWidth > 990){
				mobile.nav.removeAttr('style');
			}
			else if(wWidth <= 795){
				$('.filter__left .tabs__nav-item').click(function(){
					$('html,body').stop().animate({ scrollTop: $('.filter__right').offset().top}, 1000);
				});
			}
		});
		mobile.btn.click(function() {
			mobile.nav.slideToggle(0);
		});
		
	}

	responsive();

	$(window).load(function() {
		$('.dops__price-count span').each(function() {
			var count = $(this).html();
			count = count.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
			$(this).html(count);
		});
	});

	// Popup
	var Popup = {
	    block: $('.popup'),
	    window: $('.popup__window'),
	    container: $('.popup__container'),
	    title: $('.popup__title'),
	    close: $('.popup__close'),
	    bg: $('.popup__bg'),
	    speed: 300,
	    objects: {
	        feedback: $('.popup_feedback'),
	        interview: $('.popup_interview')
	    },
	    funShow: function (nameObject) {
	        var scrollTop = $(window).scrollTop(),
	            height = $(window).height();
	        nameObject.css('padding-top', scrollTop + 20).fadeIn(this.speed).height(height - scrollTop - 20);
	    },
	    funHide: function (nameObject) {
	        nameObject.fadeOut(this.speed);
	    }
	};

	$('.callback-btn').click(function() {
	    Popup.funShow(Popup.objects.feedback);
	});

	Popup.close.click(function() {
	    Popup.funHide(Popup.block);
	});

	Popup.bg.click(function() {
	    Popup.funHide(Popup.block);
	});
	$('.close-block').click(function() {
	    Popup.funHide(Popup.block);
	});

	$('.price__button, .plashka__button, .dupl__price-btn').click(function() {
	    Popup.funShow(Popup.objects.feedback);
	});

	$('.interview__result').click(function() {
	    Popup.funShow(Popup.objects.interview);
	});



	function removeClassPopupProduct() {
	    $('.popup_feedback.popup_product').removeClass('popup_product');
	}


	$('.popup_feedback .popup__close').click(function() {
	    setTimeout(removeClassPopupProduct, 500)
	});

	var select = $('.select');
	select.each(function() {
	    var parent = $(this),
	        selectTitle = $(this).find($('.select__title')),
	        selectList = $(this).find($('.select__list')),
	        selectParsing = $(this).find($('.select__parsing')),
	        selectParsingItem = $(this).find($('.select__parsing option'));
	    if (selectParsing) {
	        selectParsingItem.each(function() {
	            selectParsingItemText = $(this).text();
	            selectParsingItemValue = $(this).attr('value');
	            var selectString = '<li class="select__list-item" data-target="' + selectParsingItemValue + '">' + selectParsingItemText + '</li>';
	            selectList.append(selectString);
	            if ($(this).attr('selected')) {
	                selectTitle.text(selectParsingItemText);
	            }
	            selectParsingItemText = selectParsingItemValue = null;
	        });
	    }
	    parent = selectTitle = selectList = selectParsing = selectParsingItem = selectString = null;
	});
	function selectOpen(){
	    $('.select__title').click(function() {
	        var parent = $(this).parents('.select');
	        parent.toggleClass('select_open');
	        parent = null;

	    });
	}
	selectOpen();

	function selectItemActive() {
	    $('.select__list-item').click(function() {
	        var parent = $(this).parents('.select'),
	            parsingItem = parent.find($('.select__parsing option')),
	            attr = $(this).attr('data-target'),
	            title = parent.find($('.select__title'));
	        parsingItem.each(function() {
	            $(this).removeAttr('selected');
	            if ($(this).attr('value') == attr) {
	                var text = $(this).text();
	                title.text(text);
	                $(this).attr('selected', 'selected');
	            }
	        });
	        parent.toggleClass('select_open');
	        parent = parsingItem = attr = title = null;

	    });
	}
	selectItemActive();
	select = null;

	function tabStopFadeIn(objectName) {
	    objectName.fadeIn(600);
	}
	var tabs = $('.tabs');
	tabs.each(function() {
	    var parent = $(this);
	    tabsNav = $(this).find('.tabs__nav'),
	        tabsNavItem = $(this).find('.tabs__nav-item');
	    tabsNavItem.each(function() {
	        var attr = $(this).attr('data-tab');
	        if ($(this).hasClass('tabs__nav-item_select')) {
	            var tab = parent.find('#' + attr);
	            tab.fadeIn(100);
	        }
	        attr = tab = null;
	    });
	    parent = tabsNav = tabsNavItem = null;
	});

	function tabsActive() {
	    $('.tabs__nav-item, .links-tab__button, .links-tab__a').click(function() {
	        var parent = $('.tabs'),
	            attr = $(this).attr('data-tab'),
	            tabs = parent.find('.tabs__tab'),
	            navItem = parent.find('.tabs__nav-item, .links-tab__button, .links-tab__a');
	        navItem.each(function() {
	            $(this).removeClass('tabs__nav-item_select');
	        });
	        if ($(this).hasClass('tabs__nav-item_select') == false) {
	            $('.tabs__nav-item' + '[data-tab='+ attr + ']').addClass('tabs__nav-item_select');
	            $(this).addClass('tabs__nav-item_select');
	            tabs.each(function() {
	                $(this).fadeOut(100);
	            });

	            var tab = parent.find('#' + attr);
	            setTimeout(tabStopFadeIn(tab, 650))

	        }
	        parent = attr = tab = tabs = navItem = null;
	    });
	}
	tabsActive();
	tabs = null;
});