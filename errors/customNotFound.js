class CustomNOTFOUND extends Error {
  constructor(message) {
    super(message);
    this.name = 'NOTFOUNDError';
    this.statusCode = 404;
  }
}

module.exports = CustomNOTFOUND;