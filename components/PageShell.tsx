import { ReactElement } from 'react';
import { PageShellClient } from './PageShellClient';

interface PageShellProps {
  children: ReactElement;
}

export function PageShell({ children }: PageShellProps) {
  return <PageShellClient>{children}</PageShellClient>;
}
