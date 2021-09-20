import { screen } from '@testing-library/react';
import  ProjectInformation  from '../components/project/ProjectInformation';
import { renderWithContext } from '../../Context/__mocks__/renderWithContext';

describe('Project Information card', () => {
  
  test('contains Project Name', () => {
    renderWithContext(<ProjectInformation />);
    expect(screen.getByText('Project Name')).toBeInTheDocument();
    expect(screen.getByText('mock-project-id-99')).toBeInTheDocument();
  });
  test('contains Ancestry', () => {
    renderWithContext(<ProjectInformation />);
    expect(screen.getByText('Ancestry')).toBeInTheDocument();
    expect(screen.getByText('fake.net > tfe > project-id-99 > non-production')).toBeInTheDocument();
  });
  test('contains Owner Name', () => {
    renderWithContext(<ProjectInformation />);
    expect(screen.getByText('Owner Name')).toBeInTheDocument();
    expect(screen.getByText('Jane Smith')).toBeInTheDocument();
  });
  test('contains Owner ID', () => {
    renderWithContext(<ProjectInformation />);
    expect(screen.getByText('Owner ID')).toBeInTheDocument();
    expect(screen.getByText('js1234')).toBeInTheDocument();
  });
});
