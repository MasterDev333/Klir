/* Init object fit polyfill */
/* To make it work, add 'font-family: 'object-fit: cover;';' to image */
// if (window.objectFitImages) {
//   window.objectFitImages();
// }

/* Init svg polyfill */
// if (window.svg4everybody) {
//   window.svg4everybody();
// }

$(document).ready(() => {
  // let resizeId;
  let wWidth = $(window).width();
  let navState = false;
  const $header = $('.page-header');
  let isObserver = true;
  let observer;
  let isTouch;

  $('.shop_table .button.suspend').html('Pause');
  
  console.log('start')

  function delay(callback, ms) {
    var timer = 0;
    return function() {
      var context = this, args = arguments;
      clearTimeout(timer);
      timer = setTimeout(function () {
        callback.apply(context, args);
      }, ms || 0);
    };
  } 

  if(window.location.href.includes("?reset-link-sent=true")){

    localStorage.setItem('account', 'true');

    let accoundAddress = window.location.href.split('/')
    let newAdd = accoundAddress[0] + "/" + accoundAddress[1] +  "/" + accoundAddress[2] +  "/"  + accoundAddress[3]


    window.location.href = newAdd;
  }

  if (localStorage.getItem('account') == "true") {

    $('.u-column1').prepend(`<p style="font-family: founders-grotesk-web-regular; margin-bottom: 20px;">We've sent you an email with a link to update your password.</p>`)

    
  }
  //localStorage.setItem('account', 'false');

  if(!window.location.href.includes("?reset-link-sent=true")){
    localStorage.setItem('account', 'false');localStorage.setItem('account', 'false');
  }




  if (navigator.userAgent.indexOf('Mac OS X') != -1) {
    $("body").addClass("mac");
  } else {
    $("body").addClass("pc");
  }

  //get viewheigth all devices
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
  window.addEventListener('resize', () => {
    
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    setTimeout(function(){

      let vh = window.innerHeight * 0.01;
      $('.cart-fly').css('height', `${vh * 100}px`)

     }, 700);
     
  

  });


  //open cart 
  if (localStorage.getItem('cart') == "open") {
    disableScrolling()
    $('.cart-fly').addClass('active')
    localStorage.setItem('cart', 'close');

    $("html, body").click(function(e) {
  
      if ($(e.target).parents().hasClass('cart-fly') || $(e.target).hasClass('js-open-cart')   ) {
        return;
      }else{
        $('.cart-fly').removeClass('active')
        $('.header').css('top', '28px')
        $('.header').removeClass('active')
        enableScrolling()
        $("html, body").unbind();
      }     
    })
  }

  localStorage.getItem('cart', 'open');

  //smooth scroll anchor tags
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();

          document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'
          });
      });
  });



  function initGeneralAni(){
    if (
      !('IntersectionObserver' in window) ||
      !('IntersectionObserverEntry' in window) ||
      !('isIntersecting' in window.IntersectionObserverEntry.prototype)
    ) {
      isObserver = false;
      $('html').removeClass('is-observer');
    }
  
    if (isObserver) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              observer.unobserve(entry.target);
            }
          });
        },
        { rootMargin: '0px 0px -15% 0px' }
      );
    }

  }

  if (
    !('IntersectionObserver' in window) ||
    !('IntersectionObserverEntry' in window) ||
    !('isIntersecting' in window.IntersectionObserverEntry.prototype)
  ) {
    isObserver = false;
    $('html').removeClass('is-observer');
  }

  if (isObserver) {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -15% 0px' }
    );
  }



  function isTouchDevice() {
    const prefixes = ' -webkit- -moz- -o- -ms- '.split(' ');
    const mq = (query) => {
      return window.matchMedia(query).matches;
    };

    if (
      'ontouchstart' in window ||
      // eslint-disable-next-line no-undef
      (window.DocumentTouch && document instanceof DocumentTouch)
    ) {
      return true;
    }

    // include the 'heartz' as a way to have a non matching MQ to help terminate the join
    // https://git.io/vznFH
    const query = ['(', prefixes.join('touch-enabled),('), 'heartz', ')'].join(
      ''
    );
    return mq(query);
  }

  if (isTouchDevice()) {
    isTouch = true;
    $('html').addClass('is-touch');
  }

  // Returns a function, that, as long as it continues to be invoked, will not
  // be triggered. The function will be called after it stops being called for
  // N milliseconds. If `immediate` is passed, trigger the function on the
  // leading edge, instead of the trailing.
  function debounce(func, wait, immediate, ...args) {
    let timeout;
    return function () {
      const context = this;
      const later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

  function disableScrolling() {
    if ($(document).height() > $(window).height()) {
      const scrollTop = $('html').scrollTop()
        ? $('html').scrollTop()
        : $('body').scrollTop(); // Works for Chrome, Firefox, IE...
      $('html').addClass('disable-scrolling').css('top', -scrollTop);
    }
  }

  function enableScrolling() {
    const scrollTop = parseInt($('html').css('top'), 10);
    $('html').removeClass('disable-scrolling');
    $('html,body').scrollTop(-scrollTop);
  }

  function bindEvents() {
    $('.hamburger').on('click', () => {
      if (navState) {
        $header.removeClass('is-opened');
        enableScrolling();
      } else {
        $header.addClass('is-opened');
        disableScrolling();
      }

      navState = !navState;
    });

    // FOCUS STYLING
    // Let the document know when the mouse is being used
    document.body.addEventListener('mousedown', () => {
      document.body.classList.remove('is-tab');
    });

    // Re-enable focus styling when Tab is pressed
    document.body.addEventListener('keydown', (event) => {
      if (event.key === 'Tab') {
        document.body.classList.add('is-tab');
      }
    });
  }

  const doneResizing = debounce(() => {
    const width = $(window).width();
    initTicker()

    $('.header__mobile').removeClass('active')
    $('.page-banner').css({'background-color': '#00205C'})
    $('.page-banner p').css({'color': 'white'})
    //initGridBlog()

    if (wWidth !== width) {
      wWidth = width;
    }
  }, 500);

  function initPageBanner(){
    const $bannerCopy = $('.page-banner__inner p')
    let maxCount = $bannerCopy.length
    let count = 0
    let timer = parseFloat($('.page-banner').attr('data-time') * 1000)

    $bannerCopy.first().addClass('active')
    setInterval(changeCopy, timer);

    function changeCopy(){

      //starts from zero index when reaches max length
      if(count > maxCount-2){
        $bannerCopy.first().addClass('active')
        $bannerCopy.eq(count).removeClass('active')
        count = 0;     
        
      }else{
        count ++;
        $bannerCopy.eq(count-1).removeClass('active')      
        $bannerCopy.eq(count).addClass('active')
      }    
    }
  }

  function initHeader(){
    const $hamburger = $('.header__hamburger')
    const $mobMenu = $('.header__mobile')   
    const $header = $('.header')
    const $headerNav = $('.header__nav')


    $('.js-close-mobile-menu').on('click', function(){
      $('.header__mobile').removeClass('active')
      enableScrolling()
      $('.page-banner').css({'background-color': '#00205C'})
      $('.page-banner p').css({'color': 'white'})
    })

    $hamburger.on('click', function(){    
      $mobMenu.addClass('active')    
      disableScrolling()
      $('.page-banner').css({'background-color': 'white'})
      $('.page-banner p').css({'color': '#00205C'})
    })

    var lastScrollTop = 0;
    $(window).scroll(function(event){
      var st = $(this).scrollTop();

      if ($('html').hasClass('disable-scrolling')) {
        return;
      }else{
        if(st > 10){
          if($(window).width() > 1000){
          $header.addClass('active')
          }
          $('.header').css('top', '28px')
          
        }
        else{
          $header.removeClass('active')  
          $('.header').css('top', '28px')   
          
        }
  
        if (st > lastScrollTop){
          $headerNav.removeClass('active')
          $('.animated-border--desktop-only').css('opacity', '0')
  
        } else {
          
          if($(window).width() > 1024){
            $headerNav.addClass('active') 
            $('.animated-border--desktop-only').delay(800 ).css('opacity', '1')
          }
        }
        lastScrollTop = st;
      }
    });
  }

  function initFeaturedProduct(){
    const $right = $('.featured-products__right')
    const $left = $('.featured-products__left')

    $right.on('mouseenter', function(){

      if ($(this).find('.featured-products__image-hidden').length) {
        $(this).find('.featured-products__image-show').hide()
        $(this).find('.featured-products__image-hidden').show()
      }
    })

    $right.on('mouseleave', function(){
      $(this).find('.featured-products__image-show').show()
      $(this).find('.featured-products__image-hidden').hide()
    })

    $left.on('mouseenter', function(){

      if ($(this).find('.featured-products__image-hidden').length) {
        $(this).find('.featured-products__image-show').hide()
        $(this).find('.featured-products__image-hidden').show()
      }
    })

    $left.on('mouseleave', function(){
      $(this).find('.featured-products__image-show').show()
      $(this).find('.featured-products__image-hidden').hide()
    })
  }

  function initProductMain(){
    const $ingredientsBtn = $('.product-main__ingredients-title')

    const oneLineMobile = $('.product-main__exerpt')
    const oneLineDuoMobile = $('.complete-the-set__copy--mobile')

    if ($(window).width() < 1204) {

      oneLineDuoMobile.find('h4').each(function(){
        $(this).hide()       
       })

      oneLineDuoMobile.append('<h4><span style="font-family: founders-grotesk-web-medium;">30 Day Supply</span> <span style="font-family: founders-grotesk-web-regular;">&nbsp; &nbsp; 60 Vegan Capsules</span></h4>')

      oneLineMobile.find('h2').each(function(){
       $(this).hide()       
      })

      oneLineMobile.prepend('<h2><span style="font-family: founders-grotesk-web-medium;">30 Day Supply</span> <span style="font-family: founders-grotesk-web-regular;">&nbsp; &nbsp; 60 Vegan Capsules</span></h2>')
    }

    $ingredientsBtn.on('click', function(){
      if ($('.product-main__ingredients-hidden').hasClass('active')) {
        $('.product-main__ingredients-hidden').removeClass('active')
        $('.product-main__ingredients-title svg').removeClass('active')
      }else{
        $('.product-main__ingredients-hidden').addClass('active')
        $('.product-main__ingredients-title svg').addClass('active')
      }
    })

    const swiper = new Swiper('.product-main__left', {
      loop: true,
      slidesPerView: 1,
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
      navigation: {
        prevEl: '.product-main .left',
        nextEl: '.product-main .right',
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      },
    });

    if (swiper.slides.length < 4) {
      $('.product-main__nav').hide()

      $('.swiper-pagination').hide()
    }
  }

  function initProductExtras(){
    const $gridHeight = $('.product-extra__right-grid').height()
    const $accordian = $('.product-extra__accordian-title')  

    if($(window).width() > 1023){
      $accordian.each(function(){
        $(this).css('height', `${$gridHeight / 3 - 0.65}px`)
      })
    }

    $accordian.on('click', function(){
      if ($(this).parent().find('.product-extra__accordian-hidden').hasClass('active')) {
        $(this).parent().find('.product-extra__accordian-hidden').removeClass('active')
        $(this).parent().find('.product-extra__accordian-title svg').removeClass('active')
      }else{
        $accordian.each(function(){
          $(this).parent().find('.product-extra__accordian-hidden').removeClass('active')
          $(this).parent().find('.product-extra__accordian-title svg').removeClass('active')
        })
        $(this).parent().find('.product-extra__accordian-hidden').addClass('active')
        $(this).parent().find('.product-extra__accordian-title svg').addClass('active')


        
        self = this
        setTimeout(function(){ 
 
          $("body, html").animate({
            scrollTop: $($(self).parent().find('.product-extra__accordian-title')).offset().top - 200
        });


         }, 400);

      }
    })
  }

  function initDuoSelect(){
    const $btns = $('.js-duo-btn-select')

    if($(window).width() < 768){
      $btns.each(function(){

        if ($(this).hasClass('active')) {
          $(this).hide()
        }else{
          $(this).show()
        }
      })
    }

    $btns.on('click', function(){
      $btns.each(function(){$(this).removeClass('active')})
      $(this).addClass('active')

      if ($(this).attr('data-duo-select') == "levelup") {
        $('.page-wrap').removeClass('page-wrap--dark')
      //   $('.unwind-data').fadeOut("0", function () {
      //     $('.level-up-data').fadeIn("0");
      // })

      $('.unwind-data').hide()
      $('.level-up-data').show()
      }
      else{
        $('.page-wrap').addClass('page-wrap--dark')
        $('.unwind-data').show()
        $('.level-up-data').hide()
        // $('.level-up-data').fadeOut("0", function () {
        //   $('.unwind-data').fadeIn("0");
        // });
      }

      if($(window).width() < 768){
        $btns.each(function(){
       
          if ($(this).hasClass('active')) {
            $(this).hide()
          }else{
            $(this).show()
          }
        })
      }
    })
  }

  function initSubscriptionBtns(){
    const $addForms = $('.add-to-cart-form')

    $('.btn-add-to-cart').on('click', function(e){

      disableScrolling()
     // $('.loader-js-add-to-cart').addClass('active')
      //$(this).addClass('button--loading')



      e.preventDefault()      

      let duo = false
      let self = this
      if ($(this).hasClass('duo')){
          duo = $(self).attr('duo-data')
      }
  
      $.ajax( {
        type:     'GET',
        url:      $(this).attr( 'data-href' ),
        dataType: 'html',
        success:  function( response ) {
        },
        complete: function() {

          if(duo){
 
            addDuo()
            return
          }

          disableScrolling()
          localStorage.setItem('cart', 'open');
          location.reload(true);
        }  

      });

      function addDuo(){


        $.ajax( {
          type:     'GET',
          url:      duo,
          dataType: 'html',
          success:  function( response ) {
          },
          complete: function() {
  
            disableScrolling()
            localStorage.setItem('cart', 'open');
            location.reload(true);
          }  
  
        });
      }
    })

    $('.subscription-btn').on('mouseenter', function(){
      $(this).parent().find('.add-to-cart-form__hidden-sub-info').addClass('active')
    })
    

    $('.subscription-btn').on('mouseleave', function(){
      $(this).parent().find('.add-to-cart-form__hidden-sub-info').removeClass('active')
    })


    $addForms.each(function(){
      let $subBtn = $(this).find('.subscription-btn')
      let $oneTimeBtn = $(this).find('.onetime-btn')

      $oneTimeBtn.on('click', function(e){
        e.preventDefault()

        if ($(this).hasClass('ontime-btn-bundle')) {
          $(this).parent().parent().find('.btn-add-to-cart').attr('duo-data', $(this).attr('data-unwind-url'));
        }

        $(this).parent().parent().find('.btn-add-to-cart').attr('data-href', $(this).attr('data-one-time'));
        $(this).addClass('active')
        $subBtn.removeClass('active')
        $(this).parent().parent().find('.btn-add-to-cart').text('ADD TO CART');
      })      

      $subBtn.on('click', function(e){
        e.preventDefault()

        if ($(this).hasClass('subscription-btn-bundle')) {
          $(this).parent().parent().find('.btn-add-to-cart').attr('duo-data', $(this).attr('data-unwind-url'));
        }
        
        $(this).parent().parent().find('.btn-add-to-cart').attr('data-href', $(this).attr('data-subscription-attr'));
        $(this).addClass('active')
        $oneTimeBtn.removeClass('active')
        $(this).parent().parent().find('.btn-add-to-cart').text('SUBSCRIBE')
      })
    })
  }

  function initPageHero(){
    const $btn = $('.page-hero__scroll button');

    $btn.on('click', function(){
      var n = $('.sustainability-logos').position().top - 50;

      $('html, body').animate({ scrollTop: n }, 500);
    })
  }
  
  function initContactFaq(){
    const $faqBtn = $('.js-faq-link')
    const $contactBtn = $('.js-contact-link')

    $faqBtn.on('click', function(){

      var n = $('.faqs__inner h4').position().top;
      $('html, body').animate({ scrollTop: n }, 500);
    })

    $contactBtn.on('click', function(){

      var n = $('.contact').position().top - 74;
      $('html, body').animate({ scrollTop: n }, 500);
    })
  }

  function initShopFly(){
    const $btn = $('.js-shop')


    $btn.on('click', function(){
      $('.cart-fly').removeClass('active')
      $('.shop-fly').addClass('active')
      disableScrolling()
      $('.header').css('top', '28px')
      //$('.header').addClass('active')

      $("html, body").click(function(e) {
  
 
        if ($(e.target).parents().hasClass('shop-fly') || $(e.target).parents().hasClass('js-shop') || $(e.target).hasClass('js-shop')   ) {
          return;
        }else{
          $('.shop-fly').removeClass('active')
          $('.header').css('top', '28px')
          $('.header').removeClass('active')
          enableScrolling()
  
          $("html, body").unbind();
        }     
      })
    })

    $('.shop-fly__close').on('click', function(){
      $('.shop-fly').removeClass('active')
      $('.header').css('top', '28px')
      $('.header').removeClass('active')
      enableScrolling()

      $("html, body").unbind();
    })




  }

  function initFlyCart(){
    const $btn = $('.js-open-cart')

    $('.js-close-cart').on('click', function(){
      $('.cart-fly').removeClass('active')
      $('.header').css('top', '28px')
      $('.header').removeClass('active')
      enableScrolling()

      $("html, body").unbind();
    })




    $btn.on('click', function(){
      $('.shop-fly').removeClass('active')
      $('.cart-fly').addClass('active')
      disableScrolling()
      $('.header').css('top', '28px')
      if($(window).width() > 1024){
      //$('.header').addClass('active')
      }


      $("html, body").click(function(e) {
  
        if ($(e.target).parents().hasClass('cart-fly') || $(e.target).hasClass('js-open-cart')   ) {
          return;
        }else{
          $('.cart-fly').removeClass('active')
          $('.header').css('top', '28px')
          $('.header').removeClass('active')
          enableScrolling()

          $("html, body").unbind();
        }     
      })
    })

    $('.cart-fly__close').on('click', function(){
      $('.cart-fly').removeClass('active')
      $('.header').css('top', '28px')
      $('.header').removeClass('active')
      enableScrolling()

      $("html, body").unbind();
    })
  }



  function initRemoveItemFromCart(){

    $('.remove-item').click(function(e){ 
      disableScrolling()
      //$('.loader-js-add-to-cart').addClass('active')
      //$(this).addClass('button--loading-dark')

      e.preventDefault()
      let duo = false

      if($(this).hasClass('level-up-remove')){
        duo = $('.js-unwind-remove').attr('href')
      }

      $.ajax( {
        type:     'GET',
        url:      $(this).attr( 'href' ),
        dataType: 'html',
        success:  function( response ) {
        },
        complete: function() {

          if (duo) {
            removeDuo()
            return;
          }

          disableScrolling()
          localStorage.setItem('cart', 'open');
          location.reload(true);
        }
        }); 

        function removeDuo(){
          $.ajax( {
            type:     'GET',
            url:      duo,
            dataType: 'html',
            success:  function( response ) {
            },
            complete: function() {
    
              refreshAndOpenCart()
            }
            }); 
        }
    });
  }

  function refreshAndOpenCart(){
    disableScrolling()
    localStorage.setItem('cart', 'open');
    location.reload(true);
  }

  function upgradeItemInCart(){
    let duo = false

    $('.js-upgrade').click(function(e){  
      disableScrolling()

      if($(this).hasClass('level-up-upgrade')){
        duo = true
      }

      e.preventDefault()
      let upgradeUrl = $(this).attr('data-subscribe')
      let remove = $(this).parent().find('.remove-item').attr('href')    


      function removeThis(){
        return  $.ajax( {
          type:     'GET',
          url:      remove,
          dataType: 'html'
        })
      }

      function upgradeThis(){
        return $.ajax( {
          type:     'GET',
          url:      upgradeUrl,
          dataType: 'html',
        })
      }

      function removeUnwindDuo(){
        return $.ajax( {
          type:     'GET',
          url:      $('.js-unwind-remove').attr('href'),
          dataType: 'html',
        })
      }

      function upGradeDuo(){
        return $.ajax( {
          type:     'GET',
          url:      $('.js-unwind-upgrade').attr('data-subscribe'),
          dataType: 'html',
        })
      }

      if(duo){
        removeThis().then(upgradeThis).then(removeUnwindDuo).then(upGradeDuo).then(
          refreshAndOpenCart
        )
      }
      else{
        removeThis().then(upgradeThis).then(
          refreshAndOpenCart
        )
      }
    })
  }


  function initQtySelectsCartDuo(){    
    let timer = null;

    $('.js-qty-btn-minus-duo').on('click', function(){
      if (timer !== null) { window.clearTimeout(timer); }
      let qtyshow = $(this).parent().find('.js-qty-show').text()
      if(qtyshow <= 1){
   
        qtyshow = 1
  
      }else{

        qtyshow --

      }
      $(this).parent().find('.js-qty-show').text(qtyshow)
      let removeUrl = $(this).parent().parent().find('.remove-item').attr('href')
      // let addRef = $(this).attr('data-url') + qtyshow     
      
      let homeURL = $('.js-home-url').attr('data-home')
      let productId = $(this).parent().attr('data-id')
      let addRef
      let unwindUpdate

      if($(this).parent().attr('data-sub') == 'true'){
        console.log('sub product!');
        addRef = homeURL + "?add-to-cart=" + productId + "&convert_to_sub_" + productId + "=1_month&quantity=" + qtyshow
        unwindUpdate = $('.js-home-url').attr('data-home') + '/?add-to-cart=338&convert_to_sub_338=1_month&quantity=' + qtyshow
      }else{
        addRef = homeURL + "?add-to-cart=" + productId +  "&quantity=" + qtyshow
        unwindUpdate = $('.js-home-url').attr('data-home') + '/?add-to-cart=338&quantity=' + qtyshow
      }





      //338

      timer = window.setTimeout(function() {
        chaneTheQty(removeUrl, addRef, unwindUpdate )
      }, 500);
    })

    $('.js-qty-btn-plus-duo').on('click', function(){
      if (timer !== null) { window.clearTimeout(timer); }
      let qtyshow = $(this).parent().find('.js-qty-show').text()
      qtyshow ++
      $(this).parent().find('.js-qty-show').text(qtyshow)
      let removeUrl = $(this).parent().parent().find('.remove-item').attr('href')
      let addRef
      let unwindUpdate
      let homeURL = $('.js-home-url').attr('data-home')
      let productId = $(this).parent().attr('data-id')

      if($(this).parent().attr('data-sub') == 'true'){
        console.log('sub product!');
        addRef = homeURL + "?add-to-cart=" + productId + "&convert_to_sub_" + productId + "=1_month&quantity=" + qtyshow
        unwindUpdate = $('.js-home-url').attr('data-home') + '/?add-to-cart=338&convert_to_sub_338=1_month&quantity=' + qtyshow
      }else{
        addRef = homeURL + "?add-to-cart=" + productId +  "&quantity=" + qtyshow
        unwindUpdate = $('.js-home-url').attr('data-home') + '/?add-to-cart=338&quantity=' + qtyshow
      }   

      timer = window.setTimeout(function() {
        chaneTheQty(removeUrl, addRef, unwindUpdate )
      }, 500);
    })

    function chaneTheQty(remove, update, unwindUpdate ){
      function removeThis(){
        return  $.ajax( {
          type:     'GET',
          url:      remove,
          dataType: 'html'
        })
      }
  
      function updateThis(){
        return $.ajax( {
          type:     'GET',
          url:      update,
          dataType: 'html',
        })
      }

      function removeUnwindDuo(){
        return $.ajax( {
          type:     'GET',
          url:      $('.js-unwind-remove').attr('href'),
          dataType: 'html',
        })
      }

      function upGradeDuo(){
        return $.ajax( {
          type:     'GET',
          url:      unwindUpdate,
          dataType: 'html',
        })
      }

      removeThis().then(updateThis).then(removeUnwindDuo).then(upGradeDuo).then(
        refreshAndOpenCart
      )
    }
  }


  function initQtySelectsCart(){
    let timer = null;


    $('.js-qty-btn-minus').on('click', function(){
      if (timer !== null) { window.clearTimeout(timer); }
      let qtyshow = $(this).parent().find('.js-qty-show').text()
      if(qtyshow <= 1){
   
        qtyshow = 1
  
      }else{

        qtyshow --

      }
      $(this).parent().find('.js-qty-show').text(qtyshow)

      let homeURL = $('.js-home-url').attr('data-home')
      let productId = $(this).parent().attr('data-id')

      let addRef

      if($(this).parent().attr('data-sub') == 'true'){
        console.log('sub product!');
        addRef = homeURL + "?add-to-cart=" + productId + "&convert_to_sub_" + productId + "=1_month&quantity=" + qtyshow
      }else{
        addRef = homeURL + "?add-to-cart=" + productId + "&quantity=" + qtyshow
      }
      
      let removeUrl = $(this).parent().parent().find('.remove-item').attr('href')     

      timer = window.setTimeout(function() {
        chaneTheQty(removeUrl, addRef )
      }, 500);
    })

    $('.js-qty-btn-plus').on('click', function(){
      if (timer !== null) { window.clearTimeout(timer); }
      let qtyshow = $(this).parent().find('.js-qty-show').text()
      qtyshow ++
      $(this).parent().find('.js-qty-show').text(qtyshow)


      let homeURL = $('.js-home-url').attr('data-home')
      let productId = $(this).parent().attr('data-id')

      let addRef

      if($(this).parent().attr('data-sub') == 'true'){
        console.log('sub product!');
        addRef = homeURL + "?add-to-cart=" + productId + "&convert_to_sub_" + productId + "=1_month&quantity=" + qtyshow
      }else{
        addRef = homeURL + "?add-to-cart=" + productId + "&quantity=" + qtyshow
      }


      let removeUrl = $(this).parent().parent().find('.remove-item').attr('href')

      


      timer = window.setTimeout(function() {
        chaneTheQty(removeUrl, addRef )
      }, 500);
    })

    function chaneTheQty(remove, update ){
      function removeThis(){
        return  $.ajax( {
          type:     'GET',
          url:      remove,
          dataType: 'html'
        })
      }
  
      function updateThis(){
        return $.ajax( {
          type:     'GET',
          url:      update,
          dataType: 'html',
        })
      }

      removeThis().then(updateThis).then(
        refreshAndOpenCart
      )
    }
  }
  



  function initGridBlog(){
    const $filterBtn = $('.blog-list__menu li')
    const $items = $('.blog-list__item')

    $items.each(function(){
      $(this).addClass('is-visible')
    })

    if(!$filterBtn.length){
      return
    }

    var container = document.querySelector('#blog-list__inner');
    // var msnry = new Masonry( container, {

    //   itemSelector: '.blog-list__item',
    //   columnWidth: '.grid-sizer'
    // });



    $filterBtn.on('click', function(){
      let btnCat = $(this).attr('data-category')
      // msnry.destroy()
      

      $filterBtn.each(function(){$(this).removeClass('active')})
      $(this).addClass('active')

      if(btnCat == "All"){
        $items.each(function(){  $(this).fadeIn(); $(this).addClass('is-visible');})
      }else{

        $items.each(function(){
          let itemCat = $(this).attr('data-category')
          let formatedBtnCat = btnCat.replace(/ /g,'')
          let itemCategories = $(this).attr('data-category').replace(/ /g,'').split('|')
          let self = this

          $(this).hide()
          $(this).addClass('is-visible')

          $(itemCategories).each(function(){
            if(this.includes(formatedBtnCat)){          
              $(self).fadeIn()    

            }
          })
        })
      }



    
      // msnry = new Masonry( container, {
      //   // options
      //   itemSelector: '.blog-list__item',
      //   columnWidth: '.grid-sizer'
      // });
      //initGeneralAni()


    })



  }

  function initCheckout(){

    $('.woocommerce-form-coupon p').first().text('If you have a discount code, please apply it below.')


    

    if(window.location.href.includes("checkout")){



      //$('.header').css({"top": "0px"})
      $('.header').removeClass('active')
      $('.header__nav').removeClass('active')
      $('.animated-border').css({"background-color": "white"})
      $('.header__logo svg').css({"height": "40px"})
      $('.header').css({"height": "75px"})

      if($(window).width() < 1024){

        $('.page-wrap').css({"padding-top": "107px"})
      }else{
 
        $('.page-wrap').css({"padding-top": "102px"})
      }



      $(window).on( 'scroll', function(){
        $('.animated-border').css({"background-color": "#00205C"})
        //$('.header').css({"top": "0px"})

        if($(window).width() > 1024){

          $('.page-wrap').css({"padding-top": "150px"})

        }

        
     });    

    }

   


    // setTimeout(function(){ 
    //   const btn = $('#place_order')  

    //   $('.woocommerce-shipping-totals th').text('Shipping')


      

    //   if(btn.text() == "Place order"){
    //     btn.text('Pay Now')
    //   }
    //   const flatratetext = $("label[for='shipping_method_0_flat_rate1']")
    //   let price = flatratetext.text().split(':')[1]

    //   flatratetext.empty()
    //   flatratetext.append(`
    //   <span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">${price}</bdi></span>
    //   `)

    //  }, 2000);

  }


  function initReviews(){
    setTimeout(function(){ 

      const reviews = $('.jdgm-carousel-item')


      reviews.each(function(){

        let name = $(this).find('.jdgm-carousel-item__reviewer-name').text()
        let formatedName = name.split(" ")
        $(this).find('.jdgm-carousel-item__review-body').append(`<h4 style="font-family: 'founders-grotesk-web-medium';
        font-weight: 400;
        margin-top: 20px;
        text-transform: uppercase;
        font-size: 18px;">${formatedName[1]}   ${formatedName[2].charAt(0)}.</h4> `)
 
      })

     }, 1000);
  }

  function initklaviyoSignUp(){
    const btn = $('#klaviyo-btn')

    if(!btn.length){
      return
    }

    $(btn).on('click', function(){
    
      let email = $('#klaviyo-email').val()


      // $('#klaviyo-name').fadeOut()
      // $('#klaviyo-email').fadeOut()
      // $('#klaviyo-btn').fadeOut()
      

        var settings = {
          "async": true,
          "crossDomain": true,
          "url": "https://manage.kmail-lists.com/ajax/subscriptions/subscribe",
          "method": "POST",
          "headers": {
            "content-type": "application/x-www-form-urlencoded",
            "cache-control": "no-cache"
          },
          "data": {
            "g": "SWwkF2",
            "email": email,
          }
        }
        
        $.ajax(settings).done(function (response) {
          $('#klaviyo-email').val("")
          $('#klaviyo-form').append(`<p style="margin-top:10px">Welcome! Your inbox just went up a level.</p>`)
        });
    })
  }

  function initSusutainabilityApi(){



    const trees = $('.js-num-trees')
    const carbon = $('.js-num-carbon')
    const monthsTotal = $('.js-num-duration')

    if(!trees.length){
      return;
    }


    let today = new Date(); 
    var d = new Date("February 15, 2021 00:00:00");




    function monthDiff(d1, d2) {
      var months;
      months = (d2.getFullYear() - d1.getFullYear()) * 12;
      months -= d1.getMonth();
      months += d2.getMonth();
      monthsTotal.text(`${months <= 0 ? 0 : months} MONTHS`)
      monthsTotal.attr('data-count', `${months <= 0 ? 0 : months}`)
    }

    monthDiff(d, today);    



    let apiString = `https://public.ecologi.com/users/klir/impact`
    fetch(apiString)
    .then(res => res.json())
    .then(
      (result) => {

        trees.text(`${result.trees}`)
        trees.attr("data-count", `${result.trees}`)
        carbon.text(`${result.carbonOffset}T`)

        carbon.attr("data-count", `${result.carbonOffset}`)

        let seen = false
    
        const $counts = $('.sustainability-logos__grid-item h4');
    
        function numberWithCommas(x) {
          return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
        
        $(window).scroll(function(){
          function elementScrolled(elem){
            var docViewTop = $(window).scrollTop();
            var docViewBottom = docViewTop + $(window).height();
            var elemTop = $($counts).offset().top;
            return ((elemTop <= docViewBottom) && (elemTop >= docViewTop));
          }  
      
          if(elementScrolled('.sustainability-logos__grid-item') && !seen) {  
            seen = true;
            $($counts).each(function() {

     
    
              var $this = $(this),
                  countTo = $(this).text().replace(',','');
                  countTo = $(this).attr('data-count');
        
              $({ countNum: 1}).animate({
                countNum: countTo
              },    
              {    
                duration: 2000,
                easing:'linear',
                step: function() {

           
                  if ($this.hasClass('js-num-carbon')) {
                    $this.text(`${Math.floor(this.countNum)}T`);
                  }else if($this.hasClass('js-num-duration')){
                    $this.text(`${Math.floor(this.countNum)} MONTHS`);
                  }else{
                    $this.text(`${Math.floor(this.countNum)}`);
                  }
                 
                },
                complete: function() {  
                  if ($this.hasClass('js-num-carbon')) {
                    $this.text(`${Math.floor(this.countNum)}T`);
                  }else if($this.hasClass('js-num-duration')){
                    $this.text(`${Math.floor(this.countNum)} MONTHS`);
                  }else{
                    $this.text(`${Math.floor(this.countNum)}`);
                  }
                }
              });  
            });
          }
        });  


      })
      .catch(() => {
      alert(`${this.state.searchLocation} is not a valid place`)
    });
  }

  function initAccountPage(){

    const $createAccountBtn = $('.js-create-account')

    $createAccountBtn.on('click', function(){  
      window.scrollTo(0, 0);
      $('.u-column1').hide()
      $('.u-column2').show()
    })
  }

  function initTicker(){
    $('.track').css('transition', '0s')
    $('.track').css('transform', 'translateX(0%)')
    setTimeout(function(){ 

      $('.track').css('transition', '83s')
      $('.track').css('transform', 'translateX(-100%)')
     }, 100);


    var intervalID = window.setInterval(myCallback, 60000);

      function myCallback() {
        $('.track').css('transition', '0s')
        $('.track').css('transform', 'translateX(0%)')
        setTimeout(function(){ 

          $('.track').css('transition', '83s')
          $('.track').css('transform', 'translateX(-100%)')
         }, 100);
      }
  }

  function initCounter(){
      console.log('test');

  }

  function initPostTrees(){
    // let apiString = `https://public.ecologi.com/users/klir/impact`
    // fetch(apiString)
    // .then(res => res.json())
    // .then(
    //   (result) => {       
    //     console.log('yrep');
    //     console.log(result);

    //   })
    //   .catch(() => {
    //   alert(`${this.state.searchLocation} is not a valid place`)
    // });

    const settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://public.ecologi.com/impact/trees?number=5",
      "method": "POST",
      "headers": {
        "authorization": "Bearer"
      },
      "processData": false,
      "data": "{\"number\":1,\"name\":\"Elijah Wood\",\"test\":true}"
    };
    
    $.ajax(settings).done(function (response) {
      console.log(response);
    });
  }









  /* FUNCTION CALLS */
  /* ============= */
  bindEvents();
  initPageBanner()
  initHeader()
  initFeaturedProduct()
  initProductMain()
  initProductExtras()
  initDuoSelect()
  initSubscriptionBtns()
  initPageHero()
  initContactFaq()
  initShopFly()
  initFlyCart()
  initRemoveItemFromCart()
  upgradeItemInCart()
  initGridBlog()
  initCheckout()
  initReviews()
  initklaviyoSignUp()
  initSusutainabilityApi()
  initAccountPage()
  initCounter()
  initQtySelectsCart()
  initQtySelectsCartDuo()
  initTicker()

  initPostTrees()



  if (isObserver) {
    $('.js-visibility').each((i, el) => {
      observer.observe(el);
    });
  }

  $(window).on('scroll', () => {});
  $(window).on('load', () => {});
  $(window).on('resize', doneResizing);
  $(window).on('resize', () => {
    //initProductExtras()
    initDuoSelect()
  });
});

  //sub
  //convert_to_sub_181=1_month&add-to-cart=181&action=xoo_wsc_add_to_cart

  //none
  //convert_to_sub_181=0&add-to-cart=181&action=xoo_wsc_add_to_cart


  //338



