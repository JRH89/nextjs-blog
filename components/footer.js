import Link from 'next/link';

export default function Footer() {
  return (
      <footer>
          <hr />
      <nav>
        <p>
        Created by Jared Hooker using Next.js © 2023
        </p>
        <Link href="https://jaredsportfolio.netlify.app">← Back to Portfolio</Link>   
      </nav>
    </footer>
  );
}




