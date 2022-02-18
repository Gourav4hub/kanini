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
    render(){
        return <div>
            <h2>Category Component</h2>
            <button onClick={this.loadData}>Load Category</button>
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