import { screen } from '@testing-library/react';
import { renderWithContext } from '../../Context/__mocks__/renderWithContext';
import ProjectDashboard from '../components/project/ProjectDashboard';
import ReactRouter from 'react-router';
import project from '../../../../backend/api/v1/models/mockedPayloads/project';

beforeEach(() => {
  jest.spyOn(ReactRouter, 'useParams').mockReturnValue({ projectID: 'mock' });
  jest.spyOn(global, 'fetch').mockResolvedValue({
    json: JSON.stringify(project('mock')),
  });
});

afterEach(() => {
  jest.resetAllMocks();
});

describe('Feature Project Dashboard', () => {
  describe('Given initial params and context', () => {
    test('Then it should contain Project Name twice', async () => {
      renderWithContext(<ProjectDashboard />);
      await screen.findByTestId('information');
      expect(screen.getAllByText('Project Name', { exact: false })).toHaveLength(2);
    });
    test('Then it should contain Project ID:', async () => {
      renderWithContext(<ProjectDashboard />);
      await screen.findByTestId('information');
      expect(screen.getByText('Project ID:', { exact: false })).toBeInTheDocument();
    });
    test('Then it should contain Project Information', async () => {
      renderWithContext(<ProjectDashboard />);
      await screen.findByTestId('information');
      expect(screen.getByText('Project Information')).toBeInTheDocument();
    });
    test('Then it should contain Audit', async () => {
      renderWithContext(<ProjectDashboard />);
      await screen.findByTestId('information');
      expect(screen.getByText('Audit')).toBeInTheDocument();
    });
  });
});
