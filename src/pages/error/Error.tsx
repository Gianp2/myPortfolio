import errorSound from '../../assets/erro.mp3';
import { Button } from '../../components/Button/Button';
const audio = new Audio(errorSound);

export const Error = () => {
    audio.play();

    return (
        <div className='error'>
            <div className='error-container'>
                <span>404</span>
                <div className='title-container'>
                    <h2 className='francy'>¡Ups! Fin de la prueba gratuita</h2>
                </div>
            </div>
            <div>
                <p>
                    Si estás interesado en saber más,{' '}
                    <span>¡conectemos!</span>
                </p>
                <p>
                    Envíame un mensaje a mi WhatsApp.
                </p>
            </div>
                <Button
                as="a"
                href="https://wa.me/+5493471417071"
                target="_blank"
                rel="noopener noreferrer"
                className="button-whatsapp"
                >
                WhatsApp
                </Button>
                <br></br>
                <br></br>
                <br></br>
                <br></br>

        </div>
    );
};
