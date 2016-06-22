import React from 'react';
import { UserProfile, UserRepos, Notes } from '../../components';
import Wilddog from 'wilddog';
import WildReactMixin from 'wildreact';
import { mixin } from 'core-decorators';

@mixin(WildReactMixin)
export default class Profile extends React.Component{
    state = {
        notes: ['1', '2', '3'],
        bio: {
            name: 'zhufengpeixun'
        },
        repos: ['a', 'b', 'c']
    }

    componentDidMount(){
        var ref = new Wilddog("https://taker.wilddogio.com/notes");
        this.bindAsArray(ref, "notes");
    }

    componentWillUnMount(){
        this.unbind('notes');
    }

    render(){
        return (
            <div className="row">
                <div className="col-xs-4">
                    基本信息
                    <UserProfile bio={this.state.bio}/>
                </div>
                <div className="col-xs-4">
                    代码仓库
                    <UserRepos repos={this.state.repos}/>
                </div>
                <div className="col-xs-4">
                    笔记
                    <Notes notes={this.state.notes}/>
                </div>
            </div>
        )
    }
}