import { screen } from '@testing-library/react';
import { renderWithContext } from '../../Context/__mocks__/renderWithContext';
import TFERow from '../components/dashboard/TFERow';
import userEvent from '@testing-library/user-event';

const mockRowItem = {
  project_name: 'mock-project-name-1',
  project_id: 'project-id-1-mock',
  repo_url: 'https://github.fake.net/tfe-workspaces/project-id-1',
  lifecycle: 'non-production',
  owner: {
    id: 'js1234',
    name: 'Jane Smith',
  },
  ancestry: 'fake.net > tfe > project-id-1 > non-production',
  tfe_management_enabled: true,
};

const mockTable = (children) => {
  return (
    <table>
      <tbody>{children}</tbody>
    </table>
  );
};

describe('Feature TFE Row', () => {
  describe('Given a valid item object', () => {
    test('Then it should contain project name', () => {
      renderWithContext(mockTable(<TFERow item={mockRowItem} />));
      expect(screen.getByText(mockRowItem.project_name)).toBeInTheDocument();
    });
    test('Then it should contain project id', () => {
      renderWithContext(mockTable(<TFERow item={mockRowItem} />));
      expect(screen.getByText(mockRowItem.project_id)).toBeInTheDocument();
    });
    test('Then it should contain lifecycle', () => {
      renderWithContext(mockTable(<TFERow item={mockRowItem} />));
      expect(screen.getByText(mockRowItem.lifecycle)).toBeInTheDocument();
    });
    test('Then it should contain whether tfe management is enabled', () => {
      renderWithContext(mockTable(<TFERow item={mockRowItem} />));
      expect(screen.getByText(`${mockRowItem.tfe_management_enabled}`)).toBeInTheDocument();
    });
  });

  describe('When additional info has not been expanded', () => {
    test('Then it should not contain ancestry', () => {
      renderWithContext(mockTable(<TFERow item={mockRowItem} />));
      expect(screen.queryByText(mockRowItem.ancestry)).not.toBeInTheDocument();
    });
    test('Then it should not contain owner name', () => {
      renderWithContext(mockTable(<TFERow item={mockRowItem} />));
      expect(screen.queryByText(mockRowItem.owner.name)).not.toBeInTheDocument();
    });
    test('Then it should not contain owner id', () => {
      renderWithContext(mockTable(<TFERow item={mockRowItem} />));
      expect(screen.queryByText(mockRowItem.owner.id)).not.toBeInTheDocument();
    });
  });

  describe('When additional info has not been expanded', () => {
    test('Then it should contain ancestry', () => {
      renderWithContext(mockTable(<TFERow item={mockRowItem} />));
      userEvent.click(screen.getByTestId(`${mockRowItem.project_name}-expand`));
      expect(screen.getByText(mockRowItem.ancestry)).toBeInTheDocument();
    });
    test('Then it should contain owner name', () => {
      renderWithContext(mockTable(<TFERow item={mockRowItem} />));
      userEvent.click(screen.getByTestId(`${mockRowItem.project_name}-expand`));
      expect(screen.getByText(mockRowItem.owner.name)).toBeInTheDocument();
    });
    test('Then it should contain owner id', () => {
      renderWithContext(mockTable(<TFERow item={mockRowItem} />));
      userEvent.click(screen.getByTestId(`${mockRowItem.project_name}-expand`));
      expect(screen.getByText(mockRowItem.owner.id)).toBeInTheDocument();
    });
  });
});
