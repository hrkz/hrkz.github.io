import { Link } from 'react-router-dom'

export default function Error() {
  return (
    <main className="hero">
      <h1>404</h1>
      <h3>Page not found.</h3>
      <h5 className="info caption">Sorry, you're on the wrong way. You'll find more to explore on the home page.</h5>
      <Link to='/' className="button">Back to Homepage</Link>
    </main>
  )
}
