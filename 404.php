<?php
/**
 * The template for displaying 404 pages (not found)
 *
 * @link https://codex.wordpress.org/Creating_an_Error_404_Page
 *
 * @package theme-name
 */

get_header(); ?>

<div class="" style="display: flex; flex-direction: column; justify-content: center; align-items: center; min-height: 75vh">
  <h1>404 PAGE NOT FOUND</h1>
  <p style="padding: 20px 0px">Sorry, something went wrong!</p>
  <a  href="<?php echo home_url(); ?>">Go Back</a>

</div>


<?php get_footer(); ?>
