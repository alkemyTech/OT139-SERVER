let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app');
let db = require('../models');

// Assertion style
let should = chai.should();

chai.use(chaiHttp);

let allNewsInDB = [];

describe('News Api', () => {
  // Test the GET route /news

  describe('/GET news', () => {
    it('it should GET all the news', (done) => {
      chai
        .request(server)
        .get('/news')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          allNewsInDB = res.body;
          done();
        });
    });

    it('it should NOT GET all the news if endpoint is wrong', (done) => {
      chai
        .request(server)
        .get('/new')
        .end((err, res) => {
          res.should.have.status(404);
          done();
        });
    });
  });

  describe('/GET news/:id', () => {
    it('it should GET  the news by ID', (done) => {
      const newsId = allNewsInDB[0].id;
      chai
        .request(server)
        .get('/news/' + newsId)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('id');
          res.body.should.have.property('name');
          res.body.should.have.property('content');
          res.body.should.have.property('imageUrl');
          res.body.should.have.property('id').eql(newsId);

          done();
        });
    });

    it('it should NOT GET  the news by false ID', (done) => {
      const newsId = 9999;
      chai
        .request(server)
        .get('/news/' + newsId)
        .end((err, res) => {
          res.should.have.status(404);
          res.text.should.be.eql(
            '{"msg":"News con Id: 9999 no encontrado","error":"News not found"}'
          );
          done();
        });
    });
  });

  describe('/POST news', () => {
    it('it should POST a new News', (done) => {
      const news = {
        name: 'Test News',
        content: 'Test Content',
        imageUrl: 'Test Image',
      };
      chai
        .request(server)
        .post('/news/')
        .send(news)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.text.should.be.eql('Se ha creado correctamente');
          done();
        });
    });

    it('it should NOT POST a new News if dont have some property', (done) => {
      const news = {
        name: 'Test News',
        content: 'Test Content',
      };
      chai
        .request(server)
        .post('/news/')
        .send(news)
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          res.text.should.be.eql('Falta completar alguno de los campos');
          done();
        });
    });
  });

  describe('/PUT news/:id', () => {
    it('it should PUT a  News by ID', (done) => {
      const newsId = allNewsInDB[0].id;
      const news = {
        name: 'Test News updated',
        content: 'Test Content updated',
        imageUrl: 'Test Image updated',
      };
      chai
        .request(server)
        .put('/news/' + newsId)
        .send(news)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.text.should.be.eql('Datos actualizados correctamente');
          done();
        });
    });

    it('it should NOT PUT a  News by false  ID', (done) => {
      const newsId = 999;
      const news = {
        name: 'Test News updated',
        content: 'Test Content updated',
        imageUrl: 'Test Image updated',
      };
      chai
        .request(server)
        .put('/news/' + newsId)
        .send(news)
        .end((err, res) => {
          res.should.have.status(404);
          res.body.should.be.a('object');
          res.text.should.be.eql(
            '{"msg":"No se encontro la noticia con ID: 999"}'
          );
          done();
        });
    });
  });

  describe('/DELETE news/:id', () => {
    it('it should DELETE a  News by ID', (done) => {
      const newsId = allNewsInDB[allNewsInDB.length - 1].id;
      console.log('delete newsId: ', newsId);
      chai
        .request(server)
        .delete('/news/' + newsId)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.text.should.be.eql('{"ok":true}');
          done();
        });
    });

    it('it should NOT DELETE a  News by false  ID', (done) => {
      let newsId = allNewsInDB[0].id;
      newsId = newsId - 1;
      chai
        .request(server)
        .delete('/news/' + newsId)
        .end((err, res) => {
          res.should.have.status(404);
          res.body.should.be.a('object');
          res.text.should.be.eql('{"error":"News not found"}');
          done();
        });
    });
  });
});
