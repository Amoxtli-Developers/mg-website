'use client';
import React, { createContext, useState, useContext, ReactNode } from 'react';

// Definir la interfaz del contexto
interface PrivacyPolicyContextType {
  isPrivacyPolicyOpen: boolean;
  openPrivacyPolicy: () => void;
  closePrivacyPolicy: () => void;
}

// Crear el contexto
const PrivacyPolicyContext = createContext<PrivacyPolicyContextType | undefined>(undefined);

// Hook personalizado para usar el contexto
export const usePrivacyPolicy = () => {
  const context = useContext(PrivacyPolicyContext);
  if (context === undefined) {
    throw new Error('usePrivacyPolicy debe ser usado dentro de un PrivacyPolicyProvider');
  }
  return context;
};

// Proveedor del contexto
export const PrivacyPolicyProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isPrivacyPolicyOpen, setIsPrivacyPolicyOpen] = useState(false);

  const openPrivacyPolicy = () => setIsPrivacyPolicyOpen(true);
  const closePrivacyPolicy = () => setIsPrivacyPolicyOpen(false);

  // Valor del contexto
  const value = {
    isPrivacyPolicyOpen,
    openPrivacyPolicy,
    closePrivacyPolicy,
  };

  return (
    <PrivacyPolicyContext.Provider value={value}>
      {children}
    </PrivacyPolicyContext.Provider>
  );
};
