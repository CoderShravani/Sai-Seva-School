import React from 'react';
import { ProgramPageTemplate } from '../components/ProgramPageTemplate';

interface TherapeuticSupportPageProps {
  onBack?: () => void;
  onNavigateHome?: () => void;
  onNavigatePrograms?: () => void;
  onOpenAdmission?: () => void;
  onSelectOtherProgram?: (programId: string) => void;
}

export const TherapeuticSupportPage: React.FC<TherapeuticSupportPageProps> = (props) => {
  return <ProgramPageTemplate programId="therapy" {...props} />;
};
