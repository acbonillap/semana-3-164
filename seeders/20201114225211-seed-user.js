'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('users', [{
            name: 'carlos',
            email: 'ejemplo@gmail.com',
            password: '$2y$08$duewr45hr8oJsKVUzVGif.svyS5MWshydtJbheCOnBUX/82lIdm8C', //micontraseña
            createdAt: new Date(),
            updatedAt: new Date()
        }]);
    },
    
    down: async(queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('users', null, {});

    }
};