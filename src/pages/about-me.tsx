import { Card } from '../components/card/card';

export const AboutMe = () => {
        new Date(Date.now() - new Date('2002-07-07').getTime()).getFullYear() -
        1970;
    return (
        <article id='about-me' className='about-me container page-height'>
            <section>
                <h2>Sobre Mí</h2>
                <div>
                    <p>
                        Me llamo Gianluca Pasquinelli, nací el 7 de julio de 2002 y vivo en Las Parejas, Santa Fe. Desde muy joven me interesé por la tecnología y el desarrollo, lo que me llevó a formarme como Analista de Sistemas y Desarrollador Web. Me considero una persona responsable, proactiva y con muchas ganas de aprender y crecer.
                    </p>
                    <p>
                        Uno de mis grandes orgullos es haber podido crear proyectos que no solo son funcionales, sino que también tienen un impacto positivo en la comunidad, como el recetario de cocina visual e interactivo para niños con dificultades cognitivas, que busca ayudar a la inclusión educativa y fomentar la autonomía.
                    </p>
                    <p>
                        Si estás interesado en colaborar, no dudes en contactarme{' '}
                        <span className='color-primary w-700'>:)</span>
                    </p>
                </div>
            </section>
            <section>
                <h3>Habilidades y Educación</h3>
                <div className='about-me__grid'>
                    <div className='about-me__grid-two-thirds about-me__flex-vertical'>
                        <Card>
                            <h4>Programación</h4>
                            <ul>
                                <li>HTML & CSS</li>
                                <li>JavaScript</li>
                                <li>TypeScript</li>
                                <li>Python</li>
                                <li>PHP</li>
                                <li>React JS</li>
                            </ul>
                        </Card>

                        <Card className='about-me__grid-two-thirds about-me__flex-vertical'>
                            <h4>Educación</h4>
                            <ul>
                                <li>Tec. Sup. en Análisis Funcional de Sistemas Informáticos. - Colegio Sup. "Florentino Ameghino" NRO. 47</li>
                                <br />
                                <li>Marketing y Redes Sociales - CECLA NRO. 111</li>
                                <br />
                                <li>Inglés Técnico - CECLA NRO. 111</li>
                                <br />
                                <li>Programación Front-End - CECLA NRO. 25</li>
                                <br />
                                <li>PHP y MySQL Avanzado - UTN.BA Centro de e-Learning</li>
                            </ul>
                        </Card>
                    </div>
                    <div className='about-me__grid-one-third about-me__flex-vertical'>
                        <Card>
                            <h4>Bases de Datos</h4>
                            <ul>
                                <li>MySQL</li>
                                <li>SQLite</li>
                                <li>MongoDB</li>
                                <li>Firebase</li>
                            </ul>
                        </Card>
                        <Card>
                            <h4>Herramientas</h4>
                            <ul>
                                <li>Figma (UI/UX)</li>
                                <li>VS Code</li>
                                <li>Git / GitHub</li>
                            </ul>
                        </Card>
                        <Card>
                        <h4>Competencias Complementarias</h4>
                        <ul>
                        <li>Scrum y UML</li>
                        <li>Gestión de proyectos</li>
                        <li>Comunicación técnica</li>
                        <li>Resolución de problemas</li>
                        <li>Trabajo en equipo</li>
                    </ul>
                </Card>
            </div>
                </div>
            </section>
        </article>
    );
};