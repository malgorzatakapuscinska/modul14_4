var movies = [
	{
		id: 1,
		title: 'Doctor Strange',
		prodDate: '2016',
		length: '115 min',
		kindOf: 'Phantasy, Adventure',
		desc: 'Powerfull sorecer MD Stephen Strange fights with darkness powers to save the world. American superhero film based on the Marvel Comics character of the same name, produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures.',
		imgSrc: 'images/1.jpg',
		video: 'https://youtu.be/HSzx-zryEgM'
	},
	{
		id: 2,
		title: 'Casino Royale',
		prodDate: '2006',
		length: '144 min',
		kindOf: 'Chase film',
		desc: 'The young James Bond gains his licence to kill and status as a 00 agent by assassinating the traitorous MI6 section chief Dryden at the British Embassy in Prague, as well as his terrorist contact, Fisher, in a bathroom in Lahore, Pakistan.',
		imgSrc: 'images/2.jpg',
		video: 'https://youtu.be/36mnx8dBbGE'
	},
	{
		id: 3,
		title: 'Ghost Rider',
		prodDate: '2007',
		length: '144 min',
		kindOf: 'Phantasy, Action',
		desc: 'The first supernatural Ghost Rider is stunt motorcyclist Johnny Blaze, who, in order to save the life of his father, agreed to give his soul to "Satan" (later revealed to be an arch-demon named Mephisto). At night and when around evil, Blaze finds his flesh consumed by hellfire, causing his head to become a flaming skull. He rides a fiery motorcycle and wields blasts of hellfire from his body, usually from his skeletal hands.',
		imgSrc: 'images/3.jpg',
		video: 'https://youtu.be/8M0lLJfNPds'
	}
	
];

var card = movies.map(function(movie){
	return React.createElement('div', {className: 'card'},
			
				// card-left
			
				React.createElement('div', {className: 'card_left'},
					
					// image
					
					React.createElement('img', {src: movie.imgSrc})
				),
				
				// card-right
				
				React.createElement('div', {className: 'card_right'},
					
					// title
						
					React.createElement('h2', {}, movie.title),
					
					// details
					
					React.createElement('div', {className: 'card_right_details'},
			
						React.createElement('ul',{},
							React.createElement('li', {}, movie.prodDate),
							React.createElement('li', {}, movie.length),
							React.createElement('li', {}, movie.kindOf)
						)
					
					),
					
					// description
					
					React.createElement('div', {className: 'card_right_review'},
						React.createElement('p', {}, movie.desc)
					),
					
					// buton 'Watch triler'
					
					React.createElement('div', {className: 'card_right_button'},
							React.createElement('a', {href: movie.video, target: '_blank'}, 'Watch triler' )
						)
				)
			)
});

/*var moviesElements = movies.map(function(movie){
	return 	React.createElement('li', {key: movie.id},
			React.createElement('h2', {}, movie.title),
			React.createElement('p', {}, movie.desc),
			React.createElement('img', {src: movie.imgSrc})
		);

});*/


var element = React.createElement('section', {},
		React.createElement('div', {className: 'container'},
		React.createElement('h1', {}, 'My favorite Films:'), 
		card
	)
);




ReactDOM.render(element, document.getElementById('app'));