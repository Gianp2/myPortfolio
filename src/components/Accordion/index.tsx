import { Card } from '../card/card';
import './style.css';
import chevron from '../../assets/chevron-down.svg';

type Props = {
  text: string;
  children: React.ReactNode;
  open: boolean;
  handleOpen: (open: boolean) => void;
};

export const Accordion = ({ text, children, handleOpen, open }: Props) => {
  return (
    <div className="accordion-container">
      {/* Header: aquí usamos role="button" y tabIndex para accesibilidad */}
      <div
        role="button"
        tabIndex={0}
        onClick={() => handleOpen(!open)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleOpen(!open);
          }
        }}
        className="accordion-header"
        aria-expanded={open}
        aria-controls="accordion-content"
      >
        <Card className="accordion card">
          <p>{text}</p>
          <img
            className={`chevron ${open ? 'open' : ''}`}
            src={chevron}
            alt={open ? 'Cerrar contenido' : 'Abrir contenido'}
            aria-hidden="true"
          />
        </Card>
      </div>

      {/* Contenido */}
      <div
        id="accordion-content"
        className={`children ${open ? 'open' : ''}`}
        onClick={(e) => e.stopPropagation()}
        aria-hidden={!open}
      >
        {children}
      </div>
    </div>
  );
};
