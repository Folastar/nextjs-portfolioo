// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to My Portfolio</h1>
      <p>Hi, I'm [Your Name], a web developer with a passion for creating beautiful websites and applications.</p>
      <nav>
        <ul>
          <li><Link href="/about"><a>About Me</a></Link></li>
          <li><Link href="/projects"><a>My Projects</a></Link></li>
          <li><Link href="/contact"><a>Contact</a></Link></li>
        </ul>
      </nav>
    </div>
  );
}
