import React from 'react'
import Testimonialcard from '../components/testimonialcard';
import student1 from '../assets/student-1.jpg';
import student2 from '../assets/student-2.jpg';
import student3 from '../assets/student-3.jpg';
export default function Testimonials() {
    const testimonials = [
    {
      name: 'Priya Sharma',
     rating: 5,
      image: student1,
      text: 'The speaking practice sessions were incredible! I went from band 6 to 8.5 in just 3 months. The personalized feedback helped me identify and fix my weaknesses.',
      country: 'India'
    },
    {
      name: 'Ahmed Al-Hassan',
     rating: 5,
      image: student2,
      text: 'IELTS Excellence made my dream of studying at Oxford possible. The mock tests were exactly like the real exam, and the AI feedback was spot-on.',
      country: 'UAE'
    },
    {
      name: 'Li Wei',
      rating: 4,
      image: student3,
      text: 'The expert mentorship program was game-changing. My instructor guided me through every section and helped me achieve my targetrating for Canadian immigration.',
      country: 'China'
    },
    {
      name: 'Maria Garcia',
      rating: 5,
      image: 'https://randomuser.me/api/portraits ',
      text: 'I highly recommend IELTS Excellence to anyone serious about their IELTS preparation. The comprehensive resources and supportive community made all the difference.',
      country: 'india'
    },
      



  ];
  return (
    <section className="px-8 md:px-20 py-12 bg-gray-50">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            What Our <span className="">Students Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real success stories from students who achieved their target bandratings with our program.
          </p>
        </div>
      <div className="grid grid-flow-col auto-cols-[90%] md:auto-cols-auto md:grid-flow-row md:grid-cols-2 lg:grid-cols-4 gap-8 snap-x snap-mandatory overflow-x-auto md:overflow-visible pb-4">
        {testimonials.map((t, idx) => (
          <div
            key={idx}
            className="bg-white  p-6  flex flex-col  shadow-md rounded-xl hover:shadow-xl transition "
          >
           
           <Testimonialcard testimonial={t} />
          </div>
        ))}
      </div>
    </section>
  )
}
