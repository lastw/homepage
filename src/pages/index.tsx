import React from 'react';
import { NextPage } from 'next';

const IndexPage: NextPage = () => {
  return (
    <>
      <footer>
        <a href="https://lab.fxdx.cc">lab</a>
        <a href="https://github.com/lastw">github</a>
      </footer>
      <style jsx>{`
        footer {
          position: absolute;
          bottom: 32px;
        }

        a,
        span {
          color: #fff;
          margin-right: 8px;
        }
      `}</style>
    </>
  );
};

export default IndexPage;
