import { render, screen } from '@testing-library/react';
import AboutSection from '../AboutSection';

jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => <img {...props} />,
}));

jest.mock('../../../lib/constants', () => ({
  YEAR_WEB_DEV: 5,
}));

describe('AboutSection Component', () => {
  test('renders the text content correctly', () => {
    render(<AboutSection />);
    
    // Assert that the text is rendered properly
    const paragraph = screen.getByText(/As a Software Engineer based in San Diego/i);
    expect(paragraph).toBeInTheDocument();

    // Assert the YEAR_WEB_DEV value is inserted into the text
    expect(screen.getByText(/over 5 years of expertise/i)).toBeInTheDocument();
  });

  test('renders the image with correct alt text', () => {
    render(<AboutSection />);

    // Assert that the image has the correct alt text
    const img = screen.getByAltText('Julia Le');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', '/jl.jpg');
    expect(img).toHaveAttribute('width', '160');
    expect(img).toHaveAttribute('height', '160');
  });
});
