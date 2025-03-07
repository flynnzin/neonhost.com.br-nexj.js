// components/Intercom.tsx
import React, { useEffect } from 'react';

interface IntercomProps {
  user: {
    id: string;
    name: string;
    email: string;
    createdAt: number; // Unix timestamp
  };
}

const Intercom: React.FC<IntercomProps> = ({ user }) => {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.Intercom) {
      window.Intercom('boot', {
        app_id: 'wo0haiuj', // Substitua com seu app_id do Intercom
        user_id: user.id,
        name: user.name,
        email: user.email,
        created_at: user.createdAt, // Unix timestamp
      });
    }

    return () => {
      if (typeof window !== 'undefined' && window.Intercom) {
        window.Intercom('shutdown');
      }
    };
  }, [user]);

  return null; // Este componente não precisa renderizar nada
};

export default Intercom;
