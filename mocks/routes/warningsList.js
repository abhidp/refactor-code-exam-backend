// Use this file only as a guide for first steps using routes. Delete it when you have added your own route files.
// For a detailed explanation regarding each routes property, visit:
// https://mocks-server.org/docs/usage/routes

// users data
const warningsListByState = [
  {
    state: 'NSW',
    warnings: ['IDN10016', 'IDN10031', 'IDN10032']
  },
  {
    state: 'QLD',
    warnings: ['IDN10016', 'IDN10031', 'IDN10032']
  },
  {
    state: 'VIC',
    warnings: ['IDN10016', 'IDN10031', 'IDN10032']
  }
];

module.exports = [
  {
    id: 'state',
    url: '/state/:id',
    method: 'GET',
    variants: [
      {
        id: 'NSW', // variant id
        type: 'json', // variant handler id
        options: {
          status: 200, // status to send
          body: warningsListByState[0].warnings // body to send
        }
      },
      {
        id: 'QLD', // variant id
        type: 'json', // variant handler id
        options: {
          status: 200, // status to send
          body: warningsListByState[1].warnings // body to send
        }
      },
      {
        id: 'VIC', // variant id
        type: 'json', // variant handler id
        options: {
          status: 200, // status to send
          body: warningsListByState[2].warnings // body to send
        }
      }
    ]
  }
];
