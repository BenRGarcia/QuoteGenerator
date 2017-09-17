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

*/