import { AuthContext } from '/src/contexts/AuthContext';
import { useState } from 'react';
import { useRouter } from 'next/router';

const AuthenticationProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(undefined);
  const router = useRouter();

  const isLogged = () => {
    fetch(`http://localhost:3001/api/current_user`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          setCurrentUser(undefined);
        }
      })
      .then((data) => {
        if (!currentUser) {
          setCurrentUser(data ? data : null);
        }
      });
  };

  isLogged();

  const signInHandler = () => {
    router.push('/users/sign_in');
  };

  const signOutHandler = () => {
    const requestOptions = {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    };
    fetch(`http://localhost:3001/users/sign_out`, requestOptions).then((response) => {
      if (response.ok) {
        setCurrentUser(undefined);
        router.push('/users/sign_in');
      }
    });
  };

  const value = {
    currentUser: currentUser,
    signIn: signInHandler,
    signOut: signOutHandler,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthenticationProvider;
