import React, { Component } from 'react';
import Introduction from "./Introduction";
import {Content} from "../Objects/Content";
import About from "./About";
import Stack from "./Stack";
import Education from "./Education";
import Projects from './Projects';
import Language from './Language';

class App extends Component {
  render() {
    const {introduction, about, stack, otherStack, photoInfo, projects, languages} = Content;
    return (
        <div>
            <Introduction data={introduction}/>
            <About about={about}/>
            <Stack content={stack} stack2={otherStack} />
            <Education info={photoInfo}/>
            <Projects projects = {projects}/>
            <Language languages={languages}/>
        </div>

    );
  }
}

export default App;
