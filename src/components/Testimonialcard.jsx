import { Quote, Star, Stars } from 'lucide-react'
import React from 'react'

export default function Testimonialcard({ testimonial }) {


    return (
       
        <div 
              key={testimonial.name} 
              className="card-elevated p-8 relative animate-slide-up"
            
            >
             
              
              <div className="flex items-center justify-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-foreground text-lg">
                    {testimonial.name}
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    {testimonial.country}
                  </p>
                  <div className="flex items-center mt-1">
                    <div className="bg-success text-white px-2 py-1 rounded text-xs font-semibold">
                      {testimonial.score}
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground mb-4 italic leading-relaxed">
                "{testimonial.text}"
              </p>

              <div className="flex items-center">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                ))}
               
              </div>
        </div>
        
       
    )
}
