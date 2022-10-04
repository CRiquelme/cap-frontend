import { useContext } from 'react';

import { AuthContext } from 'contexts/AuthContext';

const useSignIn = () => {
  const context = useContext(AuthContext);

  return context?.signIn;
};

export default useSignIn;
