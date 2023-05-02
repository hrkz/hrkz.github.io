
import News from './data/News'

export default function Home() {
  return (
    <section>
      <div className="landing">
        <div className="profile">
          <img className="avatar icon" src="assets/avatar.jpg" alt="" />
          <h3>Hugo Frezat</h3>
          <p><i>Maths and physics on computers</i></p>
          <h4 className="info">Postdoc at IPGP</h4>
        </div>
        <div className="description">
          <p>
            My education has been chaotic in the variety of subjects I explored, starting with computer science and programming 
            either for web, mobile or desktop software.
          </p>
          <p>
            I later discovered numerical algorithms and how simulations can help us reproduce 
            natural effects and decided to study applied maths.
          </p>
          <p>
            Learning about numerical modeling quickly led me to the world of physics that I 
            continually explore depending on the application.
          </p>
          <p>
            Now, I like working with computers, applied maths and physics and try to 
            design new numerical methods to better understand physical processes.
          </p>
        </div>
      </div>
      <News />
    </section>
  )
}
