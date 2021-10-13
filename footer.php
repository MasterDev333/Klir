<?php
/**
 * The template for displaying the footer
 *
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package theme-name
 */

  $form_header = get_field('form_header', 'options'); 
  $form_copy = get_field('form_copy', 'options'); 
  $dark_mode = get_field('dark_mode', 'options'); 


  


?>



  <section class="footer <?php if($dark_mode){echo "footer--dark";}; ?>">
  <div class="animated-border  js-visibility reveal-del-1"></div>
    <div class="footer__inner container">
      <div class="footer__top ">
        <div class="footer__top-column " id="klaviyo-form">
          <h3 class="footer__mobile-h3"><?php  echo $form_header ?></h3>
          <p><?php  echo $form_copy ?></p>
          <div class="footer__sign-up-wrap" >
            <input type="text" id="klaviyo-email" placeholder="Enter your email address">
            <buttonn id="klaviyo-btn" class="btn-oval ">SIGN UP</buttonn>
          </div>
        </div>
        <div class="footer__top-column">  
          <h3>More Info</h3>     
          <?php
          wp_nav_menu( array(
            'theme_location' => 'footer-menu-more-info'
          ) )
          ?>
        </div>
        <div class="footer__top-column">  
          <h3>Follow us</h3>    
          <?php
          wp_nav_menu( array(
            'theme_location' => 'footer-menu-social'
          ) )
          ?>   
          <div class="footer__mobile-ecology">
            <?php _get_template_part('templates/components/_ecology'); ?>
          </div>
          
        </div>
      </div>
      <div class="footer__bottom container">
        <div class="footer__bottom-column">   
          <p>© <?php echo date("Y"); ?> KLIR LTD - all rights reserved</p>   
        </div>
        <div class="footer__bottom-column footer__bottom-column--desktop"> 
          <p>Restoring our planet</p>    
          <a href="https://ecologi.com/klir" target="_blank">
            <?php _get_template_part('templates/components/_ecology'); ?>
          </a> 
        </div>
      </div>
    </div>
  </section>

</div>
  <?php wp_footer(); ?>
  
  
  
  <div
  id="refcandy-mint"
  data-app-id="lfimqpcbwp7h9d5jno6z6uuqv"
  data-fname="John"
  data-lname="Smith"
  data-email="james@klirmind.com"
  data-amount="10.99"
  data-currency="GBP"
  data-timestamp="1628853380"
  data-external-reference-id="93211001"
  data-signature="72e23f9a80655c6eae6a06c714494553"
></div>
<script>(function(e){var t,n,r,i,s,o,u,a,f,l,c,h,p,d,v;z="script";l="refcandy-purchase-js";c="refcandy-mint";p="go.referralcandy.com/purchase/";t="data-app-id";r={email:"a",fname:"b",lname:"c",amount:"d",currency:"e","accepts-marketing":"f",timestamp:"g","referral-code":"h",locale:"i","external-reference-id":"k",signature:"ab"};i=e.getElementsByTagName(z)[0];s=function(e,t){if(t){return""+e+"="+encodeURIComponent(t)}else{return""}};d=function(e){return""+p+h.getAttribute(t)+".js?aa=75&"};if(!e.getElementById(l)){h=e.getElementById(c);if(h){o=e.createElement(z);o.id=l;a=function(){var e;e=[];for(n in r){u=r[n];v=h.getAttribute("data-"+n);e.push(s(u,v))}return e}();o.src="//"+d(h.getAttribute(t))+a.join("&");return i.parentNode.insertBefore(o,i)}}})(document);</script>



  </body>
</html>