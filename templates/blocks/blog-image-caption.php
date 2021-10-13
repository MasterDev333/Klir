<?php


$image = get_field('image');
$caption = get_field('caption');

?>

<div class="blog-image">
  <div class="blog-image__inner">
    <img src="<?php echo $image['url']  ?>" alt="">
    <div class="blog-image__caption">
      <p><?php echo $caption ?></p>
    </div>
  </div>

</div>