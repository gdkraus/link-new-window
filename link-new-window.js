jQuery(document).ready(function(){

	// Add the class to all <a> elements with target="_blank"
	jQuery('a[target="_blank"]').addClass('ncsu-a11y-link-new-window');

	// Add the icon to the end of the link text.
	// Be sure to adjust the src to point to the local version of the new window icon.
	jQuery('a[target="_blank"]').each(function(){jQuery(this).html(jQuery(this).html() + '<span><img src="new-window.png" alt="opens in a new window"></span>')});

}