function Login() {
  const handleGoogleSignIn = () => {
    // Google sign-in logic will go here
    console.log('Sign in with Google clicked');
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Welcome</h2>
        <button onClick={handleGoogleSignIn} className="google-signin-btn">
          Sign in with Google
        </button>
      </div>
    </div>
  );
}

export default Login;