import { useEffect } from 'react';

interface ExternalRedirectProps {
  to: string;
}

export function ExternalRedirect({ to }: ExternalRedirectProps) {
  useEffect(() => {
    window.location.href = to;
  }, [to]);

  return null;
} 