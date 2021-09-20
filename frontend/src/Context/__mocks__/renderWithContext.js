import { render } from '@testing-library/react';
import { TFEContext, TFEProvider } from '../TFEProvider';
import { MockTFE } from './MockTFE';

/**
 * Generates content utilizing context
 * @param {JSX} children - The target JSX being tested
 * @param {Object} [tfeOverrides] - An object of key, value pairs for any values you wish to change for the TFEMock
 */
export const renderWithContext = (children, tfeOverrides = null) => {
  //Overwrite mocks with provided values
  if (tfeOverrides !== null) Object.assign(MockTFE, tfeOverrides);

  return render(
    <TFEProvider>
      <TFEContext.Consumer>
        {(tfeConsumerValues) => {
          return (
            //Pass the rendered context to any children
            <TFEContext.Provider value={{ ...tfeConsumerValues, ...MockTFE }}>{children}</TFEContext.Provider>
          );
        }}
      </TFEContext.Consumer>
    </TFEProvider>
  );
};
