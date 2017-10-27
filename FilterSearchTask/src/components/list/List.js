import React, { Component } from 'react';
import ListItem from './ListItem';

export default class List extends Component {
	renderList() {
		const {clients, onSelect} = this.props;
		return clients.map((client) => {
			return (<ListItem 
				key={client.general.firstName} 
				onSelect={onSelect}
				image={client.general.avatar} 
				firstName={client.general.firstName} 
				lastName={client.general.lastName}
				company={client.job.company}
			/>);
		});
	}

	render() {
		return (
			<div className="list">
				{
					this.renderList()
				}
			</div>
		)
	}
}
