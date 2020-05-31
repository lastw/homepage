import React from 'react';
import { NextPage } from 'next';
import Link from 'next/link';

const IndexPage: NextPage = () => {
  return (
    <>
      <footer>
        <Link href="/awesome">
          <a>awesome</a>
        </Link>
        <span>|</span>
        <a href="https://twitter.com/lastwx">twitter</a>
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
