import Channel from "./components/Channel";
import Channel1 from "./components/Channel1";
import Channel2 from "./components/Channel2";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import  './Styles/Menu.css';

const Menu = () =>{
  return(

    <Router >
      <div>
            <Link  to="/"><i class="fas fa-home-lg-alt"></i></Link>
      </div>
        <Switch>
			<Route  exact path="/">
              <h1>Welcome to chantastic <i class="fas fa-heart"></i></h1>
                <div className="canal">
                    <img src="https://www.tierragamer.com/wp-content/uploads/2020/03/Goku-Coronavirus.jpg" alt="Channel1" width="50" height="50"/>
                    <Link className="guarro" to="/Channel">Canal</Link> 
                </div>
                <div className="canal2">
                    <img src="https://www.tierragamer.com/wp-content/uploads/2020/03/Goku-Coronavirus.jpg" alt="Channel1" width="50" height="50"/>
                    <Link className="guarro" to="/Channel1">Canal 1</Link> 
                </div>
                <div className="canal">
                    <img src="https://www.tierragamer.com/wp-content/uploads/2020/03/Goku-Coronavirus.jpg" alt="Channel1" width="50" height="50"/>
                    <Link className="guarro" to="/Channel2">Canal 2</Link> 
                </div>
			</Route>
			<Route path="/Channel">
              <Channel/>
			</Route>
             <Route path="/Channel1">
              <Channel1/>
		    </Route>
            <Route path="/Channel2">
              <Channel2/>
		    </Route>
				</Switch>
    </Router>

  )
}
export default Menu;