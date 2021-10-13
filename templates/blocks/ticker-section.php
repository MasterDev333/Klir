<?php
  $ticker_text = get_field('ticker_text');
  $svg = get_field('svg');
  $copy = get_field('copy');  
  $button = get_field('button');
  $dark = get_field('dark');
  $link_button_to_shop_popup = get_field('link_button_to_shop_popup');


  
  
?>

<section class="ticker-section <?php if($dark){echo 'ticker-section--dark';} ?>">
  <div id="marquee" class="ticker-section__ticker">
    <div class="marquee">
      <div class="track">
       <h2 ><?php echo $ticker_text ?>&nbsp;&bull;&nbsp;<?php echo $ticker_text ?>&nbsp;&bull;&nbsp;<?php echo $ticker_text ?>&nbsp;•&nbsp;</h2>
      </div>
    </div>    
  </div>
  <div class="ticker-section__inner container">
    <?php echo $svg?>


    <div class="body-text ticker-section__copy"><?php echo $copy ?></div>


    <?php if($link_button_to_shop_popup){?> 
    
      <button class="btn js-shop"><?php echo $button['title']?></button>
    
    <?php
  }else{ 
    ?>
      <a class="no-opacity "  href="<?php echo $button['url']?>">
      <button class="btn"><?php echo $button['title']?></button>
    </a>    

    <?php
  }
  ?>



   
  </div>
</section>