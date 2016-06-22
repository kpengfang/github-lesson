import React, { Component } from 'react';
import NoteList from './NoteList';
export default class Notes extends Component {
    render(){
        return (
            <div>
                <p>评论</p>
                <p><input type="text" className="form-control" ref="note"/>
                    <button className="btn btn-primary" onClick={()=>{this.props.handleClick(this.refs.note.value)}}>发表</button></p>
                <NoteList notes={this.props.notes} />
            </div>
        )
    }
}