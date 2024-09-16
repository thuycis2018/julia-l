import { render, screen } from '@testing-library/react';
import SkillSection from '../SkillSection';
import '@testing-library/jest-dom';
import { YEAR_AGILE, YEAR_WEB_DEV } from '../../../lib/constants';

jest.mock('@fortawesome/react-fontawesome', () => ({
  FontAwesomeIcon: () => <span data-testid="icon" />,
}));

describe('SkillSection Component', () => {
  it('renders the correct skill sections with icons and text', () => {
    render(<SkillSection />);

    // Check for the presence of the three skill sections and their corresponding icons
    const icons = screen.getAllByTestId('icon');
    expect(icons.length).toBe(3); // Expect 3 icons

    // Check for the presence of the section titles and their descriptions
    expect(screen.getByText(/Web Project Managment/i)).toBeInTheDocument();
    // expect(screen.getByText(/Web Development/i)).toBeInTheDocument();
    expect(screen.getByText(/System Integrations/i)).toBeInTheDocument();

    // Check for the presence of the text with dynamic values
    expect(screen.getByText(new RegExp(`With over ${YEAR_AGILE}`, 'i'))).toBeInTheDocument();
    expect(screen.getByText(new RegExp(`With ${YEAR_WEB_DEV}`, 'i'))).toBeInTheDocument();

    // Check for the static content of the sections
    expect(screen.getByText(/facilitating collaboration between web developers/i)).toBeInTheDocument();
    expect(screen.getByText(/leading technical discussions/i)).toBeInTheDocument();
    expect(screen.getByText(/implemented various integrations/i)).toBeInTheDocument();
  });

  it('renders each section with a specific background class', () => {
    render(<SkillSection />);

    // Check that the section divs contain the correct classes for styling
    const sections = screen.getAllByRole('heading', { level: 3 });
    sections.forEach((section) => {
      expect(section).toHaveClass('text-white text-lg font-bold');
    });
  });
});
