import { screen } from '@testing-library/react';
import { renderWithContext } from '../../Context/__mocks__/renderWithContext';
import ProjectInformation from '../components/project/ProjectInformation';

describe('Feature Project Information card', () => {
  describe('Given initial context', () => {
    test('Then it should contain Project Name', () => {
      renderWithContext(<ProjectInformation />);
      expect(screen.getByText('Project Name')).toBeInTheDocument();
    });
    test('Then it should contain Ancestry', () => {
      renderWithContext(<ProjectInformation />);
      expect(screen.getByText('Ancestry')).toBeInTheDocument();
    });
    test('Then it should contain Owner Name', () => {
      renderWithContext(<ProjectInformation />);
      expect(screen.getByText('Owner Name')).toBeInTheDocument();
    });
    test('Then it should contain Owner ID', () => {
      renderWithContext(<ProjectInformation />);
      expect(screen.getByText('Owner ID')).toBeInTheDocument();
    });
  });

  describe('Given projectInformation', () => {
    test('Then projectInformation.name should be displayed', () => {
      renderWithContext(<ProjectInformation />);
      expect(screen.getByText('mock-project-id-99')).toBeInTheDocument();
    });
    test('Then projectInfo.ancestry should be displayed', () => {
      renderWithContext(<ProjectInformation />);
      expect(screen.getByText('fake.net > tfe > project-id-99 > non-production')).toBeInTheDocument();
    });
  });

  describe('Given projectOwner', () => {
    test('Then projectOwner.name should be displayed', () => {
      renderWithContext(<ProjectInformation />);
      expect(screen.getByText('js1234')).toBeInTheDocument();
    });
    test('Then projectOwner.id should be displayed', () => {
      renderWithContext(<ProjectInformation />);
      expect(screen.getByText('Jane Smith')).toBeInTheDocument();
    });
  });
});
