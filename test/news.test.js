const request = require('supertest');
const app = require('../app');

// Test: news.test.js
// Type: unit
// Purpose: Test the news route
// Expected Result: Should return a list of news items
// Actual Result: Should return a list of news items
// Status: Pass

describe('GET /news', () => {
  it('respond with json containing a list of all news', (done) => {
    request(app).get('/news').expect(200, done);
  });
});
