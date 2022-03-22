const request = require('supertest');
const app = require('../app');

// Test: news.test.js
// Type: unit
// Purpose: Test the news route
// Expected Result: Should return a list of news items
// Actual Result: Should return a list of news items
// Status: Pass

describe('GET /news', () => {
  it('Respond with json containing a list of all news', (done) => {
    request(app).get('/news').expect(200, done);
  });
});

describe('GET /news/:id', () => {
  const incorrectId = 'notIDtest';

  it('Respond with json with error msg when the News does not exists', (done) => {
    request(app)
      .get(`/news/${incorrectId}`)
      .expect('Content-Type', /json/)
      .expect(404, {
        msg: `News con Id: ${incorrectId} no encontrado`,
        error: 'News not found',
      })
      .end((err) => {
        if (err) return done(err);
        done();
      });
  });
});
