<?php
/*
Template Name: FAQs/Contact
*/
get_header();

  $contact = get_field('contact');
  $accordion_header = get_field('accordion_header');
  $menu_item_name_for_accordian = get_field('menu_item_name_for_accordian');
  $include_contact_form = get_field('include_contact_form');  

?>

<?php if($include_contact_form){?>
  <div class="faqs-header">  
    <div class="faqs-header__inner container">
      <p class="js-faq-link"><?php echo $menu_item_name_for_accordian ?></p>
      <p class="js-contact-link">CONTACT</p>
    </div>
  </div>
<?php
}
?>





  <section class="faqs js-visibility reveal-slide">
    <div class="faqs__inner container">
    <h1><?php echo $accordion_header ?></h1>
    <?php foreach( get_field( 'faqs' ) as $faq  ) { ?>    
      <h4><?php echo $faq['category'] ?></h4>
      <?php foreach( $faq['category_q_&_a'] as $faqQA  ) { ?>
        <div class="product-extra__accordian">
        <div class="product-extra__accordian-item"> 
          <div class="product-extra__accordian-title">
            <h3><?php echo $faqQA['question'] ?></h3>
            <?php _get_template_part('templates/components/_icon-plus'); ?>
          </div>       
          <div class="product-extra__accordian-hidden"> 
            <p><?php echo $faqQA['answer'] ?></p>
          </div>  
          <div class="animated-border js-visibility reveal-del-1 "></div>  
        </div>
      </div>
      <?php } ?>
    <?php } ?>
    </div>
  </section>


  <?php if($include_contact_form){?>
  <section class="contact">
    <div class="contact__inner container">
      <h2>CONTACT US</h2>
      <P>We’d love to hear from you, get in touch and we will get back to you as soon as possible.</P>

   
      <div class="contact__grid">

        <?php foreach( $contact['contact_options'] as $contactOpts  ) { ?>  
          <div class="contact__grid-item">
            <div class="contact__svg-conatiner">
              <?php echo $contactOpts['svg'] ?>
            </div>
              
            <h4><?php echo $contactOpts['title'] ?></h4>
              <?php foreach( $contactOpts['links'] as $links  ) { ?>             
                <a href="<?php echo  $links['link']['url'] ?>" target="_blank"><?php echo  $links['link']['title'] ?>
              </a> 
              <?php } ?>            
          </div>
         <?php } ?>
      </div>
    </div>
  </section>

  <?php
}
?>




<?php get_footer(); ?>
