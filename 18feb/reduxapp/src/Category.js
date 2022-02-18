import React from 'react'
import WebService from './services/WebService';
import * as urls from './services/WebUrls'

export default class Category extends React.Component
{
    constructor()
    {
        super()
        this.state = {
            categories : []
        }
    }

    loadData = ()=>
    {

    WebService.getRequest(urls.GET_CATEGORIES)
    .then(response=>response.json())
    .then(data=>{
        console.log(data)
        this.setState({categories:data})
    })
    .catch(err=>{

    });

    }

    componentDidMount(){
        this.loadData()
    }

    save = (event)=>{
        var cate_name = this.catebox.value
        WebService.postRequest(urls.SAVE_CATEGORY,{cate_name})
        .then(response=>response.json())
        .then(data=>{
           if(data.status)
           {
            alert('Category Saved')
            this.setState({categories:[...this.state.categories,data.category]})
        }else
              alert('Category Not Saved')
         })
        .catch(err=>{
    
        });
        event.preventDefault()
    }
    render(){
        return <div>
            <h2>Category Component</h2>
            <form onSubmit={this.save}>
            <input type="text" ref={c=>this.catebox=c} placeholder='Category NAme' required/>
                &nbsp;&nbsp; 
                <button type='submit'>Save</button>
            </form>
            <hr/>
            {this.state.categories.map(cate=>{
                return <div>
                        <b>{cate.cate_name}</b>
                    </div>
            })}
        </div>
    }
}

/*
    Promise : it is an object, 3 state
        Pending
        Resolved  >>> .then()
                                >>>> Pending
        Rejected  >>> .catch()

        function process()
        {
            const promiseObject = new Promise((resolve,reject)=>
            {
                *******
                *******
                *******
                if(success)
                    resolve(data)
                else
                    reject(data)    
            });
            return promiseObject;
        }

        process().then(data=>{

        }).catch(data=>
            {

            });

*/