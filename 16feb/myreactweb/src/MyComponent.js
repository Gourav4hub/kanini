import React from 'react'

export class First extends React.Component
{
    constructor()
    {
        super()
        this.state = {
            title : 'ReactJS Training'
        }
    }

    changeTitle = ()=>
    {
       console.log(this.state) 
       //this.state.title = "Good Morning"
       this.setState({title:"Good Morning"})
       console.log(this.state) 
    }

    render(){
        return <div>
            <h2>First Component</h2>
            <b>{this.state.title}</b>
            &nbsp;
            <button onClick={this.changeTitle}>Change</button>
            <ABC data={this.state.title} />
            <hr/>
          
        </div>
    }
}
// Props : 
class ABC extends React.Component
{
    render(){
        return <div>
            <h1>ABC Component</h1>
            <b>{this.props.data}</b>
        </div>
    }
}



export class Second extends React.Component
{
    constructor(){
        super()
        this.state = {
            num : 100
        }
    }

    start = ()=>{
        setInterval(()=>{
            this.setState({num: this.state.num+1})
        },1000);
    }

    render(){
        return <div>
            <h2>Second Component : {this.state.num}</h2>
            <button onClick={this.start}>Start</button>
        </div>
    }
}

export default class Third extends React.Component
{
    constructor(){
        super()
        this.state = {
            values : [56,85,74,44,26,58,98,68,57]
        }
    }
    render(){
        return <div>
            <h2>Third Component</h2>
            {this.state.values.map((num,index)=>
            {
                return <h5 key={index}>
                    {num} : {num%2==0?"Even":"Odd"}
                </h5>
            })}
        </div>
    }
}