// (function ($) {

//   $(document).on('click', '.single_add_to_cart_button', function (e) {
//       e.preventDefault();

//       let self = this

//       console.log('ajax clicked');

//       var $thisbutton = $(this),
//               $form = $thisbutton.closest('form.cart'),
//               id = $thisbutton.val(),
//               product_qty = $form.find('input[name=quantity]').val() || 1,
//               product_id = $form.find('input[name=product_id]').val() || id,
//               variation_id = $form.find('input[name=variation_id]').val() || 0;

//       var data = {
//           action: 'woocommerce_ajax_add_to_cart',
//           product_id: product_id,
//           product_sku: '',
//           quantity: product_qty,
//           variation_id: variation_id,
//       };

//       $(document.body).trigger('adding_to_cart', [$thisbutton, data]);

//       $.ajax({
//           type: 'post',
//           url: wc_add_to_cart_params.ajax_url,
//           data: data,
//           beforeSend: function (response) {
//               $thisbutton.removeClass('added').addClass('loading');
//           },
//           complete: function (response) {
//               $thisbutton.addClass('added').removeClass('loading');
//           },
//           success: function (response) {

//             if($(self).hasClass('duo')){
//               console.log(this);
//               //$('#bundle-dummy').find('.one-time-option input').prop( "checked", true );
//               $('#bundle-dummy').find('.single_add_to_cart_button').click()
//               console.log("submited?");
//             }

//               if (response.error && response.product_url) {
//                   window.location = response.product_url;
//                   return;
//               } else {
//                   $(document.body).trigger('added_to_cart', [response.fragments, response.cart_hash, $thisbutton]);
//               }
//           },
//       });

//       return false;
//   });
// })(jQuery);