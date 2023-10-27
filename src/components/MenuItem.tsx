
import React, { ReactNode } from 'react'
import Link from 'next/link'

const MenuItem = ({title, link, Icon}: {
    title: string,
    link: string,
    Icon?: () => ReactNode
}) => {
  return (
    <Link className='flex items-center gap-2 hover:text-amber-600' href={link}>
      {Icon && (
        <div className="lg:hidden">
          <Icon />
        </div>
      )}
      <div className="text-normal lg:text-2xl hidden lg:inline">
        <p className="">{title}</p>
      </div>
    </Link>
  );
}

export default MenuItem