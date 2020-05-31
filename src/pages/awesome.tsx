import React from 'react';
import { NextPage, GetStaticProps } from 'next';
import { getRecords } from 'utils/db';

type Props = {
  links: Array<{ href: string; title: string }>;
};

const AwesomePage: NextPage<Props> = ({ links }) => {
  return (
    <>
      <main>
        {links.map(({ href, title }) => {
          return (
            <div key={href}>
              <a href={href} target="_blank">
                {title}
              </a>
            </div>
          );
        })}
      </main>
      <style jsx>{`
        a {
          color: #fff;
        }
      `}</style>
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const records = await getRecords();

  const links = records.map((record: any) => {
    return {
      title: record.fields.Name,
      href: record.fields.Link,
    };
  });

  return {
    props: { links },
  };
};

export default AwesomePage;
