import React, { createContext, useContext, useState } from 'react';
import { SchoolInfo } from '../types';
import { INITIAL_SCHOOL_INFO } from '../data/schoolData';

interface SchoolDataContextType {
  schoolInfo: SchoolInfo;
  updateSchoolInfo: (updated: Partial<SchoolInfo>) => void;
  resetSchoolInfo: () => void;
}

const SchoolDataContext = createContext<SchoolDataContextType | undefined>(undefined);

export const SchoolDataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [schoolInfo, setSchoolInfo] = useState<SchoolInfo>(() => {
    try {
      const saved = localStorage.getItem('school_info_config');
      if (saved) {
        return { ...INITIAL_SCHOOL_INFO, ...JSON.parse(saved) };
      }
    } catch {
      // fallback
    }
    return INITIAL_SCHOOL_INFO;
  });

  const updateSchoolInfo = (updated: Partial<SchoolInfo>) => {
    setSchoolInfo((prev) => {
      const next = { ...prev, ...updated };
      try {
        localStorage.setItem('school_info_config', JSON.stringify(next));
      } catch {
        // ignore
      }
      return next;
    });
  };

  const resetSchoolInfo = () => {
    setSchoolInfo(INITIAL_SCHOOL_INFO);
    try {
      localStorage.removeItem('school_info_config');
    } catch {
      // ignore
    }
  };

  return (
    <SchoolDataContext.Provider value={{ schoolInfo, updateSchoolInfo, resetSchoolInfo }}>
      {children}
    </SchoolDataContext.Provider>
  );
};

export const useSchoolData = () => {
  const context = useContext(SchoolDataContext);
  if (!context) {
    throw new Error('useSchoolData must be used within a SchoolDataProvider');
  }
  return context;
};
