'use strict';

module.exports = {
  getGroups: ctx => {
    const groups = {
      data: [
        {
          uid: 'ingredients',
          name: 'Ingredients',
          source: null,
          schema: {
            connection: 'default',
            collectionName: 'ingredients',
            description: 'Little description for ingredients group',
            attributes: {
              name: {
                type: 'string',
                required: true,
              },
              quantity: {
                type: 'float',
                required: true,
              },
              picture: {
                model: 'file',
                via: 'related',
                plugin: 'upload',
              },
            },
          },
        },
        {
          uid: 'fruits',
          name: 'Fruits',
          source: null,
          schema: {
            connection: 'default',
            collectionName: 'ingredients',
            description: 'Little description for fruits group',
            attributes: {
              name: {
                type: 'string',
                required: true,
              },
              quantity: {
                type: 'float',
                required: true,
              },
              picture: {
                model: 'file',
                via: 'related',
                plugin: 'upload',
              },
            },
          },
        },
        {
          uid: 'cars',
          name: 'Cars',
          source: null,
          schema: {
            connection: 'default',
            collectionName: 'cars',
            description: 'Little description for cars group',
            attributes: {
              name: {
                type: 'string',
                required: true,
              },
            },
          },
        },
        //...
      ],
      error: {}, // to be defined I don't know yet | null when no error
    };

    ctx.send(groups);
  },

  getGroup: ctx => {
    const group = {
      data: {
        uid: 'ingredients',
        name: 'Ingredients',
        schema: {
          connection: 'default',
          collectionName: 'ingredients',
          attributes: {
            name: {
              type: 'string',
              required: true,
            },
            quantity: {
              type: 'float',
              required: true,
            },
            picture: {
              model: 'file',
              via: 'related',
              plugin: 'upload',
            },
          },
        },
      },
      error: {}, // to be defined I don't know yet | null when no error
    };

    ctx.send(group);
  },
};