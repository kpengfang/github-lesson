import React from 'react';

export default class Home extends React.Component{
    render(){
        return (
            <div className="row">
                <div className="col-xs-4">
                    UserProfile路由参数是 {this.props.params.username}
                </div>
                <div className="col-xs-4">
                    UserRepos
                </div>
                <div className="col-xs-4">
                    Notes
                </div>
            </div>
        )
    }
}