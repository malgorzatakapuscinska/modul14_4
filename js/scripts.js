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

var Movie = React.createClass({
	propTypes: {
		movie: React.PropTypes.object.isRequired,
	},
	render: function(){
		return (
				React.createElement('div', {key: this.props.movie.id, className: 'card'},	
					React.createElement(CardLeft, {image: this.props.movie.imgSrc}),
					React.createElement(CardRight, {}, )
				)
		)
	}
});
		
var CardLeft = React.createClass({
	propTypes: {
		imgSrc: React.propTypes.string.isRequired,
	},
	render: function(){
		return (
			React.createElement('div', {className: 'card_left'},
				React.createElement('img', {src: this.props.movie.imgSrc})
			)
		)
	}
});


var CardRight = React.createClass({
	propTypes: {
		movie: React.propTypes.object.isRequired,
	},
	render: function(){
		return (
				React.createElement('div', {className: 'card_right'},
					React.createElement(MovieTitle, {}, this.props.movie.title),
					React.createElement(MovieDetails, {}, this.props.movie),
					React.createElement(MovieDescription, {}, this.props.movie.desc),
					React.createElement(MovieButton, {}, this.props.movie.video),
				)
		)
	}
});

// TITLE

var MovieTitle = React.createClass({
	propTypes: {
		title: React.propTypes.string.isRequired, 
	},
	render: function() {
		return (React.createElement('h2', {}, this.props.title)
		)
	}
});

// DETAILS

var MovieDetails = React.createClass({
	propTypes: {
		movie: React.propTypes.object.isRequired,
	},
	render: function(){
		return Reaact.createElement('ul', {}, 
				React.createElement('li', {}, this.props.movie.prodDate),
				React.createElement('li', {}, this.props.movie.length),
				React.createElement('li', {}, this.props.movie.kindOf)	
		)
	}
});

// DESCRIPTION

var MovieDescription = React.createClass({
	propTypes: {
		desc: Reaact.propTypes.string.isRequired,
	},
	render: function(){
		return (
			React.createElement('div', {className: 'card_right_review'},
					React.createElement('p', {}, this.props.movie.desc)
			)
		)
	}
});

// BUTTON

var MovieButton = React.createClass({
	propTypes: {
		video: React.propTypes.string.idRequired,
	},
	render: function(){
		React.createElement('div', {className: 'card_right_button'},
				React.createElement('a', {href: his.props.movie.video, target: '_blank'}, 'Watch triler' )
		)
	}
});

var element = React.createElement('section', {},
		React.createElement('div', {className: 'container'},
		React.createElement('h1', {}, 'My favorite Films:'), 
		card
	)
);
		
var Card = movies.map(function(movie) {
        return React.createElement(Movie, {key: movie.id, movie: movie})

});

ReactDOM.render(element, document.getElementById('app'));
