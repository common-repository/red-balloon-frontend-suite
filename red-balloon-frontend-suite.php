<?php
/*
* Plugin Name: Red Balloon Frontend Suite
* Description: Nifty tricks for your front end
* Author: Red Balloon
* Version: 1.0.0
* License: GPL v2 or later
* License URI: https://www.gnu.org/licenses/gpl-2.0.html
* Text Domain: red-balloon

*/

function rb_frontend_suite_enqueue() {
    wp_enqueue_script( 'rb-vertical-equaliser', plugin_dir_url(__FILE__) . 'js/rb-vertical-equaliser.js', array('jquery'), '1.0.0', true);
    wp_enqueue_script( 'rb-autotype', plugin_dir_url(__FILE__) . 'js/rb-autotype.js', array('jquery'), '1.0.0', true);
    wp_enqueue_script( 'rb-dropcap', plugin_dir_url(__FILE__) . 'js/rb-dropcap.js', array('jquery'), '1.0.0', true);
    wp_enqueue_style( 'rb-frontend-suite', plugin_dir_url(__FILE__) . 'css/rb-frontend-suite.css');
}
add_action( 'wp_enqueue_scripts', 'rb_frontend_suite_enqueue');