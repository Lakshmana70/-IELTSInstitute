import React from 'react'
import { Mic, FileText, Brain, Users } from 'lucide-react';
import Featurecard from '../components/Featurecard';
export default function Features() {
   const features = [
    {
      icon: Mic,
      title: 'AI Speaking Practice',
      description: 'Practice with our advanced AI that provides real-time feedback on pronunciation, fluency, and coherence.',
      benefits: ['Real-time feedback', 'Accent analysis', '24/7 availability'],
      color: 'bg-gradient-to-br from-blue-500 to-blue-600'
    },
    {
      icon: FileText,
      title: 'Adaptive Mock Tests',
      description: 'Take unlimited practice tests that adapt to your skill level and identify areas for improvement.',
      benefits: ['Personalized difficulty', 'Detailed analytics', 'Official format'],
      color: 'bg-gradient-to-br from-teal-500 to-teal-600'
    },
    {
      icon: Brain,
      title: 'AI Band Score Predictor',
      description: 'Get accurate band score predictions based on your performance across all four skills.',
      benefits: ['Precise predictions', 'Skill breakdown', 'Progress tracking'],
      color: 'bg-gradient-to-br from-purple-500 to-purple-600'
    },
    {
      icon: Users,
      title: 'Expert Tutors',
      description: 'Connect with certified IELTS instructors for personalized guidance and strategies.',
      benefits: ['Certified instructors', 'Live sessions', 'Custom study plans'],
      color: 'bg-gradient-to-br from-orange-500 to-orange-600'
    }
  ];
  return (
    <section className="px-8 md:px-20 py-12    bg-gray-100">
      <h3 className="text-3xl font-bold text-center mb-10 text-gray-800">
        Why Choose IELTS Pro?
      </h3>
     
      <div className="grid grid-flow-col auto-cols-[90%] md:auto-cols-auto md:grid-flow-row md:grid-cols-2 lg:grid-cols-4 gap-8 snap-x snap-mandatory overflow-x-auto md:overflow-visible pb-4">
        {features.map((feature, idx) => (
          <Featurecard feature={feature} idx={idx} />
        ))}
      </div>
    </section>
  )
}
