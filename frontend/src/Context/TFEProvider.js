import { createContext, useState } from 'react';

const TFEContext = createContext({});

const TFEProvider = ({ children }) => {
  //Project Information
  const [projectInformation, setProjectInformation] = useState({});
  const [projectOwner, setProjectOwner] = useState({});

  //Paths
  const TFE_PATH = '/tfe';
  const PROJECT_PATH = `${TFE_PATH}/:projectID`;
  const IAM_PATH = `${PROJECT_PATH}/iam`;
  const FW_PATH = `${PROJECT_PATH}/firewall`;
  const KEY_PATH = `${PROJECT_PATH}/service_keys`;

  return (
    <TFEContext.Provider
      value={{
        projectInformation,
        setProjectInformation,
        projectOwner,
        setProjectOwner,
        TFE_PATH,
        PROJECT_PATH,
        IAM_PATH,
        FW_PATH,
        KEY_PATH,
      }}>
      {children}
    </TFEContext.Provider>
  );
};

export { TFEContext, TFEProvider };
