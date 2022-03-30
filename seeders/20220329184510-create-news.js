'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Entries', [
      {
        name: 'Proyecto Crecer',
        content: 'Proyecto Crecer es un proyecto de intervención social y nutricional, con foco en niñas y niños de 0 a 12 años y embarazadas, en situación de vulnerabilidad. Se busca promover la incorporación de prácticas saludables.',
        imageUrl: 'https://www.porloschicos.com/img/comedores/thumbs_1/bs/15.jpg',
        categoryID: 'news',
        createdAt: new Date,
        updatedAt: new Date,
      },
      {
        name: 'Tras sus Mismas Pisadas',
        content: 'Es un comedor ubicado en el barrio de La Cava al que asisten aproximadamente 80 niñas, niños y personas adultas. Actualmente reciben la ayuda de voluntarias y voluntarios que les acercan sus donaciones.',
        imageUrl: 'https://www.porloschicos.com/img/comedores/thumbs_1/bs/19.jpg',
        categoryID: 'news',
        createdAt: new Date,
        updatedAt: new Date,
      },
      {
        name: 'Crecer Juntos',
        content: 'El Instituto Asistencial "Crecer Juntos" se creó con la finalidad de dar amparo a niñas y niños de 0 a 6 años y luego extendieron la ayuda a niñas y niños de mayor edad.',
        imageUrl: 'https://www.porloschicos.com/img/comedores/thumbs_1/bs/44.jpg',
        categoryID: 'news',
        createdAt: new Date,
        updatedAt: new Date,
      },
      {
        name: 'El Arte se Comparte',
        content: 'Buscamos acompañar a las niñas y niños de 6 a 12 años en su aprendizaje, formación y desarrollo. Trabajamos en un espacio educativo no formal, en el cual puedan fortalecer sus capacidades y acceder a nuevas experiencias.',
        imageUrl: 'https://www.porloschicos.com/img/comedores/thumbs_1/bs/42.jpg',
        categoryID: 'news',
        createdAt: new Date,
        updatedAt: new Date,
      }
    ], {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Entries', null, {});
  }
};