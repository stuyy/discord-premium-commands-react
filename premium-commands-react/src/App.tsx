import { Route, Switch } from 'react-router';
import { AuthorizedContainer } from './AuthorizedContainer';
import { LandingPage } from './pages/landing/LandingPage';

function App() {
  return (
    <Switch>
      <Route path="/" exact component={LandingPage} />
      <Route path="/services" exact component={() => <div>Services</div>} />
      <Route path="/reviews" exact component={() => <div>Reviews</div>} />
      <AuthorizedContainer />
    </Switch>
  );
}

export default App;
