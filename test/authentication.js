let chai = require('chai');
const app = require('../app');
let chaiHttp = require('chai-http');

chai.use(chaiHttp);
const url= 'http://localhost:3000';


describe('Get data user specific', () => {
    it('Should respond with json containing data user specific', (done) => {
      chai.request(url)
      .get('/auth/me')
      .expect(200, done);
    });
  });
  
 