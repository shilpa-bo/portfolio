// /**
//  * @type {import('next').NextConfig}
//  */
// const nextConfig = {
//   output: 'export',
//   distDir: 'dist',
//   images: {
//     unoptimized: true,
//   },
// }
 
// module.exports = nextConfig

/**
 * @type {import('next').NextConfig}
 */


const nextConfig = {
  basePath: '/portfolio',
  output: 'export',
// Change the output directory `out` -> `dist`
  distDir: 'dist',
  images:{
    unoptimized: true,
  }
}
 
module.exports = nextConfig