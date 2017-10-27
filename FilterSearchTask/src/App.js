import React, { Component } from 'react';
import List from './components/list/List';
import Details from './components/right-panel/Details';

export default class App extends Component {
	constructor() {
		super();
		this.onSearch = this.onSearch.bind(this);
		this.selectItem = this.selectItem.bind(this);
		this.state = {
			initialList: [],
			filteredList: [],
			selectedItem: null
		};
	}

	componentWillMount() {
		this.getClientsList();
	}

	getClientsList() {
		fetch('http://localhost:8080/clients.json').then(response => 
			response.json()
		).then(response => 
			this.setState({
				initialList: response,
				filteredList: response,
				selectedItem: response[0]
			})
		);
	}

	onSearch(event) {
		const searchParam = event.target.value.toLowerCase();

		const filteredList = this.state.initialList.filter((client) => {
			return (
				client.general.firstName.toLowerCase().includes(searchParam) ||
				client.general.lastName.toLowerCase().includes(searchParam) ||
				client.job.company.toLowerCase().includes(searchParam) ||
				client.job.title.toLowerCase().includes(searchParam) ||
				client.address.country.toLowerCase().includes(searchParam)
			);
		});
		
		this.setState({
			filteredList
		});
	}

	selectItem(e) {
		const selectedId = e.currentTarget.dataset.id;
		const selectedItem = this.state.initialList.find((item) => item.general.firstName.toLowerCase() === selectedId);
		this.setState({
			selectedItem
		});
	}

	render() {
		const {selectedItem} = this.state;
		return (
			<section className="app-container">
				<header />
				<section className="container">
					<div className="list-container card-level-1">
						<input type="search" onChange={this.onSearch} placeholder="Search by name, job, etc ..."/>
						<List clients={this.state.filteredList} onSelect={this.selectItem} />
					</div>
					{
						selectedItem && <Details {...this.state.selectedItem} />
					}					
				</section>
			</section>
		);
	}
}
