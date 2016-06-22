import React from 'react';
import { SearchGithub } from '../../components'
export default class App extends React.Component {
  render() {
      console.log(this.props);
    return (
        <div className="container">
          <nav className="navbar navbar-default" role="navigation">
            <div className="col-xs-7 col-xs-offset-4" style={{padding:'10px'}}>
                <SearchGithub/>
            </div>
          </nav>
          <div className="container">
            {this.props.children}
          </div>
        </div>
    );
  }
}
