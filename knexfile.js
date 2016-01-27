module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/helpdesk_login'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

};
