import Link from 'next/link';

export default function Projects() {
  const projects = [
    {
      title: 'Brewin Interpreter',
      description:
        'A C++-based interpreter built for a programming languages course. Supports lexical scoping, function calls, pass-by-value/reference, polymorphism, class-templates, and more.',
      link: 'https://github.com/shilpa-bo/brewin-interpreter',
    },
    {
      title: 'CT Image Construction',
      description:
        'Implemented CT image reconstruction algorithms using optimization techniques. Explored variational methods with l1 and l2 regularization, and used iterative algorithms like Gradient Descent and Conjugate Gradient for stable, noise-resilient recovery.',
      link: 'https://https://github.com/shilpa-bo/CT-Image-Reconstruction',
    },
    {
      title: 'Data-Driven Transit Design with Network Analysis',
      description:
        'Analyzed and modeled Chicago’s transportation system using traffic and road network data to evaluate current inefficiencies and propose a framework for transit expansion. Explored road structure, traffic flow, and network resilience. Methods included centrality analysis, origin-destination demand modeling, and metro link simulations, ultimately reinforcing concerns commonly held by Chicago residents about gaps in the existing system.',
      link: 'https://github.com/shilpa-bo/ChicagoTransportation',
    },
    {
      title: 'Byte Bod',
      description:
        'Built a full-stack social fitness platform where users can log workouts and connect with others. Designed core social features—including posts, comments, likes, and friend connections—to foster engagement. Implemented secure authentication with 2FA and password strength checks using Firebase.',
      link: 'https://github.com/AyahKash/ByteBod',
    },
    {
      title: 'Drip Tech',
      description:
        'Developed a sensor-based system to reduce water waste by detecting dripping sounds in real time. Used signal processing techniques like feature extraction and spectral analysis (C++) to classify water leaks. Built at LA Hacks and awarded Best Sustainability Hack out of 200+ projects.',
      link: 'https://devpost.com/software/driptech',
    },
  ];

  return (
    <div className="flex">
      <main className="pt-10 ml-24 w-full px-6 bg-yellow-50 min-h-screen text-[#E00D50]">
        <h2
          className="text-2xl font-semibold border-b-4 border-dotted pb-2 mb-8"
          style={{ borderColor: '#4D999D' }}
        >
          Projects
        </h2>

        {projects.map((project, index) => (
          <section key={index} className="mb-8">
            <Link
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg italic hover:bold hover:text-[#4D999D] transition-colors duration-200"
            >
              {project.title}
            </Link>
            <p className="text-sm leading-relaxed mt-1">{project.description}</p>
            <div
              className="border-b-4 border-dotted mt-4"
              style={{ borderColor: '#4D999D' }}
            />
          </section>
        ))}
      </main>
    </div>
  );
}
