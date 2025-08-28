import { Button } from '../components/Button/Button';
import { Card } from '../components/card/card';

type TCard = {
  title: string;
  tags: string[];
  description: string;
  buttons: {
    to: string;
    text: string;
  }[];
  image: string;
};

const cardsContent: TCard[] = [
  {
    title: 'Sistema de Reservas - Barberia MBS',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Firebase'],
    description:
      'Aplicación web en desarrollo que utiliza Firebase para gestionar datos en tiempo real.',
    buttons: [
      { text: 'Ver en GitHub', to: 'https://github.com/Gianp2/MBS' },
    ],
    image: 'src/assets/screenshots/MBS.png',
  },

  {
    title: 'Recetario de Cocina Visual',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'LocalStorage'],
    description:
      'Aplicación web interactiva para que niños con discapacidades cognitivas aprendan a cocinar con recetas.',
    buttons: [
      { text: 'Ver en GitHub', to: 'https://github.com/Gianp2/Recetario-visual' },
    ],
    image: 'src/assets/screenshots/Recetario.png',
  },

  {
    title: 'Sistema de Inventario y Ventas',
    tags: ['PHP', 'MySQL', 'HTML5', 'CSS3', 'JavaScript'],
    description:
      'Aplicación web para gestionar inventarios y ventas. Permite registrar productos, controlar stock y generar reportes.',
    buttons: [
      { text: 'Ver en GitHub', to: 'https://github.com/Gianp2/inventario-ventas' },
    ],
    image: 'src/assets/screenshots/ventas.png',
  },
];

// Render de cards
const renderCards = () =>
  cardsContent.map((card, i) => (
    <article
      key={card.title}
      className="w-full max-w-sm"
      role="region"
      aria-labelledby={`card-title-${i}`}
    >
      <Card className="project-card flex flex-col items-center text-center min-h-[580px] border border-gray-200 rounded-2xl p-6 bg-white shadow-md">

        {/* Marco uniforme para todas las imágenes (centradas) */}
        <figure className="w-full aspect-[16/9] rounded-lg border border-gray-200 bg-white/90 p-2 mb-4 overflow-hidden grid place-items-center">
          <img
            src={card.image}
            alt={`${card.title} preview`}
            className="max-h-full max-w-full object-contain"
            loading="lazy"
            onError={(e) => {
              console.error(`Error cargando imagen de ${card.title}`);
              e.currentTarget.src = `https://placehold.co/480x270/png?text=${encodeURIComponent(
                card.title
              )}`;
            }}
          />
        </figure>

        <h3
          id={`card-title-${i}`}
          className="text-xl font-semibold mb-3 text-gray-900"
        >
          {card.title}
        </h3>

        <div
          className="tags flex flex-wrap justify-center gap-2 mb-4"
          aria-label={`Tecnologías usadas en ${card.title}`}
        >
          {card.tags.map((tag) => (
            <span
              key={tag}
              className="tag bg-indigo-100 text-indigo-800 rounded-full px-3 py-1 text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        <p
          title={card.description}
          className="description text-gray-600 mb-6 px-2 text-sm leading-relaxed line-clamp-3"
        >
          {card.description}
        </p>

        {/* Botones centrados abajo */}
        <div className="flex justify-center gap-4 mt-auto w-full">
          {card.buttons.map((button, idx) => (
            <Button
              key={`${button.to}-${idx}`}
              href={button.to}
              as="a"
              className="project-button bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-0 transition-all duration-300 ease-in-out max-w-[200px] text-center font-semibold tracking-wide border-none"
              aria-label={`Visitar ${button.text} para ${card.title}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {button.text}
            </Button>
          ))}
        </div>
      </Card>
    </article>
  ));

export const MyWork = () => {
  return (
    <article
      className="my-work container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12"
      id="my-work"
    >
      <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 tracking-tight">
        ¡Mira lo que puedo hacer!
      </h2>

      {/* Grid alineada y centrada */}
      <section
        className="cards-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch justify-items-center"
        aria-label="Proyectos destacados"
      >
        {renderCards()}
      </section>

      <p className="text-center mt-12 text-gray-700">¿Quieres ver más?</p>
    </article>
  );
};
