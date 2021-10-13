<?php
/**
 * The template for displaying all single posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package theme-name
 */

 get_header(); ?>

		<?php
 		if ( have_posts() ) :

 			/* Start the Loop */
 			while ( have_posts() ) : the_post(); ?>
			 <div class="page-header">
			 <div class="blog-single container">
			 <div class="blog-single__header">
					 <h1><?php echo the_title() ?></h1> 
					 <h4><?php echo get_the_date(  ) ?></h4>
					 
				 </div>
				 <div class="blog-single__featured-img">
				 <?php echo the_post_thumbnail( 'large' );  ?>
				 </div>



			<?php
 			the_content();


 			endwhile;

 		else :

 			echo "No posts found.";

 		endif; ?>
				 </div>

	</div>

	<div class="" style="background-color: #F4F4F4;">
	<div class="blog-single__pagination container">
			<div class="blog-single__pagination-left">

				<?php $prev_post = get_adjacent_post(false, '', true);
					if(!empty($prev_post)) :
						$link = get_permalink($prev_post->ID);
						$title =  $prev_post->post_title; 
						$excerpt =  $prev_post->post_excerpt; ?>
					<a href="<?php echo $link ?>">
					<div class="blog-single__pagination-inner">
						<h3 class="header-wide-med">OLDER</h3>
						<p class="body-p"><?php echo $title ?></h1>
					</div>
					</a>
				<?php endif?>
			</div>
			<div class="blog-single__pagination-right">
			<?php $next_post = get_adjacent_post(false, '', false);
				if(!empty($next_post)) :
					$link = get_permalink($next_post->ID);
					$title =  $next_post->post_title; 
					$excerpt =  $next_post->post_excerpt; ?>
					<a href="<?php echo $link ?>">
					<div class="blog-single__pagination-inner">
						<h3 class="header-wide-med">NEWER</h3>
						<p class="body-p"><?php echo $title ?></h1>
					</div>
					</a>
      	<?php endif?>
			</div>
		</div>
	</div>





 <?php get_footer(); ?>
