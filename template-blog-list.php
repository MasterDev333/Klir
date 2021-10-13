<?php
/*
Template Name: Blog List
*/
get_header();



?>


<div class="blog-list__menu">
  <ul>  
    <li data-category="All" class="active">All</li>
        <?php
      $categories = get_categories();
      foreach($categories as $category) { ?>
        <li data-category="<?php echo $category->name ?>"><?php echo $category->name ?> </li>
      <?php
        }
      ?>
  </ul>
</div>



<?php
    $args = array(
        'post_type' => 'post',
        'posts_per_page' => -1
    );

    $post_query = new WP_Query($args);

  if($post_query->have_posts() ) { ?>
    <section class="blog-list container js-visibility reveal-slide"> 
      <div class="blog-list__inner" id="blog-list__inner">
    
    <?php
      while($post_query->have_posts() ) {
        $post_query->the_post();
        $postId = get_the_id();
        $category = get_the_category( )[0]->name;
        $Postcategories = get_the_category($postId);


        ?>
        <div class="grid-sizer"></div>
        <div class="blog-list__item " data-category="        
        <?php 
        foreach($Postcategories as $Postcategory) { ?>
          <?php echo $Postcategory->name ?> |
        <?php
          }
        ?>       
        
        ">        

          <a href="<?php echo the_permalink() ?>" class="text-link">
            <div class="blog-list__item-img-wrap">
              <?php echo the_post_thumbnail( 'medium' );  ?>
            </div>
          </a>   

          <h2 class="header-compressed-med"><?php the_title(); ?></h2>
          <h4><?php echo get_the_date(  ) ?></h4>
          <?php the_excerpt(); ?>    
          <a href="<?php echo the_permalink() ?>" class="text-link">SEE MORE</a>        
        </div> 
      <?php
      } ?>
      </div>
    </section>
    <?php
  }
?>







<?php get_footer(); ?>
