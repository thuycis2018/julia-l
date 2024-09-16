import React from 'react';
import { render, screen } from '@testing-library/react';
import CaseStudy from '../CaseStudy';
import '@testing-library/jest-dom';

describe('CaseStudy Component', () => {
  it('renders the header with the correct title and subtitle', () => {
    render(<CaseStudy />);
    
    expect(screen.getByText('Agile Adoption Case Study')).toBeInTheDocument();
    expect(screen.getByText('How I Successfully Transitioned a Web Development Team to Agile')).toBeInTheDocument();
  });

  it('renders the background section with the correct content', () => {
    render(<CaseStudy />);

    expect(screen.getByText('Background')).toBeInTheDocument();
    // expect(screen.getByText('A mid-sized tech company providing internet security solutions was facing several operational challenges in its web development processes.')).toBeInTheDocument();
    expect(screen.getByText('Frequent interruptions to ongoing projects.')).toBeInTheDocument();
    expect(screen.getByText('Lack of clarity on what should be prioritized, often leading to rushed decisions.')).toBeInTheDocument();
    expect(screen.getByText('Slowdown in feature delivery as the team struggled to address requests from multiple stakeholders at once.')).toBeInTheDocument();
  });

  it('renders the challenges section with the correct content', () => {
    render(<CaseStudy />);

    expect(screen.getByText('Challenges')).toBeInTheDocument();
    expect(screen.getByText('Long list of feature requests from different departments.')).toBeInTheDocument();
    expect(screen.getByText('Conflicting priorities across teams and stakeholders.')).toBeInTheDocument();
  });

  it('renders the solution section with the correct icons and text', () => {
    render(<CaseStudy />);

    expect(screen.getByText('Phase 1 - Training and Alignment:')).toBeInTheDocument();
    expect(screen.getByText('Phase 2 - Implementing Agile Processes:')).toBeInTheDocument();
    expect(screen.getByText('Phase 3 - Continuous Improvement:')).toBeInTheDocument();
    
    // Use data-testid to find the icons
    expect(screen.getByTestId('chalkboard-teacher-icon')).toBeInTheDocument();
    expect(screen.getByTestId('project-diagram-icon')).toBeInTheDocument();
    expect(screen.getByTestId('tools-icon')).toBeInTheDocument();
  });

  it('renders the results section with the correct icons and text', () => {
    render(<CaseStudy />);

    expect(screen.getByText('Streamlined Prioritization Process:')).toBeInTheDocument();
    expect(screen.getByText('Increased Cross-Department Collaboration:')).toBeInTheDocument();
    expect(screen.getByText('Faster Delivery and Reduced Overload:')).toBeInTheDocument();
    expect(screen.getByText('Improved Stakeholder Satisfaction:')).toBeInTheDocument();
    expect(screen.getByText('Increased Focus on High-Impact Features:')).toBeInTheDocument();
    
    // Use data-testid to find the icons
    expect(screen.getByTestId('tasks-icon')).toBeInTheDocument();
    expect(screen.getByTestId('arrows-spin-icon')).toBeInTheDocument();
    expect(screen.getByTestId('clock-icon')).toBeInTheDocument();
    expect(screen.getByTestId('face-smile-icon')).toBeInTheDocument();
    expect(screen.getByTestId('chart-line-icon')).toBeInTheDocument();
  });
});
