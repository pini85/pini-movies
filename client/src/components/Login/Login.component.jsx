import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUser } from '../../redux/slices/user.slice.ts';
import useGoogleLogin from 'hooks/useGoogleLogin';
import Button from 'components/Button/Button';
const Login = () => {
  let url =
    process.env.NODE_ENV === 'production'
      ? 'https://www.my-cheap-ass-server.link/api/auth/google/login'
      : 'http://localhost:5000/api/auth/google/login';

  const { handleGoogle, error } = useGoogleLogin(url);

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const handleLogOut = () => {
    localStorage.removeItem('token');
    dispatch(setUser(null));
  };

  useEffect(() => {
    if (user) return;
    /* global google */
    if (window.google) {
      google.accounts.id.initialize({
        client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
        callback: handleGoogle,
      });

      google.accounts.id.renderButton(document.getElementById('signUpDiv'), {
        type: 'standard',
        theme: 'outline',
        size: 'large',
        text: 'signin_with',
        shape: 'pill',
        locale: 'en',
      });
    }
  }, [user]);

  return (
    <>
      <h1>{error}</h1>
      {!user && <div id="signUpDiv" data-text="signup_with"></div>}
      {user && <Button title="logout" handleClick={handleLogOut} />}
    </>
  );
};

export default Login;
