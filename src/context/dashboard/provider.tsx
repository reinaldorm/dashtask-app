import React from 'react';
import Provider, { Section } from './context';

interface DashboardProviderProps {
  children: React.ReactNode;
}

const DashboardProvider = ({ children }: DashboardProviderProps) => {
  const [section, setSection] = React.useState<Section>('home');

  return <Provider value={{ section, setSection }}>{children}</Provider>;
};

export default DashboardProvider;
