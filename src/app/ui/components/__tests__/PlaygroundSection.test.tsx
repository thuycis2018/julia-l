import { render, screen } from '@testing-library/react';
import PlaygroundSection from '../PlaygroundSection';
import '@testing-library/jest-dom';

jest.mock('@fortawesome/react-fontawesome', () => ({
  FontAwesomeIcon: () => <span data-testid="icon" />,
}));

describe('PlaygroundSection Component', () => {
  it('renders the correct links and icons', () => {
    render(<PlaygroundSection />);

    // Test that the links are rendered
    expect(screen.getByText(/https:\/\/nextjs-openai-chi.vercel.app\//i)).toBeInTheDocument();
    expect(screen.getByText(/https:\/\/julia-le.pages.dev\//i)).toBeInTheDocument();
    expect(screen.getByText(/https:\/\/graphql-github.pages.dev\//i)).toBeInTheDocument();
  });

  it('has correct link attributes', () => {
    render(<PlaygroundSection />);

    // Check if the first link has the correct title and href
    const firstLink = screen.getByText(/https:\/\/nextjs-openai-chi.vercel.app\//i);
    expect(firstLink).toHaveAttribute('href', 'https://nextjs-openai-chi.vercel.app/');
    expect(firstLink).toHaveAttribute('title', 'https://nextjs-openai-chi.vercel.app/');

    // Check if the second link has the correct title and href
    const secondLink = screen.getByText(/https:\/\/julia-le.pages.dev\//i);
    expect(secondLink).toHaveAttribute('href', 'https://julia-le.pages.dev/');
    expect(secondLink).toHaveAttribute('title', 'https://julia-le.pages.dev/');

    // Check if the third link has the correct href, title, and target="_blank"
    const thirdLink = screen.getByText(/https:\/\/graphql-github.pages.dev\//i);
    expect(thirdLink).toHaveAttribute('href', 'https://graphql-github.pages.dev/');
    expect(thirdLink).toHaveAttribute('title', 'Open Cloudflare page');
    expect(thirdLink).toHaveAttribute('target', '_blank');
  });
});
