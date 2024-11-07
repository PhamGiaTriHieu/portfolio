'use client';
import React from 'react';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {links} from '@/constants/navLinks';

const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className="flex gap-8">
      {links?.length ? (
        links.map((link, index) => {
          return (
            <Link
              key={index}
              href={link.path}
              className={`${
                link.path === pathname && 'text-accent border-b-2 border-accent'
              } capitalize font-medium hover:text-accent transition-all`}
            >
              {link.name}
            </Link>
          );
        })
      ) : (
        <div>NOOOOO</div>
      )}
    </nav>
  );
};

export default Nav;
