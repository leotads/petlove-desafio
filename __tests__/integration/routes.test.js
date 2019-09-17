const request = require('supertest')
const app = require('../../server');

describe('Verifica as rotas da aplicação', () => {
  it('Verifica se a rota / esta retornando status 200', async () => {
    const response = await request(app).get('/');

    expect(response.status).toEqual(200);
  });

  it('Verifica se a rota /rankingdoppelgangers esta retornando status 200', async () => {
    const response = await request(app).get('/rankingdoppelgangers');

    expect(response.status).toEqual(200);
  })
});