import React, { Component } from 'react';
import NoteList from './NoteList';
export default class Notes extends Component {
    render(){
        return (
            <div>
                <p>评论</p>
                <NoteList notes={this.props.notes} />
            </div>
        )
    }
}