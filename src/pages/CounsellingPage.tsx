import React from 'react';
import { ProgramPageTemplate } from '../components/ProgramPageTemplate';

interface CounsellingPageProps {
  onBack?: () => void;
  onNavigateHome?: () => void;
  onNavigatePrograms?: () => void;
  onOpenAdmission?: () => void;
  onSelectOtherProgram?: (programId: string) => void;
}

export const CounsellingPage: React.FC<CounsellingPageProps> = (props) => {
  return <ProgramPageTemplate programId="counselling" {...props} />;
};
