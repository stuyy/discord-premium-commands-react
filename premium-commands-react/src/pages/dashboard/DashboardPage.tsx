import { useContext } from 'react';
import { PaymentForm } from '../../components/PaymentForm';
import { UserContext } from '../../utils/contexts/UserContext';

export const DashboardPage = () => {
  const { user } = useContext(UserContext);
  return (
    <div>
      Dashboard
      {user?.email}
      <div style={{ margin: '20px' }}>
        {user?.premium ? (
          <div>You have successfully paid for premium commands</div>
        ) : (
          <PaymentForm />
        )}
      </div>
    </div>
  );
};
