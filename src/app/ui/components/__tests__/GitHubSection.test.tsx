import { render, screen, fireEvent } from '@testing-library/react';
import GitHubSection from '../GitHubSection';

// Mock GitHubSearch component
jest.mock('../GitHubSearch', () => () => <div>GitHubSearch Component</div>);

describe('GitHubSection', () => {
  test('renders correctly', () => {
    render(<GitHubSection />);
    expect(screen.getByText(/This feature uses React frontend/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Search GitHub repositories.../i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Search/i })).toBeInTheDocument();
  });

  test('updates query state on input change', () => {
    render(<GitHubSection />);
    const input = screen.getByPlaceholderText(/Search GitHub repositories.../i);
    fireEvent.change(input, { target: { value: 'new query' } });
    expect(input).toHaveValue('new query');
  });

  test('calls handleSearch on button click', () => {
    render(<GitHubSection />);
    const input = screen.getByPlaceholderText(/Search GitHub repositories.../i);
    const button = screen.getByRole('button', { name: /Search/i });

    fireEvent.change(input, { target: { value: 'test query' } });
    fireEvent.click(button);

    expect(screen.getByText('GitHubSearch Component')).toBeInTheDocument();
  });

  test('calls handleSearch on Enter key press', () => {
    render(<GitHubSection />);
    const input = screen.getByPlaceholderText(/Search GitHub repositories.../i);

    fireEvent.change(input, { target: { value: 'test query' } });
    fireEvent.keyUp(input, { key: 'Enter', code: 'Enter', charCode: 13 });

    expect(screen.getByText('GitHubSearch Component')).toBeInTheDocument();
  });
});
