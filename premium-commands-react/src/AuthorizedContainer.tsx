import { Redirect, Route, Switch } from 'react-router';
import { Navbar } from './components/Navbar';
import { DashboardPage } from './pages/dashboard/DashboardPage';
import { UserContext } from './utils/contexts/UserContext';
import { useFetchUser } from './utils/hooks/useFetchUser';

export const AuthorizedContainer = () => {
  const { loading, error, user } = useFetchUser();

  if (error) return <Redirect to="/" />;
  if (loading) return <div>Loading...</div>;

  return (
    <UserContext.Provider value={{ user }}>
      <Navbar />
      <Switch>
        <Route path="/dashboard" exact component={DashboardPage} />
        <Route
          path="/dashboard/payments"
          exact
          component={() => <div>Payments</div>}
        />
      </Switch>
    </UserContext.Provider>
  );
};
