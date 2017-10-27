import React, { Component } from 'react';

export default class ListItem extends Component {
    render() {
        const {image, firstName, lastName, company, onSelect} = this.props;
        return (
            <div className="list-item card-level-1 hover" onClick={onSelect} data-id={firstName.toLowerCase()}>
                <img src={image} />
                <div className="details">
                    <div className="name">{firstName} {lastName}</div>
                    <div className="job">{company}</div>
                </div>
            </div>
        );
    }
}