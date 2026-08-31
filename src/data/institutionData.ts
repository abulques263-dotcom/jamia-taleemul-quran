import { CourseItem, TeacherItem, GalleryItem } from '../types';

export const INSTITUTION_DATA = {
  nameUrdu: "جامعہ تعلیم القرآن",
  nameEnglish: "Jamia Taleemul Quran",
  taglineUrdu: "قرآن • دین • اخلاق • تعلیم",
  taglineEnglish: "Qur'anic education, Islamic learning, moral development and essential academic education.",
  establishedYear: 2006,
  founderUrdu: "قاری اشفاق",
  founderEnglish: "Qari Ashfaque",
  founderTitle: "Founder & Mohtamim",
  admissionsStatus: "Admissions Open",
  phone: "98737577701",
  phoneFormatted: "+91 98737 57701",
  whatsapp: "9110027213",
  whatsappFormatted: "+91 91100 27213",
  address: "25 Feet Road, Budh Vihar, Sector 63, Noida, Gali Number 13 & 14, Gautam Buddh Nagar, Uttar Pradesh, India",
  copyright: "© Jamia Taleemul Quran. All Rights Reserved.",
  
  about: {
    headingUrdu: "ہمارے بارے میں",
    subheadingEnglish: "About The Madrasa",
    paragraphs: [
      "Jamia Taleemul Quran was founded in 2006 by Qari Ashfaque with the purpose of spreading the teachings of Islam and Deen and making Islamic knowledge accessible to people in the community.",
      "Since its establishment in 2006, more than 1,000 children have completed Qur'an memorization at the institution and have gone on to serve and continue their journeys at different places.",
      "It is a small community-supported institution that continues its educational work with the support, goodwill and donations of people from the surrounding community.",
      "The institution focuses on providing children with Qur'anic education, Islamic learning, moral upbringing and essential academic education in a simple and positive educational environment."
    ]
  },

  admission: {
    headingUrdu: "داخلہ جاری ہے",
    subheadingEnglish: "Admissions Open",
    statusBadge: "Admissions Open",
    description: "Admissions are currently open at Jamia Taleemul Quran.\n\nParents who wish to provide their children with Qur'anic education, Islamic learning, moral development and essential academic education are welcome to contact the institution for admission information."
  },

  donation: {
    headingUrdu: "تعاون",
    subheadingEnglish: "Community Support & Donations",
    description: "Jamia Taleemul Quran is a small community-supported institution that continues its educational work with the support and donations of people from the surrounding community.\n\nThose who wish to support the institution's educational work may contact the institution directly.",
    buttonText: "Contact for Support"
  },

  contact: {
    headingUrdu: "رابطہ",
    subheadingEnglish: "Contact Information"
  }
};

