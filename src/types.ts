export interface CourseItem {
  id: number;
  numberUrdu: string;
  title: string;
  urduSubheading?: string;
  description: string;
  iconName: string;
}

export interface TeacherItem {
  id: number;
  urduName?: string;
  englishName: string;
  designation: string;
  description: string;
  initials: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  urduTitle: string;
  category: string;
  placeholderText: string;
  customImage?: string;
}
