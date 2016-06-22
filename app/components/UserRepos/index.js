import React, { Component } from 'react';

export default class UserRepos extends Component {
    render(){
        return (
            <div>
                <p>仓库</p>
                <p>repos: {this.props.repos}</p>
            </div>
        )
    }
}