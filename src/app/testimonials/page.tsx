import React from 'react';
import Testimonials from '../ui/components/Testimonials';
import Providers from '../../app/providers';


const TestimonialsPage: React.FC = () => {
  return (
    <Providers>
      <Testimonials />
    </Providers>
  );
};

export default TestimonialsPage;
