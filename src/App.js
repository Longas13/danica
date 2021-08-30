import "./App.scss";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Movies from "./pages/Movies";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Sidebar />
        <div className="content">
          <Switch>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/movies">
              <Movies />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
