import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { DAILY_ROUTINE_DATA } from '../data/schoolData';
import { ResidentialTimetableTimeline } from '../components/ResidentialTimetableTimeline';
import { Breadcrumb } from '../components/Breadcrumb';

interface FacilitiesPageProps {
  onNavigateHome?: () => void;
}

export const FacilitiesPage: React.FC<FacilitiesPageProps> = ({ onNavigateHome }) => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
      {/* Breadcrumb */}
      <Breadcrumb
        currentEn="Residential Life"
        currentMr="निवासी सुविधा"
        onNavigateHome={onNavigateHome}
      />

      {/* 24-Hour Daily Schedule Vertical Timeline (Time vs. Activity with Click-to-Open Photos) */}
      <ResidentialTimetableTimeline routineItems={DAILY_ROUTINE_DATA} />
    </div>
  );
};

