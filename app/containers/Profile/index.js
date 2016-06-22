import React from 'react';
import { UserProfile, UserRepos, Notes } from '../../components';
export default class Home extends React.Component{
    render(){
        return (
            <div className="row">
                <div className="col-xs-4">
                    基本信息
                    <UserProfile />
                </div>
                <div className="col-xs-4">
                    代码仓库
                    <UserRepos />
                </div>
                <div className="col-xs-4">
                    笔记
                    <Notes />
                </div>
            </div>
        )
    }
}