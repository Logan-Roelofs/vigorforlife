import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '80vh',
      fontFamily: 'inherit'
    }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: '#d32f2f' }}>404 - Page Not Found</h1>
      <p style={{ fontSize: '1.25rem', marginBottom: '2rem' }}>
        Sorry, the page you are looking for does not exist.
      </p>
      <Link href="/" style={{
        padding: '0.75rem 1.5rem',
        background: '#1976d2',
        color: '#fff',
        borderRadius: '4px',
        textDecoration: 'none',
        fontWeight: 'bold'
      }}>
        Go back home
      </Link>
    </div>
  );
}
