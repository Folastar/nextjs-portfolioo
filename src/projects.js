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


// pages/projects.js
export async function getServerSideProps() {
    // Fetch data or interact with an API here
    const projects = await fetch('https://api.example.com/projects')
      .then(res => res.json());
  
    return {
      props: { projects },
    };
  }
  
  export default function Projects({ projects }) {
    return (
      <div>
        <h1>My Projects</h1>
        {projects.map(project => (
          <div key={project.id}>
            <h2>{project.name}</h2>
            <Image src={project.image} alt={project.name} width={500} height={300} />
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    );
  }
  