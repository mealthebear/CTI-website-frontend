import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import HowToUse from './pages/HowToUse'
import Contributors from './pages/Contributors'
import Landing from './pages/Landing'
import Projects from './pages/Projects'
import TagGenerator from './pages/TagGenerator'
import { TagGeneratorContextProvider } from "./context/tagGeneratorContext.js"
import { TagGeneratorContextProvider1 } from "./context/tagGeneratorContextProvider1.js"


const App = () => {
  return (
    <>
      <TagGeneratorContextProvider>
        <TagGeneratorContextProvider1>
          <Switch>


            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/adding-projects-to-the-index' component={HowToUse} />

            <Route exact path='/landing' component={Landing} />

            <Route exact path='/taggenerator' component={TagGenerator} />
            <Route exact path='/contributors/:affiliation' component={Contributors} />
            <Route exact path='/projects' component={Projects} />
          </Switch>
        </TagGeneratorContextProvider1>
      </TagGeneratorContextProvider>
    </>
  )
}

export default App
