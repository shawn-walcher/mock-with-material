import { screen } from '@testing-library/react';
import ProjectInformation from '../components/project/ProjectInformation';
import { renderWithContext } from '../../Context/__mocks__/renderWithContext';

describe('Project Information card', () => {
  test('contains Project Name', () => {
    renderWithContext(<ProjectInformation />);
    expect(screen.getByText('Project Name')).toBeInTheDocument();
  });
  test('contains Ancestry', () => {
    renderWithContext(<ProjectInformation />);
    expect(screen.getByText('Ancestry')).toBeInTheDocument();
  });
  test('contains Owner Name', () => {
    renderWithContext(<ProjectInformation />);
    expect(screen.getByText('Owner Name')).toBeInTheDocument();
  });
  test('contains Owner ID', () => {
    renderWithContext(<ProjectInformation />);
    expect(screen.getByText('Owner ID')).toBeInTheDocument();
  });

  describe('Given projectInformation', () => {
    test('it displays the projectInformation.name', () => {
      renderWithContext(<ProjectInformation />);
      expect(screen.getByText('mock-project-id-99')).toBeInTheDocument();
    });
    test('it displays the projectInfo.ancestry', () => {
      renderWithContext(<ProjectInformation />);
      expect(screen.getByText('fake.net > tfe > project-id-99 > non-production')).toBeInTheDocument();
    });
  });

  describe('Given projectOwner', () => {
    test('it displays the projectOwner.name', () => {
      renderWithContext(<ProjectInformation />);
      expect(screen.getByText('js1234')).toBeInTheDocument();
    });
    test('it displays the projectOwner.id', () => {
      renderWithContext(<ProjectInformation />);
      expect(screen.getByText('Jane Smith')).toBeInTheDocument();
    });
  });
});
