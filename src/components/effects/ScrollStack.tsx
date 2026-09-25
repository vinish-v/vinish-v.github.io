import React from 'react';
import './ScrollStack.css';

export interface ScrollStackItemProps {
  children: React.ReactNode;
  itemClassName?: string;
  style?: React.CSSProperties;
}

export const ScrollStackItem: React.FC<ScrollStackItemProps> = ({ 
  children, 
  itemClassName = '',
  style
}) => (
  <div 
    className={`scroll-stack-card ${itemClassName}`.trim()}
    style={style}
  >
    {children}
  </div>
);

export interface ScrollStackProps {
  children: React.ReactNode;
  className?: string;
  itemStackDistance?: number;
  stackPosition?: number | string;
}

export const ScrollStack: React.FC<ScrollStackProps> = ({
  children,
  className = '',
}) => {
  return (
    <div className={`scroll-stack-container ${className}`.trim()}>
      <div className="scroll-stack-deck">
        {React.Children.map(children, (child, idx) => {
          if (!React.isValidElement<ScrollStackItemProps>(child)) return child;
          const zIndex = 10 + idx * 10;

          return React.cloneElement(child, {
            ...child.props,
            style: {
              ...(child.props.style || {}),
              zIndex: zIndex,
            },
          });
        })}
      </div>
    </div>
  );
};

export default ScrollStack;

