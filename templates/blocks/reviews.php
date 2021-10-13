<section class="reviews-slider">
	<?php if( $heading = get_field( 'heading' ) ): ?>
	<h2 class="reviews__header"><?php echo $heading ?: 'Reviews'; ?></h2>
	<?php endif; ?>
	<div class="reviews" style="">
	  <?php echo do_shortcode("[jgm-featured-carousel title= 'Let customers speak for us' all-reviews-page='#']") ?>
	</div>
	<?php if( $cta = get_field( 'cta' ) ): ?>
	<div class='reviews-slider__link'>
		<a href="<?php echo $cta['url']; ?>" target="<?php echo $cta['target']; ?>">
			<?php echo $cta['title']; ?>
		</a>
	</div>
	<?php endif; ?>
</section>