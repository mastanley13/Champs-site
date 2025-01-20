import React, { useEffect, useState } from 'react';

interface ExternalRedirectProps {
  to: string;
}

export function ExternalRedirect({ to }: ExternalRedirectProps) {
  const [isRedirecting, setIsRedirecting] = useState(true);

  useEffect(() => {
    // Small delay to show loading state
    const timer = setTimeout(() => {
      window.location.href = to;
    }, 500);

    return () => clearTimeout(timer);
  }, [to]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-900 mx-auto mb-4"></div>
        <p className="text-gray-600">Redirecting to external site...</p>
      </div>
    </div>
  );
} 