export const LandingPage = () => {
  const redirectToDiscord = () => {
    window.location.href = 'http://localhost:3001/api/auth/login';
  };
  return (
    <div>
      <button onClick={redirectToDiscord}>Login</button>
    </div>
  );
};
