import { useState } from 'react';
import { CaretUp, CaretDown } from '@phosphor-icons/react';
import './index.css';

export const Collapse = ({ title, children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const visibleClassName = isVisible ? 'visible' : '';
  const collapseIcon = isVisible ? (
    <CaretUp weight="bold" />
  ) : (
    <CaretDown weight="bold" />
  );

  const handleContentVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="collapse">
      <header onClick={handleContentVisibility} className="collapse-header">
        <h2 className="collapse-heading">{title}</h2>
        {collapseIcon}
      </header>

      <div className={`collapse-body ${visibleClassName}`}>{children}</div>
    </div>
  );
};
