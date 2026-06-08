import Link from 'next/link';

export default function LocaMatPage() {
  return (
    <main
      style={{
        minHeight: '100vh',
        background: 'var(--bg)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '5rem 1.5rem',
      }}
    >
      <div style={{ width: '100%', maxWidth: '520px', textAlign: 'center' }}>
        <p
          style={{
            fontFamily: 'var(--font-jetbrains, monospace)',
            fontSize: '0.72rem',
            color: 'var(--accent)',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            marginBottom: '1.75rem',
          }}
        >
          &gt;&nbsp;project_status
        </p>

        <h1
          style={{
            fontFamily: 'var(--font-hanken, sans-serif)',
            fontSize: 'clamp(1.75rem, 5vw, 2.5rem)',
            fontWeight: 600,
            color: 'var(--fg)',
            lineHeight: 1.15,
            marginBottom: '1rem',
            letterSpacing: '-0.02em',
          }}
        >
          LocaMat is not live yet
        </h1>

        <p
          style={{
            fontSize: '1rem',
            color: 'var(--fg-dim)',
            lineHeight: 1.7,
            maxWidth: '380px',
            margin: '0 auto 2.5rem',
          }}
        >
          Moroccan material rental platform — currently under development.
          The public version will be available soon.
        </p>

        <Link href="/" className="btn btn-primary">
          ← Back to portfolio
        </Link>
      </div>
    </main>
  );
}