export const COURSES_DATA: CourseItem[] = [
  {
    id: 1,
    numberUrdu: "۱",
    title: "Qur'an Reading & Correct Pronunciation",
    urduSubheading: "ناظرہ قرآن و تجوید",
    description: "Teaching children to read the Qur'an correctly with proper pronunciation and guidance.",
    iconName: "BookOpen"
  },
  {
    id: 2,
    numberUrdu: "۲",
    title: "Hifz-e-Qur'an",
    urduSubheading: "حفظ القرآن الکریم",
    description: "Structured Qur'an memorization education and guidance for students.",
    iconName: "BookmarkCheck"
  },
  {
    id: 3,
    numberUrdu: "۳",
    title: "Urdu Education",
    urduSubheading: "اردو زبان و ادب",
    description: "Teaching children Urdu reading, writing and understanding.",
    iconName: "PenTool"
  },
  {
    id: 4,
    numberUrdu: "۴",
    title: "Islamic Studies",
    urduSubheading: "دینیات و اسلامی تعلیمات",
    description: "Teaching the basic teachings of Islam and important aspects of Deen in an age-appropriate manner.",
    iconName: "Compass"
  },
  {
    id: 5,
    numberUrdu: "۵",
    title: "Kalimaat",
    urduSubheading: "کلمات طیبات",
    description: "Teaching children the basic Kalimaat and helping them understand their meanings.",
    iconName: "CheckCircle2"
  },
  {
    id: 6,
    numberUrdu: "۶",
    title: "Ahadees",
    urduSubheading: "احادیث مبارکہ",
    description: "Introducing children to selected Ahadees and the lessons they convey.",
    iconName: "Scroll"
  },
  {
    id: 7,
    numberUrdu: "۷",
    title: "Arabic",
    urduSubheading: "عربی زبان",
    description: "Teaching Arabic through Arabic books and foundational learning.",
    iconName: "Languages"
  },
  {
    id: 8,
    numberUrdu: "۸",
    title: "Hindi Education",
    urduSubheading: "ہندی تعلیم (این سی ای آر ٹی)",
    description: "Providing Hindi and basic academic education up to Class 8 through the NCERT curriculum.",
    iconName: "GraduationCap"
  },
  {
    id: 9,
    numberUrdu: "۹",
    title: "English Education",
    urduSubheading: "انگریزی تعلیم",
    description: "Developing children's basic English reading, writing and understanding skills.",
    iconName: "Globe"
  },
  {
    id: 10,
    numberUrdu: "۱۰",
    title: "Basic Computer Education",
    urduSubheading: "بنیادی کمپیوٹر تعلیم",
    description: "Introducing children to basic computer knowledge and essential computer usage.",
    iconName: "Monitor"
  }
];

export const TEACHERS_DATA: TeacherItem[] = [
  {
    id: 1,
    urduName: "قاری اشفاق",
    englishName: "Qari Ashfaque",
    designation: "Mohtamim",
    description: "Qari Ashfaque is the Mohtamim of Jamia Taleemul Quran and oversees the institution's educational and religious activities. He also listens to the students' Qur'an recitation and pays attention to their learning and development.",
    initials: "QA"
  },
  {
    id: 2,
    urduName: "حافظ یزدانی",
    englishName: "Hafiz Yazdani",
    designation: "Arabic & Urdu Teacher",
    description: "Hafiz Yazdani teaches the children through Arabic books and provides them with Arabic learning. He also helps students develop their Urdu knowledge.",
    initials: "HY"
  },
  {
    id: 3,
    englishName: "Abulques",
    designation: "Academic Teacher",
    description: "Abulques is a graduate of the University of Delhi. He is responsible for the children's Hindi and English education and helps strengthen their basic academic understanding, reading and writing skills.",
    initials: "AB"
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "building",
    title: "Madrasa Building",
    urduTitle: "جامعہ کی عمارت",
    category: "Campus & Infrastructure",
    placeholderText: "Madrasa Building - Facility and premises of Jamia Taleemul Quran located at Sector 63, Noida."
  },
  {
    id: "classroom",
    title: "Classroom",
    urduTitle: "کلاس روم / درس گاہ",
    category: "Learning Environment",
    placeholderText: "Classroom - Clean, peaceful, and disciplined learning spaces dedicated for student education."
  },
  {
    id: "students",
    title: "Students",
    urduTitle: "طلبہ کرام",
    category: "Student Life",
    placeholderText: "Students - Children receiving Qur'anic, Islamic, and academic foundational education."
  },
  {
    id: "teachers",
    title: "Teachers",
    urduTitle: "اساتذہ کرام",
    category: "Faculty & Mentorship",
    placeholderText: "Teachers - Dedicated instructors guiding students in religious and academic disciplines."
  },
  {
    id: "quran-learning",
    title: "Qur'an Learning",
    urduTitle: "تعلیم القرآن و حفظ",
    category: "Core Taleem",
    placeholderText: "Qur'an Learning - Structured recitation, Tajweed, and Hifz-e-Qur'an memorization sessions."
  },
  {
    id: "activities",
    title: "Educational Activities",
    urduTitle: "تعلیمی سرگرمیاں",
    category: "Academic & Moral Growth",
    placeholderText: "Educational Activities - Daily classes in Urdu, English, Hindi, Arabic, Kalimaat, and Computers."
  }
];
