import React from 'react';
import { BookOpen, GraduationCap, Heart, Languages } from 'lucide-react';

const learningAreas = [
  { title: 'Qur’an Reading', text: 'Learn to read the Qur’an with correct pronunciation and guidance.', icon: BookOpen },
  { title: 'Hifz-e-Qur’an', text: 'Structured support for students who are memorising the Qur’an.', icon: Heart },
  { title: 'Islamic Studies', text: 'Build understanding of basic Islamic teachings and good character.', icon: GraduationCap },
  { title: 'School Subjects', text: 'Foundational learning in languages and essential academic subjects.', icon: Languages }
];

export const StudentsSection: React.FC = () => (
  <section id="students" className="bg-[#fdf8ed] py-12 sm:py-16">
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto mb-8 max-w-2xl text-center">
        <p className="text-xs font-bold uppercase tracking-[.18em] text-[#9a7416]">Student life & learning</p>
        <h2 className="mt-2 font-serif text-3xl font-bold text-[#102a43] sm:text-4xl">Our Students</h2>
        <p className="mt-3 text-sm leading-6 text-stone-600">The Jamia’s learning focuses on Qur’anic education, Islamic knowledge, good character and essential academic skills. Parents can contact the team to ask about current classes and admission.</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {learningAreas.map((item) => {
          const Icon = item.icon;
          return <article key={item.title} className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm transition hover:border-[#d4af37] hover:shadow-md">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#102a43] text-[#f1d592]"><Icon className="h-5 w-5" /></span>
            <h3 className="mt-4 font-serif text-lg font-bold text-[#102a43]">{item.title}</h3>
            <p className="mt-2 text-sm leading-6 text-stone-600">{item.text}</p>
          </article>;
        })}
      </div>
      <div className="mt-6 flex flex-col items-center justify-between gap-3 rounded-2xl border border-[#d4af37]/40 bg-white p-5 text-center sm:flex-row sm:text-left">
        <div><h3 className="font-semibold text-[#102a43]">Want to know about admission?</h3><p className="mt-1 text-sm text-stone-600">The Jamia team can explain the current process and required documents.</p></div>
        <a href="#/support" className="inline-flex min-h-11 items-center justify-center rounded-xl bg-[#102a43] px-5 py-3 text-sm font-bold text-white hover:bg-[#183c5b]">Contact the Jamia</a>
      </div>
    </div>
  </section>
);
