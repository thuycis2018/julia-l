import React from 'react';
import { render, screen } from '@testing-library/react';
import CaseStudy from '../CaseStudy';
import '@testing-library/jest-dom';

describe('CaseStudy component', () => {
  test('renders the header section correctly', () => {
    render(<CaseStudy />);

    // Check if the main title and subtitle are present
    const title = screen.getByRole('heading', { level: 1, name: /agile adoption case study/i });
    const subtitle = screen.getByText(/how i successfully transitioned a web development team to agile/i);

    expect(title).toBeInTheDocument();
    expect(subtitle).toBeInTheDocument();
  });

  test('renders the background section with the expected content', () => {
    render(<CaseStudy />);

    const backgroundTitle = screen.getByRole('heading', { level: 2, name: /background/i });
    const firstPoint = screen.getByText(/frequent interruptions to ongoing projects/i);
    const secondPoint = screen.getByText(/lack of clarity on what should be prioritized/i);

    expect(backgroundTitle).toBeInTheDocument();
    expect(firstPoint).toBeInTheDocument();
    expect(secondPoint).toBeInTheDocument();
  });

  test('renders the solution phases with icons', () => {
    render(<CaseStudy />);

    // Verify phase titles and corresponding icons
    const phase1 = screen.getByText(/phase 1 - training and alignment/i);
    const phase2 = screen.getByText(/phase 2 - implementing agile processes/i);
    const phase3 = screen.getByText(/phase 3 - continuous improvement/i);

    expect(phase1).toBeInTheDocument();
    expect(phase2).toBeInTheDocument();
    expect(phase3).toBeInTheDocument();
  });

  test('renders the results section with all results', () => {
    render(<CaseStudy />);

    // Check if each result feature is rendered
    const tasksFeature = screen.getByText(/streamlined prioritization process/i);
    const collaborationFeature = screen.getByText(/increased cross-department collaboration/i);
    const deliveryFeature = screen.getByText(/faster delivery and reduced overload/i);
    const satisfactionFeature = screen.getByText(/improved stakeholder satisfaction/i);
    const focusFeature = screen.getByText(/increased focus on high-impact features/i);
  });
});

