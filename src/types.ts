export type Language = 'en' | 'mr';

export type TextSize = 'normal' | 'large' | 'larger';

export interface AccessibilitySettings {
  highContrast: boolean;
  textSize: TextSize;
  dyslexicFont: boolean;
  reducedMotion: boolean;
}

export interface SchoolInfo {
  nameEn: string;
  nameMr: string;
  taglineEn: string;
  taglineMr: string;
  establishedYearPlaceholder: string;
  registrationNumberPlaceholder: string;
  addressPlaceholder: string;
  cityDistrictPlaceholder: string;
  state: string;
  pinCodePlaceholder: string;
  phonePlaceholder: string;
  emergencyPhonePlaceholder: string;
  emailPlaceholder: string;
  officeHoursEn: string;
  officeHoursMr: string;
  stats: {
    yearsOfService: string;
    studentsSupported: string;
    staffMembers: string;
    residentialCapacity: string;
  };
  bankDetails: {
    accountHolderPlaceholder: string;
    accountNamePlaceholder: string;
    bankNamePlaceholder: string;
    accountNumberPlaceholder: string;
    ifscPlaceholder: string;
    branchPlaceholder: string;
    upiIdPlaceholder: string;
  };
}

export interface ProgramItem {
  id: string;
  titleEn: string;
  titleMr: string;
  category: string;
  descriptionEn: string;
  descriptionMr: string;
  highlightsEn: string[];
  highlightsMr: string[];
  iconName: string;
  image: string;
}

export interface ActivityItem {
  id: string;
  titleEn: string;
  titleMr: string;
  category: string;
  descriptionEn: string;
  descriptionMr: string;
  highlightsEn: string[];
  highlightsMr: string[];
  iconName: string;
  image: string;
}

export interface FacilityItem {
  id: string;
  titleEn: string;
  titleMr: string;
  descriptionEn: string;
  descriptionMr: string;
  featuresEn: string[];
  featuresMr: string[];
  iconName: string;
  image: string;
  disclaimerNoteEn?: string;
  disclaimerNoteMr?: string;
}

export interface DailyRoutineItem {
  time: string;
  activityEn: string;
  activityMr: string;
  descriptionEn: string;
  descriptionMr: string;
  iconName: string;
  category: string;
  images?: string[];
  imageCaptionsEn?: string[];
  imageCaptionsMr?: string[];
}

export interface TeamMember {
  id: string;
  nameEn: string;
  nameMr: string;
  roleEn: string;
  roleMr: string;
  qualification: string;
  experience: string;
  bioEn: string;
  bioMr: string;
  category: string;
  photo: string;
}

export interface GalleryItem {
  id: string;
  titleEn: string;
  titleMr: string;
  category: string;
  imageUrl: string;
  captionEn: string;
  captionMr: string;
  privacyStatus?: string;
  isVideo?: boolean;
  videoUrl?: string;
}

export interface AchievementItem {
  id: string;
  titleEn: string;
  titleMr: string;
  year: string;
  categoryEn: string;
  categoryMr: string;
  descriptionEn: string;
  descriptionMr: string;
  image?: string;
}

export interface SuccessStoryItem {
  id: string;
  identifierEn: string;
  identifierMr: string;
  domainEn: string;
  domainMr: string;
  growthSummaryEn: string;
  growthSummaryMr: string;
  detailsEn: string;
  detailsMr: string;
  privacyNoticeEn: string;
  privacyNoticeMr: string;
}

export interface TestimonialItem {
  id: string;
  quoteEn: string;
  quoteMr: string;
  authorRelationshipEn: string;
  authorRelationshipMr: string;
  locationEn: string;
  locationMr: string;
  parentNameEn?: string;
  parentNameMr?: string;
  childInfoEn?: string;
  childInfoMr?: string;
  rating?: number;
  batchOrYear?: string;
}

export interface FaqItem {
  id: string;
  category: string;
  questionEn: string;
  questionMr: string;
  answerEn: string;
  answerMr: string;
}

export interface NewsItem {
  id: string;
  titleEn: string;
  titleMr: string;
  date: string;
  category: string;
  summaryEn: string;
  summaryMr: string;
  contentEn: string;
  contentMr: string;
}

export interface AdmissionStep {
  stepNumber: number;
  titleEn: string;
  titleMr: string;
  descriptionEn: string;
  descriptionMr: string;
  detailPointsEn: string[];
  detailPointsMr: string[];
}

export interface RequiredDocument {
  id: string;
  nameEn: string;
  nameMr: string;
  descriptionEn: string;
  descriptionMr: string;
  isMandatory: boolean;
}

export interface DownloadableDoc {
  id: string;
  titleEn: string;
  titleMr: string;
  fileSize: string;
  format: string;
  descriptionEn: string;
  descriptionMr: string;
  downloadUrlPlaceholder: string;
}
