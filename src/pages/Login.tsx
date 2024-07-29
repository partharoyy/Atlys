import LoginForm from '../components/LoginForm';

function Login() {
  return (
    <div className='flex items-center justify-center min-h-screen'>
      <LoginForm onRegisterClick={() => {}} closeModal={() => {}} />
    </div>
  );
}

export default Login;
