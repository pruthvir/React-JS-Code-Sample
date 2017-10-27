import React, { Component } from 'react';

export default class Details extends Component {
	render() {
        const {general, job, contact, address} = this.props;
		return (
            <section className="details-container card-level-1">

                <div className="image-placeholder">
                    <img src={general.avatar} />
                </div>
                <div className="about">
                    <h1>{general.firstName} {general.lastName}</h1>
                    <h2>{job.title}</h2>
                    <h3>{job.company}</h3>                    
                    <div className="information">
                        <h4><span>Email:</span> {contact.email}</h4>
                        <h4><span>Phone:</span> {contact.phone}</h4>
                        <p><span>Address:</span> {address.street}, {address.city}, <br/> {address.zipCode}, {address.country}</p>
                    </div>
                </div>
            </section>
		)
	}
}