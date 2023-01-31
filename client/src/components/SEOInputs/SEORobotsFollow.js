import React from 'react';
import SEOInput from './SEOInput';


class SEORobotsFollow extends SEOInput {
    render() {
        return (
            <div className="seo-input field">
                <label>{this.props.label}</label>
                <select
                    className="dropdown"
                    name={this.props.name}
                    onChange={this.props.onChange}
                >
                    <option value="" selected={this.props.value === ''}>none</option>
                    <option value="follow" selected={this.props.value === 'follow'}>follow</option>
                    <option value="no-follow" selected={this.props.value === 'no-follow'}>no-follow</option>
                </select>
            </div>
        );
    }
}

export default SEORobotsFollow;
