import React from 'react';

export const Layout: React.FC = ({ children }) => {
  return (
    <div className="root">
      <canvas id="background" />
      <div className="content">{children}</div>
    </div>
  );
};
