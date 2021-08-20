import ActionBar from '../../components/ActionBar'
import SpaceGridMap from '../../components/SpaceGridMap'
import { SnowGroundGridMap } from '../../components/GroundGridMap';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './style.scss'


export default function Main() {
  return(
    <div className="main">
          <Router>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <SpaceGridMap />
            <ActionBar />
          </Route>
          <Route exact path="/planet">
            <SnowGroundGridMap />
            <ActionBar />
          </Route>
        </Switch>
    </Router>
    </div>
  )
}
