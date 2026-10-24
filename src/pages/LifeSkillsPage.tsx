import React from 'react';
import { ProgramPageTemplate } from '../components/ProgramPageTemplate';

interface LifeSkillsPageProps {
  onBack?: () => void;
  onNavigateHome?: () => void;
  onNavigatePrograms?: () => void;
  onOpenAdmission?: () => void;
  onSelectOtherProgram?: (programId: string) => void;
}

export const LifeSkillsPage: React.FC<LifeSkillsPageProps> = (props) => {
  return <ProgramPageTemplate programId="lifeskills" {...props} />;
};
