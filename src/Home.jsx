
import News from './data/News'

export default function Home() {
  return (
    <section>
      <div className="landing">
        <div className="profile">
          <img className="avatar icon" src="assets/avatar.jpg" alt="" />
          <h3>Hugo Frezat</h3>
          <p class="info">Maths and physics on computers</p>
        </div>
        <div className="description">
          <p>
            I am a researcher studying the interplay between statistical machine learning and numerical simulation of dynamical systems, 
            mostly arising from differential equations. Among these systems, I am mostly interested in climate modeling and astrophysical fluid
            dynamics, but always opened to suggestions.
          </p>
          <p>
            My recent work involves the definition of stable learning strategies that accelerate numerical simulations by predicting unresolved 
            processes using solver temporal information.
          </p>
          <p>
            I am also side-developing a scientific framework to study spectral methods, symbolic transformations and their relation through automatic
            differentiation.
          </p>
        </div>
      </div>
      <News />
    </section>
  )
}
