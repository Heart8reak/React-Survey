import React from 'react'


import {
  Survey,
} from './survey'


const App = props => {
  
  return <div className='col-6 mx-auto text-center'>
    <h1>React Survey Application 2019</h1>

    <Survey surveyId={1}/>
  </div>
}


export default App;