<?php
  $header = get_field('header');
  $copy = get_field('copy');
  $logo_one = get_field('logo_one');
  $logo_two = get_field('logo_two');
  $logo_three = get_field('logo_three');
  
?>

<section class="sustainability-logos">
  <div class="sustainability-logos__inner container">
    <h2 class="js-visibility reveal-slide "><?php echo $header ?></h2>
    <p class="js-visibility reveal-slide" ><?php echo $copy ?></p>
    <div class="sustainability-logos__grid ">

      <div class="sustainability-logos__grid-item js-visibility reveal-slide">
      <?php _get_template_part('templates/components/_icon-trees'); ?>
        <h4 class="js-num-trees"><?php echo $logo_one['header'] ?></h4>
        <p><?php echo $logo_one['copy'] ?></p>
      </div>

      <div class="sustainability-logos__grid-item js-visibility reveal-slide reveal-del-1">
      <?php _get_template_part('templates/components/_icon-cloud'); ?>
      <h4 class="js-num-carbon"><?php echo $logo_two['header'] ?></h4>
        <p><?php echo $logo_two['copy'] ?></p>
      </div>

      <div class="sustainability-logos__grid-item js-visibility reveal-slide reveal-del-2">
      <?php _get_template_part('templates/components/_icon-world'); ?>
      <h4 class="js-num-duration"><?php echo $logo_three['header'] ?></h4>
        <p><?php echo $logo_three['copy'] ?></p>
      </div>


    </div>
  </div>

</section>
<div class="animated-border js-visibility"></div>

