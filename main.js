$(document).ready(function() {

	// All custom JavaScript/jQuery go below this line

	// When button clicked, propagate random quote to DOM
	$("#getNewQuoteButton").click(function(){

		// Generate random index
		var i = Math.floor(Math.random() * quoteArray.length);

		// Update DOM with Author and Quote at index of quoteArray
		$("#quoteText").html(quoteArray[i].quote);
		$("#quoteAuthor").html(quoteArray[i].author);

	});
	

	// Array of quotes
	var quoteArray = [
		
		{
		"author":"Christopher Zeeman",
		"quote":"Technical skill is mastery of complexity, while creativity is mastery of simplicity."
		},

		{
		"author":"John C Jay",
		"quote":"If all else fails, working harder than anyone else is the greatest competitive advantage of any career."
		},

		{
		"author":"Sir Alec Issigonis",
		"quote":"A camel is a horse designed by a committee."
		},
		
		{
		"author":"Robert Louey",
		"quote":"The strategy in communications is not to sell the 1/4-inch drill bit, but the 1/4-inch hole."
		},
		
		{
		"author":"Arnie Lund",
		"quote":"Know thy user, and you are not thy user."
		},
		
		{
		"author":"Paola Antonelli",
		"quote":"People think that design is styling. Design is not style. It's not about giving shape to the shell and not giving a damn about the guts. Good design is a renaissance attitude that combines technology, cognitive science, human need, and beauty to produce something that the world didn't know it was missing."
		},
		
		{
		"author":"Georgia O'Keeffe",
		"quote":"I found I could say things with color and shapes that I couldn't say any other way, things I had no words for."
		},
		
		{
		"author":"Ellen Lupton",
		"quote":"It is easier to talk than to listen. Pay attention to your clients, your users, your readers, and your friends. Your design will get better as you listen to other people."
		},
		
		{
		"author":"Jack Kerouac",
		"quote":"Great things are not accomplished by those who yield to trends and fads and popular opinion."
		},
		
		{
		"author":"Gustave Flaubert",
		"quote":"Be regular and orderly in your life like a bourgeois, so that you may be violent and original in your words."
		},
		
		{
		"author":"Shawn Leslie",
		"quote":"Good design means never having to say 'Click Here'."
		},
		
		{
		"author":"H. Ross Perot",
		"quote":"If you see a snake, just kill it. Don't appoint a committee on snakes."
		},
		
		{
		"author":"Yasin Japardi",
		"quote":"There's no shortcut for greatness."
		},
		
		{
		"author":"Dan Brown",
		"quote":"Most clients expect experience design to be a discrete activity, solving all their problems with a single functional specification or a single research study. It must be an ongoing effort, a process of continually learning about users, responding to their behaviors, and evolving the product or service."
		},
		
		{
		"author":"Henry Ford",
		"quote":"Whether you think you can or whether you think you can't, you are right."
		},
		
		{
		"author":"C.A.R. Hoare",
		"quote":"There are two ways of constructing a software design. One way is to make it so simple that there are obviously no deficiencies. And the other way is to make it so complicated that there are no obvious deficiencies."
		},
		
		{
		"author":"Kim Krause",
		"quote":"People always ask, 'What do you think of my site?' I want to say back to them, 'Who cares what I think. Does it meet your site requirements? Has it been tested? Has each requirement been validated? Are your site guidelines being adhered to?'"
		},
		
		{
		"author":"Kevin Rose",
		"quote":"Don't spend too much time planning, release early and often, some things will work, others won't, refine and move forward and above all forget the money, just make sure you love what you're doing."
		},
		
		{
		"author":"Armin Vit",
		"quote":"Never stand still. If you stand still, you get lost, because someone else is always moving."
		},
		
		{
		"author":"Dieter Rams",
		"quote":"Having small touches of colour makes it more colourful than having the whole thing in colour."
		},
		
		{
		"author":"Richard C. Trench",
		"quote":"Language is the amber in which a thousand precious and subtle thoughts have been safely embedded and preserved."
		},

		{
		"author":"Sir Ken Robinson",
		"quote":"If you're not prepared to be wrong, you'll never come up with anything original."
		},
		
		{
		"author":"Jessica Hische",
		"quote":"The work you do while you procrastinate is probably the work you should be doing for the rest of your life."
		},
		
		{
		"author":"Kyle Meyer",
		"quote":"What makes great design great is not a trendy technique, but the logic and conceptual aspect that were figured out in the designer's mind--or more likely, on paper--before a mouse cursor ever opened Photoshop."
		},
		
		{
		"author":"William Morris",
		"quote":"History has remembered the kings and warriors, because they destroyed; art has remembered the people, because they created."
		}

	]


	// All custom JavaScript/jQuery go above this line
});


