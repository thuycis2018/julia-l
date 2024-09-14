import React from 'react';
import dynamic from 'next/dynamic';
import Providers from '../../app/providers';
import { PostsSkeleton } from '../ui/components/Skeletons';

const Testimonials = dynamic(() => import('../ui/components/Testimonials'), {
  loading: () => <PostsSkeleton />,
});

const TestimonialsPage: React.FC = () => {
  return (
    <Providers>
      <Testimonials />
    </Providers>
  );
};

export default TestimonialsPage;
