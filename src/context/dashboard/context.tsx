import React from 'react';

export type Section = 'home' | 'tasks' | 'add' | 'archive' | 'settings' | 'account';

export interface DashboardProps {
  section: Section;
  setSection: React.Dispatch<React.SetStateAction<Section>>;
}

export const DashboardContext = React.createContext<DashboardProps | null>(null);

const { Provider } = DashboardContext;

export default Provider;
