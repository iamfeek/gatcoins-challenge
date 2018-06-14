import React from 'react';
import _ from 'lodash';

function WithFeedData( WrappedComponent, programType ) {
	return class extends React.Component {
		constructor( props ) {
			super( props );
			
			this.state = {
				data: []
			}
		}
		
		async componentDidMount() {
			const url = "https://gist.githubusercontent.com/jkongie/075ead69b9aaeb45581b995fbeef4ad6/raw/2688f82b789bddbab24875f4395a83aca5909d5a/feed.json";
			
			const response = await fetch( url );
			const data = await response.json();
			
			console.log( data.entries );
			
			const filtered = _.filter( data.entries, entry => {
				return entry.programType === programType && entry.releaseYear >= 2010
			} );
			
			const sorted = _.sortBy(_.sortBy(filtered, o => !isNaN(parseInt(o.name)), 'title'))
			
			this.setState({
				data: sorted
			})
		}
		
		render() {
			// ... and renders the wrapped component with the fresh data!
			// Notice that we pass through any additional props
			return <WrappedComponent data={ this.state.data } { ...this.props } />;
		}
	};
}

export default WithFeedData;