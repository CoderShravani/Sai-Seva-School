import React from 'react';
import { ProgramPageTemplate } from '../components/ProgramPageTemplate';

interface CoCurricularPageProps {
  onBack?: () => void;
  onNavigateHome?: () => void;
  onNavigatePrograms?: () => void;
  onOpenAdmission?: () => void;
  onSelectOtherProgram?: (programId: string) => void;
}

export const CoCurricularPage: React.FC<CoCurricularPageProps> = (props) => {
  return <ProgramPageTemplate programId="cocurricular" {...props} />;
};
