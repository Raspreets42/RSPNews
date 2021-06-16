import Header from "./MyComponents/Header";
import News from "./MyComponents/News";
import About from "./MyComponents/About";
import Footer from "./MyComponents/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Route exact path="/" render={() => {
          return (
            <>
              <News />
            </>)
        }} >
        </Route>
        <Switch>
          <Route exact path="/About" render={() => {
            return (
              <>
                <About />
              </>)
          }} >
          </Route>
        </Switch>
        <Footer />
      </Router>

    </div>
  );
}

export default App;
