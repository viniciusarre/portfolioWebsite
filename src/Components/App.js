import React, { Component } from 'react';
import Introduction from "./Introduction";
import {Content} from "../Objects/Content";


class App extends Component {
  render() {
    const {intro} = Content;
    return (
        <div>
            <Introduction text={intro}/>
        </div>
    );
  }
}

export default App;
