import { Button } from '../components/Button/Button';
import { SocialMediaLogos } from '../components/SocialMediaLogos/social-media-logos';

export const Welcome = () => {
    return (
        <article className='welcome container page-height'>
            <div className='welcome__heading'>
                <span className='welcome__name'>Gianluca Pasquinelli</span>
                <h1 className='francy'>
                Desarrollador de Software 
                <br></br>
                <span>Analista Funcional</span>
                </h1>
                <SocialMediaLogos direction='horizontal' />
                <div className='welcome__available-badge'>
                    <span>Disponible para trabajar</span>
                </div>
            </div>
            <p className='welcome__paragraph'>
                Hola! Soy Gianluca. Un{' '}
                <span className='color-primary w-700'>
                    Desarrollador de Software y Analista Funcional.
                </span>{' '}
                Me especializo en crear{' '}
                <span className='color-primary w-700'>
                    aplicaciones web modernas, funcionales y escalables
                </span>{' '}
                que ofrecen experiencias fluidas y adaptadas a todo tipo de dispositivos. Construyo soluciones{' '}
                <span className='color-primary w-700'>
                    eficientes y fáciles de mantener
                </span>
                , diseñadas para responder a necesidades reales de negocio. 
                </p>
            
                <Button
                    as="a"
                    href="https://wa.me/5493471417071"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="welcome__button"
                >
                    ¡Hablemos!
                </Button>
            <SocialMediaLogos
                className='welcome__vertical-line'
                direction='vertical'
            />
        </article>
    );
};
