let chai = require('chai');
let chaiHttp = require('chai-http');
const expect = require('chai').expect;
const { OK , UNAUTHORIZED, FORBIDDEN } = require('../constants/httpCodes');
// DOCUMENTATION

// Test for authentication is created
// The first test brings the result OK with the user data
// The second test brings an error for not having TOKEN

chai.use(chaiHttp);

const url = 'http://localhost:3000';
let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdE5hbWUiOiJsdWNhcyIsImxhc3ROYW1lIjoiUml2YWRlbmVpcmEiLCJlbWFpbCI6ImxybGljaGFyZGlAaG90bWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYiQxMCQ5cEsuekdLcjFNMGJKNXo5U3hxcVJla0NDSVIxdHBLVmlkQU9FQnJMRjFLd0NoSlZnalJzMiIsInJvbGVJZCI6MiwiaWF0IjoxNjQ4NzY3MzA5LCJleHAiOjE2NDg4NTM3MDl9.EOXM4vxoRUGVgtMHV2fzIVMWHOkw3NKxeH9GOotYk3c';

describe(
  'Api /authentication',
  () => {
    describe('Get data user specific', () => {
      it('Should respond with json containing data user specific', (done) => {
        chai
          .request(url)
          .get('/auth/me')
          .set({ Authorization: token })
          .end((err, res) => {
            expect(res).to.have.status(OK);
            done();
          });
      });
    });
  },
  () => {
    describe('Error at get data user specific for token', () => {
      it('Should respond with json containing error for token', (done) => {
        chai
          .request(url)
          .get('/auth/me')
          .set({ Authorization: '' })
          .end((err, res) => {
            expect(err).to.have.status(FORBIDDEN);
            done();
          });
      });
    });
  }
);
