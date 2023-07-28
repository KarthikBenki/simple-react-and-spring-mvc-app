import './App.css';
import ErrorPage from './ErrorPage';
import MyComponent from './MyComponent';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      {/* <MyComponent/> */}
      <Router>
        <Switch>
          <Route exact path="/" component={MyComponent}/>
          <Route exact path="/wkst" component={MyComponent}/>
          <Route exact path="*" component={ErrorPage}/>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
