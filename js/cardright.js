var CardRight = React.createClass({
	propTypes: {
		movie: React.propTypes.object.isRequired,
	}
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
		return (React.createElement('h2', {}, this.props.title),))
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
			),
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