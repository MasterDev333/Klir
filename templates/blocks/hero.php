<?php
  $image = get_field('image');
  $title_bold = get_field('title_bold');
  $title_light = get_field('title_light');
  $copy = get_field('copy');
  $buttonLink = get_field('button');
  $dark_mode = get_field('dark_mode');
  
?>

<section class="hero <?php if($dark_mode){echo "hero--dark";}; ?>" style="margin-bottom: -3px">

  <div class="hero__inner container container--small js-visibility reveal-slide">
    <div class="hero__left">
      <h1><?php echo $title_bold ?></h1>
      <h2><?php echo $title_light ?></h2>
      <p class="body-text"><?php echo $copy ?></p>
      <?php 
        if ($buttonLink) { ?>
          <a class="hero__button no-opacity" href="<?php echo $buttonLink['url']?>"
          target="<?php echo $buttonLink['target'] ?>"
          >
          <button class="btn btn--primary"><?php echo $buttonLink['title']?></button>
           </a>   
          <?php
        }
      ?>
     
    </div>
    <div class="hero__right ">
      <img class="" src="<?php  echo $image['url'] ?>" alt="">

    </div>
  </div>

</section>