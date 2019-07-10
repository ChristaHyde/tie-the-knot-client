import React, { Component } from 'react'
import * as modules from './lib/api/venuesModule'

export default class VenuesComponents extends Component {

    componentDidMount(){
// add a promise that calls the method to get your data all of it 
    
    }
    getCategories(){
        // call the categories you want to receive through modules.categories and feed it the parameter if it needs one 

    }
    render() {
        console.log("******", modules, "*******")
        return (
            <div>
                <p>
                    i am your venues front end
               </p>
               <input placeholder = 'category search'></input>
               <button>search</button>
            </div>
        )
    }
}