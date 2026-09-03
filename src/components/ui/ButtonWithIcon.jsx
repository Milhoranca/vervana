import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const ButtonWithIcon = ({
  children,
  href = '#',
  variant = 'primary',
  className = '',
  onClick
}) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`btn-with-icon-animated btn-variant-${variant} ${className}`}
    >
      <span className="btn-icon-label">{children}</span>
      <div className="btn-icon-badge">
        <ArrowUpRight size={16} />
      </div>
    </a>
  );
};

export default ButtonWithIcon;
