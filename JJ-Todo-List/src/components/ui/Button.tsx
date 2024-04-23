import { ReactNode } from 'react';
import classNames from 'classnames';

interface ButtonProps {
  children: ReactNode;
  type: 'submit' | 'reset' | 'button' | undefined;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  primary?: boolean;
  secondary?: boolean;
  danger?: boolean;
}

const Button = ({
  children,
  type,
  onClick,
  primary,
  secondary,
  danger,
}: ButtonProps) => {
  const classes = classNames(
    'px-4 py-2 coursor-pointer border-none rounded-md',
    {
      'bg-blue-500 text-white': primary,
      'bg-green-500 text-white': secondary,
      'bg-red-500 text-white': danger,
    }
  );
  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
