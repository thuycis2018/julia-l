import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../Footer';
import '@testing-library/jest-dom';

describe('Footer Component', () => {
  it('renders the current year and the correct text', () => {
    render(<Footer />);
    const currentYear = new Date().getFullYear();

    // Check if the footer text contains the current year
    expect(screen.getByText(`© ${currentYear} Julia Le. All rights reserved.`)).toBeInTheDocument();
  });

  it('renders with the correct class names', () => {
    render(<Footer />);

    // Check if the footer element has the correct class names
    const footerElement = screen.getByRole('contentinfo'); // Semantic HTML5 element for footer
    expect(footerElement).toHaveClass('bg-green-5');
    expect(footerElement).toHaveClass('text-white');
  });
});
