import { useEffect } from 'react';

import useSignOut from '@hooks/useSignOut';
import useSignIn from '@hooks/useSignIn';
import useCurrentUser from '@hooks/useCurrentUser';

function UnuthGuard({ children }) {
  const signOut = useSignOut();
  const signIn = useSignIn();
  const currentUser = useCurrentUser();

  useEffect(() => {
    if (!currentUser) {
      fetch(`http://localhost:3001/api/current_user`)
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            signOut();
          }
        })
        .then((data) => signIn(data));
    }
  });

  return children;
}

export default UnuthGuard;
