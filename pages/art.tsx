import Image from 'next/image';

export default function Art() {
const artPieces = [
  {
    src: '/portfolio/art1.png',
    alt: 'Chicken playing tennis',
    description: 'Chicken Playing Tennis',
  },
  {
    src: '/portfolio/art2.png',
    alt: 'Geometric Drawing of Fishies (inspired by something I saw in SF)',
    description: 'Geometric Drawing of Fishies (inspired by something I saw in SF)',
  },
    {
    src: '/portfolio/art3.png',
    alt: 'Chicken at the beach',
    description: 'Chicken at the beach',
  },
   {
    src: '/portfolio/art4.png',
    alt: 'How I imagine East Coast Fall',
    description: 'How I imagine East Coast Fall',
  },

];

  return (
    <div className="flex">
        <main className="pt-10 ml-24 w-full p-2 bg-yellow-50 min-h-screen text-[#E00D50]">
        <h2
          className="text-2xl font-semibold border-b-4 border-dotted pb-2 mb-8"
          style={{ borderColor: '#4D999D' }}
        >
          Art
        </h2>
        <p className='mb-20'>I am a very amateur artist but here are some of things I have made!</p>


        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {artPieces.map((art, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              <Image
                src={art.src}
                alt={art.alt}
                width={300}
                height={300}
                className="rounded shadow-md object-contain"
              />
              <p className="mt-2 text-sm">{art.description}</p>
            </div>
          ))}
        </div>

      </main>
    </div>
  );
}
