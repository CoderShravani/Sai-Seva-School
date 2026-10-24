import React from 'react';
import { ProgramPageTemplate } from '../components/ProgramPageTemplate';

interface VocationalTrainingPageProps {
  onBack?: () => void;
  onNavigateHome?: () => void;
  onNavigatePrograms?: () => void;
  onOpenAdmission?: () => void;
  onSelectOtherProgram?: (programId: string) => void;
}

export const VocationalTrainingPage: React.FC<VocationalTrainingPageProps> = (props) => {
  return <ProgramPageTemplate programId="vocational" {...props} />;
};
