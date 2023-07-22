'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.bulkInsert(
    "Servicios",
    [
      {
        id: 1,
        nombre_servicio: "Corte cabello",
        precio_servicio: "12€",
        descripcion: "Corte adapatado y asesoramiento personalizado al estudio del ovalo facial que potencia la imagen de nuestro cliente creando estructura y movimiento del cabello."
      },
      {
        id: 2,
        nombre_servicio: "Corte cabello + cejas",
        precio_servicio: "14€",
        descripcion: "Corte adapatado y asesoramiento personalizado al estudio del ovalo facial que potencia la imagen de nuestro cliente creando estructura y movimiento del cabello + depilación y perfilado de cejas."
      },
      {
      id: 3,
        nombre_servicio: "Corte cabello + barba",
        precio_servicio: "14€",
        descripcion: "Corte adapatado y asesoramiento personalizado al estudio del ovalo facial y su morfologia para elegir que tipo de barba se adapte mejor junto a nuestro cabello."
      },
      {
        id: 4,
          nombre_servicio: "Corte cabello + barba + cejas",
          precio_servicio: "15€",
          descripcion: "Corte de cabello + afeitado y perfilado de barba + depilación y perfilado de cejas."
      },     
      {
        id: 5,
          nombre_servicio: "Corte cabello con tinte + barba",
          precio_servicio: "25€",
          descripcion: "Corte de cabello y tintado + afeitado y perfilado de barba."
      },
      {
        id: 6,
          nombre_servicio: "Corte cabello a tijera",
          precio_servicio: "16€",
          descripcion: "Corte de cabello totalmente a tijera."
      },
      {
        id: 7,
          nombre_servicio: "Corte cabello niño",
          precio_servicio: "10€",
          descripcion: "Corte de cabello a menores de 15 años."
      },
      {
        id: 8,
          nombre_servicio: "Corte cabello jubilado",
          precio_servicio: "10€",
          descripcion: "Corte de cabello a jubilado."
      },
      {
        id: 9,
          nombre_servicio: "Coloración (blanco platino)",
          precio_servicio: "40€",
          descripcion: "Coloración del cabello blanco platino."
      },
      {
        id: 10,
          nombre_servicio: "Perfilado barba",
          precio_servicio: "7€",
          descripcion: "Perfilado de la barba."
      },
      {
        id: 11,
          nombre_servicio: "Tinte de barba",
          precio_servicio: "10€",
          descripcion: "Tinte de la barba a color natural."
      },
      {
        id: 12,
          nombre_servicio: "Fade (degradado cabello)",
          precio_servicio: "10€",
          descripcion: "Degradado del cabello sin corte."
      }
    ]
   )
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
