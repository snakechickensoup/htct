import React from 'react';
import { FOOTER_INFO } from '@/lib/constants';

const Footer = () => {
  return (
    <footer className='bg-secondary/10 mt-4 rounded py-6 shadow-2xl'>
      {FOOTER_INFO.map(({ id, info }) => (
        <p key={id} className='text-foreground p-3 text-xs'>
          {info.map((i) => (
            <React.Fragment key={i.label}>
              {i.label && <span className='text-foreground/50 mr-2'>{i.label}</span>}
              {i.label === '깃허브' ? (
                <a href={i.value} target='_blank'>
                  {i.value}
                </a>
              ) : (
                <span>{i.value}</span>
              )}
              <br />
            </React.Fragment>
          ))}
        </p>
      ))}
    </footer>
  );
};

export default Footer;
