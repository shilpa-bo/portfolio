import Link from 'next/link';

export default function Experience() {
  return (
    <div className="flex">
      <main className="pt-10 ml-24 w-full p-2 bg-yellow-50 min-h-screen text-[#E00D50]">
        <h2
          className="text-2xl font-semibold border-b-4 border-dotted pb-2 mb-4"
          style={{ borderColor: '#4D999D' }}
        >
          Experience
        </h2>

        {/* Internships */}
        <h3 className="font-semibold text-[#E00D50] mb-2">Internships</h3>
        <ul className="space-y-6 text-[#E00D50]">
          <li>
            <div className="flex flex-col">
              <span>
                <Link href="https://www.commvault.com/" target="_blank" rel="noopener noreferrer" className="font-semibold hover:bold hover:text-[#4D999D] transition-colors duration-200">
                  Commvault
                </Link>{' '}
                · Software Engineering Intern
                <span className="italic font-normal text-sm ml-2">June 2024 – Oct 2024</span>
              </span>
              <ul className="list-disc ml-6 mt-2 space-y-1 text-sm">
                <li>Built a Python tool that improved continuous integration (CI) test plan efficiency by 60% using multiprocessing</li>
                <li>Recognized as a top 10 intern for business impact</li>
              </ul>
            </div>
          </li>

          <li>
            <div className="flex flex-col">
              <span>
                <Link href="https://www.commvault.com/" target="_blank" rel="noopener noreferrer" className="font-semibold hover:bold hover:text-[#4D999D] transition-colors duration-200">
                  Commvault
                </Link>{' '}
                · Software Engineering Intern
                <span className="italic font-normal text-sm ml-2">June 2023 – Sept 2023</span>
              </span>
              <ul className="list-disc ml-6 mt-2 space-y-1 text-sm">
                <li>Wrote 100+ test cases that tested deception software across multiple platforms and deployment environments</li>
                <li>Automated the deployment of deceptive assets to simulate cyberattacks across Linux and Windows environments</li>
                <li>Streamlined identity management through AWS API integration, automating user lifecycle management for 1000+ accounts</li>
              </ul>
            </div>
          </li>
        </ul>

        <div
          className="border-b-4 border-dotted mb-4 pb-4"
          style={{ borderColor: '#4D999D' }}
        />

        {/* Freelance */}
        <h2 className="font-semibold mt-4 mb-2">Freelance</h2>
        <ul className="space-y-6 text-[#E00D50]">
          <li>
            <div className="flex flex-col">
              <span>
                <Link href="https://www.allaroundchildren.com" target="_blank" rel="noopener noreferrer" className="font-semibold hover:bold hover:text-[#4D999D] transition-colors duration-200">
                  All Around Children
                </Link>{' '}
                · Data Engineer
                <span className="italic font-normal text-sm ml-2">Jan 2025 – Present</span>
              </span>
              <ul className="list-disc ml-6 mt-2 space-y-1 text-sm">
                <li>Currently developing an automated market acquisition tool to enhance targeting precision and identify high-potential expansion opportunities</li>
                <li>Saved 5 hours of admin time weekly by building a scheduling tool that forecasts staffing needs by school and role</li>
              </ul>
            </div>
          </li>

          <li>
            <div className="flex flex-col">
              <span>
                <Link href="https://www.ancile.ai//" target="_blank" rel="noopener noreferrer" className="font-semibold hover:bold hover:text-[#4D999D] transition-colors duration-200">
                  Ancile AI
                </Link>{' '}
                · QA Engineer
                <span className="italic font-normal text-sm ml-2">July 2025 – July 2025</span>
              </span>
              <ul className="list-disc ml-6 mt-2 space-y-1 text-sm">
                <li>Built the end-to-end QA test suite from scratch for a Data Security & Risk Management platform using Cypress, covering all core features and API endpoints</li>
              </ul>
            </div>
          </li>
        </ul>

        <div
          className="border-b-4 border-dotted mb-4 pb-4"
          style={{ borderColor: '#4D999D' }}
        />

        {/* Volunteering */}
        <h2 className="font-semibold mt-4 mb-2">Volunteering</h2>
        <ul className="space-y-6 text-[#E00D50]">
          <li>
            <div className="flex flex-col">
              <span>
                <Link href="https://www.rrasc.org/" target="_blank" rel="noopener noreferrer" className="font-semibold hover:bold hover:text-[#4D999D] transition-colors duration-200">
                  Round Rock Serving Center
                </Link>{' '}
                · Food Pantry Volunteer
                <span className="italic font-normal text-sm ml-2">May 2025 – August 2025</span>
              </span>
              <ul className="list-disc ml-6 mt-2 space-y-1 text-sm">
                <li>Volunteer weekly at the local food pantry: restock shelves, help families pick out groceries, organize supplies, and track inventory to ensure we meet community needs</li>
              </ul>
            </div>
          </li>

          <li>
            <div className="flex flex-col">
              <span>
                <Link href="https://superprof.com" target="_blank" rel="noopener noreferrer" className="font-semibold hover:bold hover:text-[#4D999D] transition-colors duration-200">
                  Superprof
                </Link>{' '}
                · Online Math Tutor
              </span>
              <ul className="list-disc ml-6 mt-2 space-y-1 text-sm">
                <li>I love teaching and occasionally tutor high school and college-level math. My goal is to make every session fun, clear, and approachable. I’m especially passionate about inclusive education and always try to make learning accessible to anyone who needs it.</li>
              </ul>
            </div>
          </li>

          <li>
            <div className="flex flex-col">
              <span>
                <Link href="https://ucla.edu" target="_blank" rel="noopener noreferrer" className="font-semibold hover:bold hover:text-[#4D999D] transition-colors duration-200">
                  University of California, Los Angeles
                </Link>{' '}
                · Learning Assistant
                <span className="italic font-normal text-sm ml-2">Jan 2023 – March 2025</span>
              </span>
              <ul className="list-disc ml-6 mt-2 space-y-1 text-sm">
                <li>I was a Learning Assistant for Intro Physics and Computer Science courses at UCLA, where I led discussion sections, supported students during office hours, and collaborated with professors to tailor lessons to student needs.</li>
              </ul>
            </div>
          </li>
        </ul>
      </main>
    </div>
  );
}
