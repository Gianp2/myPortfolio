import './style.css';

type Props = React.HTMLAttributes<HTMLDivElement> & {
  children?: React.ReactNode;
};

export const Card = ({ children, className = '', ...props }: Props) => {
  // Une las clases de forma segura, sin espacios innecesarios
  const classes = ['card', className].filter(Boolean).join(' ');

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};
