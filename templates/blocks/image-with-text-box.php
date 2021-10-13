
<?php
  $layout = get_field('layout');
  $image = get_field('image');
  $background_colour = get_field('background_colour');
  $text_colour = get_field('text_colour');
  $header = get_field('header');
  $svg = get_field('svg');
  $copy = get_field('copy');
  $button = get_field('button');
  $button_as_standard_button = get_field('button_as_standard_button');
  $button_type = get_field('button_type');

  

?>


<section class="image-text-box">
  <div class="image-text-box__inner container js-visibility reveal-slide">
    <div class="image-text-box__image-wrap ">
      <?php _get_template_part('templates/components/_resp-img', ['field' => $image, 'class' =>  $layout, 'sizes' => '(max-width: 1023px) 100vw, 950px']); ?>
    </div>
    <div class="image-text-box__text-wrap">
        <div class="image-text-box__text-inner  <?php echo $layout ?>" style="background-color: <?php echo $background_colour?>; color: <?php echo $text_colour?> ">
          <h2><?php echo $header ?></h2>
          <?php echo $svg ?>
          <p><?php echo $copy ?></p>

          <?php if($button_as_standard_button){ ?>
            <a class="hero__button no-opacity <?php echo $button_type ?>" href="<?php echo $button['url']?>">
          <button class="btn btn--primary"><?php echo $button['title']?></button>
           </a>   
          <?php

          }else{ ?>
            
          <?php if ($button['url']) { ?>
          <a class="text-link" style="color: <?php echo $text_colour?> "href="<?php echo $button['url'] ?>"><?php echo $button['title'] ?></a>
          <?php
          } ?>
          <?php
          }
          ?>





        </div>
    </div>
  </div>
</section>