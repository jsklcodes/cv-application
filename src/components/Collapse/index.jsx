import { useState } from 'react';
import { CaretDown } from '@phosphor-icons/react';
import './index.css';

export const Collapse = ({ title, children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const visibleClassName = isVisible ? 'visible' : '';

  const handleContentVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="collapse">
      <header onClick={handleContentVisibility} className="collapse-header">
        <h2 className="collapse-heading">{title}</h2>
        <CaretDown />
      </header>

      <div className={`collapse-body ${visibleClassName}`}>{children}</div>
    </div>
  );
};
