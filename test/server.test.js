const request = require('supertest');

describe('server', () => {
   let server;

  beforeEach(function () {
    server = require('../server');
  });

  // afterEach(function (done) {
  //   server.close(done);
  // });

  it('responds to /hello', function testSlash(done) {
    this.timeout(25000);
    request(server)
      .get('/hello')
      .expect(200, done);

  });

  it('404 everything else', function testPath(done) {
    request(server)
      .get('/foo/bar')
      .expect(404, done);
  });
});
