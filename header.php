<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package theme-name
 */
global $woocommerce;
  $cartCount = $woocommerce->cart->get_cart();
  $cartQty = 0;

  foreach($cartCount as $item => $values) { 

    //print_r($values);
    $product_id = $values['product_id'];

    if ($product_id == 339) {
      $cartCount--;
    }else{
      $cartQty++;
    };
  }

?>

<?php header('Access-Control-Allow-Origin: *'); ?>
<!doctype html>
<html <?php language_attributes(); ?> class="is-observer">
  <head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta http-equiv="x-ua-compatible" content="ie=edge" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    <!-- <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">  -->
    <link rel="profile" href="http://gmpg.org/xfn/11">


<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-186291597-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-186291597-1');
</script>



    <script>
      // Picture element HTML5 shiv
      document.createElement('picture');
    </script>


    <?php wp_head(); ?>

    <!-- Facebook Pixel Code -->
<script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', '178256874179526');
  fbq('track', 'PageView');
</script>
<noscript><img height="1" width="1" style="display:none"
  src="https://www.facebook.com/tr?id=178256874179526&ev=PageView&noscript=1"
/></noscript>
<!-- End Facebook Pixel Code -->
  </head>

  <?php
    $banner_on = get_field('banner_on', 'options');
    $banner_background_colour = get_field('banner_background_colour', 'options');
    $banner_text = get_field('banner_text', 'options');
    $banner_text_colour = get_field('banner_text_colour', 'options'); 
    $unwind = get_field('unwind', 'options');  
    $level_up = get_field('level_up', 'options');  
    $the_duo = get_field('the_duo', 'options'); 
    $timer = get_field('banner_timer', 'options'); 
    $include_link = get_field('include_link', 'options'); 
    $link = get_field('link', 'options'); 
    $cart_message_next_to_globe = get_field('cart_message_next_to_globe', 'options'); 
    


    
    

  ?>

  <div class="loader-js-add-to-cart">

  </div>

  <body <?php body_class(); ?> id="<?php if(get_the_title() == "Unwind"){ echo "page-wrap--dark"; } ?>" >

  <section data-time="<?php echo $timer ?>" class="page-banner" style="background-color: <?php echo $banner_background_colour ?>">
    <div class="page-banner__inner">      
    <?php foreach ($banner_text as $text):?>

      <?php if($text['link_to_shop']){?>
        <p class="js-shop" style="color: <?php echo $banner_text_colour ?>"><?php echo $text['add_a_sentence'] ?></p>
      <?php
      }else{ ?>
        <a href="<?php echo $text['link']['url'] ?>">
        <p style="color: <?php echo $banner_text_colour ?>"><?php echo $text['add_a_sentence'] ?></p>
        </a>
      <?php
      }
      ?>


    <?php endforeach; ?>  
    </div>
  </section>

  <section class="header">
    <div class="header__main">
      <div class="header__main-inner container">
        <div class="header__hamburger">
          <div class="header__hambuger-line"></div>
          <div class="header__hambuger-line"></div>
          <div class="header__hambuger-line"></div>
        </div>
        <div class="header__logo">
          <a href="<?php echo home_url(); ?>">
            <?php _get_template_part('templates/components/_logo'); ?>
          </a>        
        </div>     
        <div class="header__main-nav">
          <ul>
           <a href="<?php echo home_url(); ?>/my-account"><li>ACCOUNT</li></a> 
           <li class="js-open-cart">CART [<?php echo $cartQty ?>] </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="animated-border js-visibility"></div>
    <div class="header__nav active"> 
      
      <?php
        wp_nav_menu( array(
          'theme_location' => 'header-menu'
        ) )
        ?>
    </div>
    <div class="header__mobile">

      <div class="header__mobile-top">
      <a href="<?php echo home_url(); ?>">
        <?php _get_template_part('templates/components/_logo'); ?>
        </a>
        <div class="header__mobile-top-right">
          <li class="js-open-cart">CART [<?php echo $cartQty ?>]</li>
          <div class="js-close-mobile-menu" style="padding: 20px 0px">
            <div class="header__mobile-close-icon"></div>
          </div>
          
        </div>

      
      </div>


        <?php
          wp_nav_menu( array(
            'theme_location' => 'mobile-header-above-divider'
          ) )
        ?>



      <?php
          wp_nav_menu( array(
            'theme_location' => 'mobile-header-below-divider'
          ) )
        ?>
    </div>
    <div class="animated-border animated-border--desktop-only js-visibility reveal-del-1"></div>
  </section>

  <section class="shop-fly page-wrap--dark">
    <div class="shop-fly__inner">
      <div class="shop-fly__top">
        <h2 class="js-shop">SHOP</h2>
        <div class="shop-fly__close">
          <div class="shop-fly__close-icon"></div>
        </div>
      </div>
      
      <div class="shop-fly__body">        
        <div class="shop-fly__singles">
          <div class="shop-fly__singles-item">
            <?php _get_template_part('templates/components/_resp-img', ['field' => $level_up['image'], 'class' => 'full-width-image__image', 'sizes' => '(max-width: 1923px) 100vw, 950px']); ?>
            <div class="shop-fly__singles-item-a">
             <a href="<?php echo $level_up['button']['url']?>" class="text-link">MORE INFO</a>
            </div>
            <div class="shop-fly__singles-detals">
              <div class="shop-fly__singles-detals-top">
                <h4><?php echo $level_up['product_title'] ?></h4>
                <p><?php echo $level_up['product_detail'] ?></p>
              </div>
              <h4><?php echo $level_up['sub_title'] ?></h4>
              <a class="hero__button no-opacity" href="<?php echo $level_up['button']['url']?>">
                <button class="btn"><?php echo $level_up['button']['title']?></button>
              </a>  
            </div>
          </div>
          <div class="shop-fly__singles-item">
            <?php _get_template_part('templates/components/_resp-img', ['field' => $unwind['image_unwind'], 'class' => 'full-width-image__image', 'sizes' => '(max-width: 1923px) 100vw, 950px']); ?>
              <div class="shop-fly__singles-item-a">
              <a href="<?php echo $unwind['button_unwind']['url']?>" class="text-link">MORE INFO</a>
              </div>
            <div class="shop-fly__singles-detals">
              <div class="shop-fly__singles-detals-top">
                <h4><?php echo $unwind['product_title_unwind'] ?></h4>
                <p style="width: 40%"><?php echo $unwind['product_detail_unwind'] ?></p>
              </div>
              <h4><?php echo $unwind['sub_title_unwind'] ?></h4>
              <a class="hero__button no-opacity" href="<?php echo $unwind['button_unwind']['url']?>">
                <button class="btn"><?php echo $unwind['button_unwind']['title']?></button>
              </a>    
            </div>
          </div>
        </div>
        <div class="shop-fly__divider"></div>
        <div class="shop-fly__bottom">  
          <div class="shop-fly__bottom-left">
          <?php _get_template_part('templates/components/_resp-img', ['field' => $the_duo['image'], 'class' => 'full-width-image__image', 'sizes' => '(max-width: 1923px) 100vw, 950px']); ?>
          </div>
          <div class="shop-fly__bottom-right">
            <div class="shop-fly__singles-detals">
              <div class="shop-fly__singles-detals-top">
                <h4><?php echo $the_duo['product_title'] ?></h4>
                <p style="width: 40%"><?php echo $the_duo['product'] ?></p>
              </div>
              <h4><?php echo $the_duo['sub_title'] ?></h4>
              <a class="hero__button no-opacity" href="<?php echo $the_duo['button']['url']?>">
                <button class="btn"><?php echo $the_duo['button']['title']?></button>
              </a>    
              <div class="shop-fly__singles-item-a">
                <a href="<?php echo $the_duo['button']['url']?>" class="text-link">MORE INFO</a>
              </div>
            </div>
          </div>          
        </div>
      </div>
    </div>
  </section>


  <section class="cart-fly">
    <div class="cart-fly__inner">
    <div class="cart-fly__inner">
      <div class="cart-fly__top">
        <div class="cart-fly__close">
          <div class="cart-fly__close-icon"></div>
        </div>
        <h2>YOUR CART</h2>
      </div>
      <div class="cart-fly__body">
      <div class="js-home-url"  data-home="<?php echo home_url() ?>"></div>
        <?php
       
          $items = $woocommerce->cart->get_cart();
          $subscriptionProductInCart = false;

          foreach($items as $item => $values) { 
            $subtotal = get_woocommerce_currency_symbol() . number_format((float)$values['data']->price, 2, '.', '');
            $upgrade = false;
            $product_id = $values['product_id'];
            $key = $values['key'];
            $cart_item_remove_url = wc_get_cart_remove_url( $key );  
            $_product =  wc_get_product( $values['data']->get_id()); 
            $thumbnail = wp_get_attachment_image_src( get_post_thumbnail_id( $_product->get_id(), ["800", "800"] ), 'single-post-thumbnail' );
            ?>

            <?php 
              if ($product_id == 339) {?>
              <?php 
                $duo_product = get_product(215);
                $level_up = get_product(339);
                $levelUpSubs = get_post_meta(339, '_wcsatt_schemes');
                $unwindSubs = get_post_meta(338, '_wcsatt_schemes');
                $unwindProduct = get_product(338);
                $bundlePrice = get_woocommerce_currency_symbol() . number_format($unwindProduct->get_price() + $level_up->get_price(), 2);

                foreach ($levelUpSubs[0] as $key=>$item){
                  $levelUpDiscounted_price = $level_up->get_price() - (number_format( (float)($level_up->get_price() * $item['subscription_discount'] / 100), 3, '.', '')); 
                } 
                foreach ($unwindSubs[0] as $key=>$item){
                  $unwindDiscounted_price = $unwindProduct->get_price() - (number_format( (float)($unwindProduct->get_price() * $item['subscription_discount'] / 100), 3, '.', '')); 
                } 
                $bundleDiscount = get_woocommerce_currency_symbol() . (number_format( round($unwindDiscounted_price + $levelUpDiscounted_price, 2, PHP_ROUND_HALF_UP), 2)); 
                $image = wp_get_attachment_image_src( get_post_thumbnail_id( 215, ["800", "800"] ), 'single-post-thumbnail' );
              ?>
              <div class="cart-fly__item">
                <div class="cart-fly__item-left">
                  <a href="<?php echo home_url() ?>/product/klir-duo">         
                    <img src="<?php echo $image[0] ?>" alt="">
                  </a>
                </div>
                <div class="cart-fly__item-right">
                  <div class="cart-fly__product-title">
                    <h3><?php echo $duo_product->get_name(); ?> </h3>
                    <span><?php //echo get_field( "product_icon",  215 )?></span>                    
                  </div>
                  <h5><?php echo get_field( "product_display_title",  215 )?></h5>                  
                  <?php echo $duo_product->get_short_description()?>
                  <div class="cart-fly__item-price-wrap">
                    <div class="cart-fly__item-price">
                    <?php if($values['wcsatt_data']['active_subscription_scheme']){ ?>
                       <p> <?php echo $bundleDiscount . " Every Month" ?>                     
                    <?php
                    }
                    else
                    { 
                    ?>
                       <p> <?php echo  $bundlePrice; ?>
                       <?php $upgrade = true; ?>
                    <?php
                    }
                    ?>   
                      </p>
                    </div>

                    <p class="cart-fly__qtys" <?php if($values['wcsatt_data']['active_subscription_scheme']) {  echo "data-sub='true'";}?> data-id="<?php echo  $product_id ?>">
                      <span class="js-qty-btn js-qty-btn-minus-duo"  data-url="<?php echo home_url() . '/?add-to-cart=' . $product_id . "&quantity=" ?>" >- &nbsp;</span>[&nbsp;
                      <span class="js-qty-show"><?php echo $values['quantity'] ?></span> &nbsp;] 
                      <span class="js-qty-btn js-qty-btn-plus-duo" data-url="<?php echo home_url() . '/?add-to-cart=' . $product_id . "&quantity=" ?>">+ </span>                    
                    </p>

                    <a class="remove-item level-up-remove" href="<?php echo $cart_item_remove_url; ?>">Remove</a>
                  </div>
                  <?php if($upgrade){ ?>
                     <a
                     href=""
                     class="js-upgrade level-up-upgrade"
                     data-remove="<?php echo $cart_item_remove_url; ?>"
                     data-subscribe="?add-to-cart=<?php echo $product_id ?>&convert_to_sub_<?php echo $product_id ?>=1_month"                     
                     ><?php echo   $message = get_field('message', 215); ?></a> 
                    <?php
                    }
                    ?>
                </div>
              </div>
            <?php
              }            
            ?>
            <div class="cart-fly__item <?php if ($product_id == 338 || $product_id == 339) { echo 'unwind';} ?> <?php echo $product_id; ?>">
              <div class="cart-fly__item-left">
                <a href="<?php echo get_permalink( $product_id ); ?>">
                  <img src="<?php echo $thumbnail[0]; ?>" alt="">
                </a>
              </div>
              <div class="cart-fly__item-right">
                <div class="cart-fly__product-title">   
                  <h3><?php echo $values['data']->name ?> </h3>
                  <span><?php //echo get_field( "product_icon",  $product_id )?></span>                    
                </div>
                <h5><?php echo get_field( "product_display_title",  $product_id )?></h5>                  
                <?php echo $values['data']->short_description ?>  
                <div class="cart-fly__item-price-wrap">
                  <div class="cart-fly__item-price">
                    <p> <?php echo $subtotal; ?>
                    <?php if($values['wcsatt_data']['active_subscription_scheme']){
                      echo " Every Month";
                      $subscriptionProductInCart = true;
                      }else{ 
                        $upgrade = true;
                
                      }
                      ?>
                    </p>
                  </div>    
                  
                    <p class="cart-fly__qtys" <?php if($values['wcsatt_data']['active_subscription_scheme']) {  echo "data-sub='true'";}?> data-id="<?php echo  $product_id ?>">
                      <span class="js-qty-btn js-qty-btn-minus" data-url="<?php echo home_url() . '/?add-to-cart=' . $product_id . "&quantity=" ?>" >- &nbsp;</span>[&nbsp;
                      <span class="js-qty-show"><?php echo $values['quantity'] ?></span> &nbsp;] 
                      <span class="js-qty-btn js-qty-btn-plus" data-url="<?php echo home_url() . '/?add-to-cart=' . $product_id . "&quantity=" ?>">+ </span>                    
                    </p>
                  <a class="remove-item <?php if ($product_id == 338) { echo 'js-unwind-remove';} ?>" href="<?php echo $cart_item_remove_url; ?>">Remove</a>
                </div>  
                <?php if($upgrade){ ?>
                    <a
                    href=""
                    class="js-upgrade <?php if ($product_id == 338) { echo 'js-unwind-upgrade';} ?>"
                    data-remove="<?php echo $cart_item_remove_url; ?>"
                    data-subscribe="?add-to-cart=<?php echo $product_id ?>&convert_to_sub_<?php echo $product_id ?>=1_month"                     
                    ><?php echo   $message = get_field('message'); ?></a> 
                  <?php
                  }
                  ?>  
              </div>
            </div>     
          <?php
            } 
          ?>
          <div class="cart-fly__footer">
          <?php 
              $subTotalRaw = WC()->cart->subtotal;
              $subtotal = get_woocommerce_currency_symbol() . number_format(WC()->cart->subtotal, 2);
          ?>
          <?php 
          if ($subTotalRaw > 0) { ?>
            <div class="cart-fly__subtotal">
              <h3>Subtotal</h3>
              <h3><?php echo $subtotal ?></h3>
            </div>     
            <a href="<?php echo home_url(); ?>/checkout">
            <button class="btn" >

            <?php if( $subscriptionProductInCart == true){ 
              echo "SUBSCRIBE";
            }else{
              echo "CHECKOUT";
            }
            ?>
            
            </button>
            </a>
          <?php         
          }else{ ?>    
              <button class="btn js-close-cart" >CONTINUE SHOPPING</button>  
          <?php
          }
          ?>



          <div class="cart-fly__subscription-info">
            <div class="cart-fly__subscription-info-left">
            <svg xmlns="http://www.w3.org/2000/svg" width="59.188" height="59.255" viewBox="0 0 59.188 59.255">
              <g id="Group_1311" data-name="Group 1311" transform="translate(-259.5 -2140.443)">
                <g id="Group_1310" data-name="Group 1310" transform="translate(260 2140.943)">
                  <circle id="Ellipse_57" data-name="Ellipse 57" cx="29.094" cy="29.094" r="29.094" transform="translate(0 0)" fill="none" stroke="#00205c" stroke-miterlimit="10" stroke-width="1"/>
                  <path id="Path_1870" data-name="Path 1870" d="M946.891,525.354s-18.173,10.7-18.173,29.364A31.116,31.116,0,0,0,946.4,583.524" transform="translate(-917.899 -525.231)" fill="none" stroke="#00205c" stroke-miterlimit="10" stroke-width="1"/>
                  <path id="Path_1871" data-name="Path 1871" d="M934.912,525.334s18.481,10.632,18.481,29.3a31.116,31.116,0,0,1-17.678,28.806" transform="translate(-905.609 -525.271)" fill="none" stroke="#00205c" stroke-miterlimit="10" stroke-width="1"/>
                  <line id="Line_106" data-name="Line 106" x2="57.985" transform="translate(0.185 29.734)" fill="none" stroke="#00205c" stroke-miterlimit="10" stroke-width="1"/>
                  <path id="Path_1872" data-name="Path 1872" d="M926,530.927h52.669" transform="translate(-923.284 -514.174)" fill="none" stroke="#00205c" stroke-miterlimit="10" stroke-width="1"/>
                  <line id="Line_107" data-name="Line 107" x2="51.494" transform="translate(3.524 42.84)" fill="none" stroke="#00205c" stroke-miterlimit="10" stroke-width="1"/>
                  <line id="Line_108" data-name="Line 108" y2="57.738" transform="translate(29.24 0.495)" fill="none" stroke="#00205c" stroke-miterlimit="10" stroke-width="1"/>
                </g>
              </g>
            </svg>
            </div>
            <div class="cart-fly__subscription-info-right">
             <p><?php echo $cart_message_next_to_globe ?></p> 
            </div>
          </div>
              




        </div>  
        

      </div>
    </div>
  </section>


  <div class="page-wrap <?php if(get_the_title() == "Unwind"){ echo "page-wrap--dark"; } ?> ">



<!--[if IE]>
<p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="https://browsehappy.com/">upgrade
  your browser</a> to improve your experience and security.</p>
<![endif]-->