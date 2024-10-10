// jest.config.js
export default {
    transform: {
      '^.+\\.jsx?$': 'babel-jest', // Transformasi untuk JSX dan ES6
    },
    moduleFileExtensions: ['js', 'jsx'], // Mendukung file JS dan JSX
    transformIgnorePatterns: [
      "/node_modules/(?!axios)/" // Izinkan transformasi untuk axios
    ],
  };
  