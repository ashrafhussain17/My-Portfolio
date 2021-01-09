module.exports = {
  siteTitle: 'Md Ashraf Hussain | Software Engineer',
  siteDescription:
    'Md Ashraf Hussain is a full stack software engineer based in Dhaka, Bangladesh who specializes in building exceptional websites, applications, and everything in between.',
  siteKeywords:
    'Ashraf Hussain, Ashraf, Hussain, ashrafhussain17, software engineer, back-end engineer, web developer, javascript, typescript',
  siteUrl: 'ashrafhussain.me',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Md Ashraf Hussain',
  location: 'Dhaka, Bangladesh',
  email: 'ashrafhussain.2317.csedu@gmail.com',
  github: 'https://github.com/ashrafhussain17',
  twitterHandle: '@introvert1723',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/ashrafhussain17',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/ashraf-hussain-0a13a9148/',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/pagolno3',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/introvert1723',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
