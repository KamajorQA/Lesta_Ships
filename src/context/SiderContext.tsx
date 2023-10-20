import { createContext, useState } from 'react';

interface ISiderContext {
  collapsed: boolean;
  switchCollapse: () => void;
}

const SiderContext = createContext<ISiderContext>({
  collapsed: true,
  switchCollapse: () => {},
});

const SiderContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [collapsed, setCollapsed] = useState(true);
  const switchCollapse = () => setCollapsed((prev) => !prev);

  return (
    <SiderContext.Provider
      value={{
        collapsed,
        switchCollapse,
      }}
    >
      {children}
    </SiderContext.Provider>
  );
};

export { SiderContext, SiderContextProvider };
