import React, { createContext, useContext, useState } from 'react';

interface FiltersContextType {
  selectedPostalCode: string | null;
  setSelectedPostalCode: React.Dispatch<React.SetStateAction<string | null>>;
  selectedCategory: string | null;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string | null>>;
}

const FiltersContext = createContext<FiltersContextType | undefined>(undefined);

export const useFiltersContext = () => {
  const context = useContext(FiltersContext);
  if (!context) {
    throw new Error('useFiltersContext debe ser utilizado dentro de un FiltersProvider');
  }
  return context;
};

interface FiltersContextProps {
    children: React.ReactNode;
  }

export const FiltersContextProvider: React.FC<FiltersContextProps>  = ({ children }) => {
  const [selectedPostalCode, setSelectedPostalCode] = useState<string | null>('Par');
  const [selectedCategory, setSelectedCategory] = useState<string | null>('');

  return (
    <FiltersContext.Provider value={{ 
      selectedPostalCode,
      setSelectedPostalCode,
      selectedCategory,
      setSelectedCategory
    }}>
      {children}
    </FiltersContext.Provider>
  );
};
