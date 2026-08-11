import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section style={{ textAlign: 'center', padding: '6rem 1rem' }}>
      <h1>Page not found</h1>
      <p>
        <Link to="/">Back to home</Link>
      </p>
    </section>
  );
}
