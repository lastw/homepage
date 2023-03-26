import React, { PropsWithChildren } from 'react';

export const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="root">
      <canvas id="background" />
      <div className="content">{children}</div>
    </div>
  );
};
