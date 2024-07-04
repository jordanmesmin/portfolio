// jest.config.js
module.exports = {
    transform: {
      '^.+\\.[jt]sx?$': 'babel-jest', // Utilise babel-jest pour transformer les fichiers JavaScript et JSX
    },
    moduleFileExtensions: ['js', 'jsx', 'json', 'node'], // Extensions de fichiers que Jest doit reconnaître
  };
  