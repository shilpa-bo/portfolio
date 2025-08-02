import Image from 'next/image';

export default function About() {
  return (
    <div className="flex">
      <main className="ml-24 w-full p-2 bg-yellow-50 min-h-screen text-[#E00D50]">
        <div className="flex flex-col items-start text-left space-y-4 max-w-2xl pl-2">
          {/* Icon */}
          <Image
            src="/icon.png"
            alt="Shilpa&apos;s portrait"
            width={100}
            height={100}
          />

          {/* Intro Text */}
          <div className="text-base">
            <p className="font-bold mb-4 text-lg">Hi! I am Shilpa Bojjireddy</p>

            <p className="mb-4 text-base first-letter:text-5xl first-letter:font-bold first-letter:float-left first-letter:leading-none first-letter:mr-2">
              <span className="font-semibold text-[#E00D50]">I am currently an Associate Software Engineer at Tubi</span>{' '}
              and a recent UCLA graduate (Class of 2025!) with a degree in Mathematics of Computation.
              I did not start coding until my second year of college, and I definitely struggled at first.
              But over time, something clicked, and I came to enjoy the creativity and problem-solving behind it.
            </p>

            <p className="mb-4 text-base first-letter:text-5xl first-letter:font-bold first-letter:float-left first-letter:leading-none first-letter:mr-2">
              <span className="font-semibold text-[#E00D50]"> Since then, I&apos;ve explored various areas of tech. </span> I interned twice at a data protection company, where I learned a lot about cybersecurity.
              To gain broader experience, I started freelancing and currently work with All Around Children to turn raw data into meaningful business insights.
              I am also pursuing an AI/ML certification through UT Austin to strengthen my technical foundation.
            </p>

            <p className="mb-4 text-base first-letter:text-5xl first-letter:font-bold first-letter:float-left first-letter:leading-none first-letter:mr-2">
              <span className="font-semibold text-[#E00D50]">I&apos;m still figuring out where I fit in the tech world,</span>{' '}
              but I am especially drawn to EdTech, ClimateTech, and Finance.
              I am passionate about using AI to make education more accessible—particularly for students who lack access to resources.
              I also care deeply about sustainability and am curious about how technology can help people manage their money more intentionally.
            </p>

            <p className="mb-4 text-base first-letter:text-5xl first-letter:font-bold first-letter:float-left first-letter:leading-none first-letter:mr-2">
              <span className="font-semibold text-[#E00D50]">In the next few years,</span>{' '}
              I hope to pursue a masters in machine learning and get involved in research.
              At the core of everything I do is the belief that technology should make the world easier, fairer, and better for everyone.
            </p>

            <p className="mb-2">
              <span className="font-semibold text-[#E00D50]">Outside of work,</span>{' '}
              I love plants, basketball, food (both cooking and eating), yoga, and painting.
            </p>

            <p className="mt-4">
              <span className="font-semibold text-[#E00D50]">If anything in my blurb resonates with you,</span>{' '}
              feel free to reach out or connect!
            </p>

            {/* Contact Section */}
            <p className="mt-4">This is how you can contact me:</p>
            <div
              className="border-b-4 border-dotted mb-4 pb-4"
              style={{ borderColor: '#4D999D' }}
            />

            {/* Credit */}
            <p>
              This portfolio was inspired by{' '}
              <a
                href="https://jenliujenliu.com/index.html"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold hover:text-[#4D999D]"
              >
                Jen Liu
              </a>
              .
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
