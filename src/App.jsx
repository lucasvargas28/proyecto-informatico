import React, { useState } from 'react';
import './App.css';
import imagenHtml from './img/html.png';
import imagenCss from './img/css.png';
import imagenJavaScript from './img/javascript.png';
import imagenSql from './img/sql.png';

function App() {
  const [verExperiencia, setVerExperiencia] = useState(false);
  const [verProyectos, setVerProyectos] = useState(false);
  const [verTecnologias, setVerTecnologias] = useState(false);
  const [verIdiomas, setVerIdiomas] = useState(false);
  const [verHabilidades, setVerHabilidades] = useState(false);

  const toggleExperiencia = () => setVerExperiencia(!verExperiencia);
  const toggleProyectos = () => setVerProyectos(!verProyectos);
  const toggleTecnologias = () => setVerTecnologias(!verTecnologias);
  const toggleIdiomas = () => setVerIdiomas(!verIdiomas);
  const toggleHabilidades = () => setVerHabilidades(!verHabilidades);

  return (
    <div className="app">
      <header className="encabezado">
        <div className="perfil">
          <div className="imagen">
            <img src="https://via.placeholder.com/150" alt="Lucas Vargas" />
          </div>
          <div className="datos">
            <h1>Lucas Vargas</h1>
            <p>Desarrollador Web | Aprendiendo cada día</p>
            <p>Email: <a href="mailto:lucas.vargas@example.com">lucas.vargas@example.com</a></p>
            <p>Teléfono: +54 9 11 1234-5678</p>
          </div>
        </div>
      </header>

      <main>
       
        <section id="sobre-mi" className="seccion">
          <h2>Sobre mí</h2>
          <p>
            Soy un estudiante (apunto de resibirse) apasionado por la tecnología y con experiencia en desarrollo web. Me esfuerzo en aprender y mejorar
            cada día, especialmente en tecnologías web y bases de datos. Me considero responsable, adaptativo y enfocado en los resultados.
          </p>
        </section>

       
        <section id="experiencia" className="seccion">
          <h2 onClick={toggleExperiencia} className="clickable">Experiencia</h2>
          {verExperiencia && (
            <div>
              <div className="experiencia-item">
                <h3>Desarrollador Web Junior - ABC Solutions</h3>
                <p><em>2023 - Actualidad</em></p>
                <p>
                  Desarrollo de interfaces web, optimización de sitios y gestión de bases de datos para mejorar la experiencia del usuario.
                </p>
              </div>
              <div className="experiencia-item">
                <h3>Practicante en Desarrollo - XYZ Technologies</h3>
                <p><em>2021 - 2023</em></p>
                <p>
                  Apoyo en proyectos de desarrollo web, enfocándome en rendimiento y optimización de datos.
                </p>
              </div>
            </div>
          )}
        </section>

        <section id="proyectos" className="seccion">
          <h2 onClick={toggleProyectos} className="clickable">Proyectos</h2>
          {verProyectos && (
            <div>
              <div className="proyecto-item">
                <h3>Gestión Escolar</h3>
                <p>Un sistema para administrar estudiantes y asignaturas con tecnologías como HTML, CSS, JavaScript y MySQL.</p>
              </div>
              <div className="proyecto-item">
                <h3>Reservas de Paintball</h3>
                <p>Plataforma de reservas con actualizaciones en tiempo real y notificaciones automáticas.</p>
              </div>
            </div>
          )}
        </section>

      
        <section id="tecnologias" className="seccion">
          <h2 onClick={toggleTecnologias} className="clickable">Tecnologías y Lenguajes</h2>
          {verTecnologias && (
            <div className="grid-tecnologias">
              <div className="tecnologia-item">
                <img src={imagenHtml} alt="HTML" />
                <p>HTML</p>
              </div>
              <div className="tecnologia-item">
                <img src={imagenCss} alt="CSS" />
                <p>CSS</p>
              </div>
              <div className="tecnologia-item">
                <img src={imagenJavaScript} alt="JavaScript" />
                <p>JavaScript</p>
              </div>
              <div className="tecnologia-item">
                <img src={imagenSql} alt="MySQL" />
                <p>MySQL</p>
              </div>
            </div>
          )}
        </section>

        <section id="idiomas" className="seccion">
          <h2 onClick={toggleIdiomas} className="clickable">Idiomas</h2>
          {verIdiomas && (
            <div className="barras-progreso">
              <div className="barra">
                <span>Español</span>
                <div className="barra-llenada" style={{ width: '100%' }}></div>
              </div>
              <div className="barra">
                <span>Inglés</span>
                <div className="barra-llenada" style={{ width: '70%' }}></div>
              </div>
            </div>
          )}
        </section>

      
        <section id="habilidades" className="seccion">
          <h2 onClick={toggleHabilidades} className="clickable">Habilidades</h2>
          {verHabilidades && (
            <ul>
              <li>Trabajo en equipo</li>
              <li>Resolución de problemas</li>
              <li>Comunicación efectiva</li>
              <li>Adaptabilidad</li>
            </ul>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
