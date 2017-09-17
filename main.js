/*

possible url's to use:

	http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&_jsonp=mycallback
		or
	http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1

sample output (respectively):

	mycallback([{
		"ID":1749,
		"title":"Mother Teresa",
		"content":"<p>We ourselves feel that what we are doing is just a drop in the ocean.<\/p>\n",
		"link":"https:\/\/quotesondesign.com\/mother-teresa\/"
	])

		or

	[{
		"ID":286,
		"title":"Robynne Raye",
		"content":"<p>For me, design is like choosing what I&#8217;m going to wear for the day &#8211; only much more complicated and not really the same at all.  <\/p>\n",
		"link":"https:\/\/quotesondesign.com\/robynne-raye\/",
		"custom_meta":{"Source":"<a href=\"http:\/\/www.amazon.com\/gp\/product\/159253127X?ie=UTF8&tag=css-tricks-20&linkCode=as2&camp=1789&creative=390957&creativeASIN=159253127X\">book<\/a>"}
	}]

sample jQuery:

	$('#get-another-quote-button').on('click', function(e) {
	    e.preventDefault();
	    $.ajax( {
	      url: '/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
	      success: function(data) {
	        var post = data.shift(); // The data is an array of posts. Grab the first one.
	        $('#quote-title').text(post.title);
	        $('#quote-content').html(post.content);

	        // If the Source is available, use it. Otherwise hide it.
	        if (typeof post.custom_meta !== 'undefined' && typeof post.custom_meta.Source !== 'undefined') {
	          $('#quote-source').html('Source:' + post.custom_meta.Source);
	        } else {
	          $('#quote-source').text('');
	        }
	      },
	      cache: false
	    });
	  });
	});

*/

$(document).ready(function() {
	// All custom JavaScript/jQuery go below this line
	$("#getNewQuoteButton").click(function() {
		$("#quoteText").html("Hello World!");
	});
	// All custom JavaScript/jQuery go above this line
});