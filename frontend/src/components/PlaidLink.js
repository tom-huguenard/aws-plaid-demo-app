import { useEffect } from 'react';
import { usePlaidLink } from 'react-plaid-link';

export default function PlaidLink({ token, onSuccess, onExit }) {
  const { open } = usePlaidLink({
    token,
    onSuccess,
    onExit,
  });

  useEffect(() => {
    if (token) {
      open();
    }
  }, [token, open]);

  return <div />;
}
