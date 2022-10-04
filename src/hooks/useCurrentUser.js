import { useContext } from 'react';

import { AuthContext } from 'contexts/AuthContext';

const useCurrentUser = () => {
  const context = useContext(AuthContext);

  return context?.currentUser;
};

export default useCurrentUser;
