'use client';

import { useState } from 'react';

export default function Home() {
  const [input, setInput] = useState('');
  const [stream, setStream] = useState("I'm Nova.\n\nBring me something real.");

  async function send() {
    if (!input.trim()) return;

    const res = await fetch('/api/nova', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: input })
    });

    const data = await res.json();

    setStream(data.reply);
    setInput('');
  }

  return (
    <main style={styles.main}>
      <div style={styles.stream}>{stream}</div>

      <div style={styles.inputWrap}>
        <input
          style={styles.input}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && send()}
          placeholder="..."
        />
      </div>
    </main>
  );
}

const styles = {
  main: {
    height: '100vh',
    background: '#05070d',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '40px'
  },
  stream: {
    fontSize: '22px',
    lineHeight: '1.7',
    maxWidth: '800px'
  },
  inputWrap: {
    marginTop: '40px'
  },
  input: {
    width: '100%',
    padding: '18px',
    fontSize: '16px',
    background: 'rgba(255,255,255,0.05)',
    border: 'none',
    borderRadius: '20px',
    color: 'white'
  }
};
