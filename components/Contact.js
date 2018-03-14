var Contact = React.createClass({
	propTypes: {
		item: React.PropTypes.object.isRequired,
	},

	render: function() {
		return (
			<div className={'contactItem'}>
				<img className={'contactImage'} src={'https://images.pexels.com/photos/35612/people-homeless-male-street.jpg?h=350&auto=compress&cs=tinysrgb'}/>
		
				<p className={'contactLabel'}>
					Imię: {this.props.contact.firstName}
				</p>
				<p className={'contactLabel'}>
					Nazwisko: {this props.contact.lastTime}
				</p>
				<a href={'mailto:' + this.props.item.email}>
				{this.props.item.email}
				</a>
			</div>
		)
	},
});