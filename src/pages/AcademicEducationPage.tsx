import React from 'react';
import { ProgramPageTemplate } from '../components/ProgramPageTemplate';

interface AcademicEducationPageProps {
  onBack?: () => void;
  onNavigateHome?: () => void;
  onNavigatePrograms?: () => void;
  onOpenAdmission?: () => void;
  onSelectOtherProgram?: (programId: string) => void;
}

export const AcademicEducationPage: React.FC<AcademicEducationPageProps> = (props) => {
  return <ProgramPageTemplate programId="academic" {...props} />;
};
