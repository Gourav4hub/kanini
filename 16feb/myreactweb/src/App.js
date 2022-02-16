import React from "react";

//import {First} from './MyComponent'
//import {Second} from './MyComponent'

//import {First,Second} from './MyComponent'

//import Third from './MyComponent'
import ThirdComponent , {First,Second} from './MyComponent'

class App extends React.Component
{
    render(){
        return <div>
            <h1>App Component</h1>
            <h2>Good Morning</h2>
            <h3>How r u?</h3>
            <hr/>
            <First/>
            <Second/>
            <ThirdComponent/>
        </div>
    }
}

export default App