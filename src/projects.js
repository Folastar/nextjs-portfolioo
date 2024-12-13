// pages/projects.js
import Image from 'next/image';

export default function Projects() {
  return (
    <div>
      <h1>My Projects</h1>
      <div>
        <h2>Project 1</h2>
        <Image src="/project1.jpg" alt="Project 1" width={500} height={300} />
        <p>Description of project 1...</p>
      </div>
      <div>
        <h2>Project 2</h2>
        <Image src="/project2.jpg" alt="Project 2" width={500} height={300} />
        <p>Description of project 2...</p>
      </div>
    </div>
  );
}
