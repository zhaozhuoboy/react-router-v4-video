import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
export default class Home extends React.Component{
    render(){
        return(
            <Router basename="/app">
            <div className="home">
                <div style={{width:200,float:'left',background:"#828282"}}>
                    <h3>Home</h3>
                    <ul>
                        <li><Link to="/child/one">子组件1</Link></li>
                        <li><Link to="/child/two">ChildComponent2</Link></li>
                        <li><Link to="/child/three">子组件3</Link></li>
                    </ul>
                </div>
                <div style={{float:'left'}}>
                    <Route path="/child/:_name" component={ChildComponent}/>
                </div>
                
            </div>
            </Router>
        )
    }
}

const ChildComponent = ({match}) => (
    <div>{match.params._name}</div>
)