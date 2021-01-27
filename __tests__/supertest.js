const request = require ('supertest')
const app = require ('../server/server');
const { initialize, close } = require('../server/db/index.js')

let server;

describe('Post Endpoints', () => {

  beforeAll(async (done) => { 
    server = await app.listen()
    await initialize(); 
    await new Promise(res => setTimeout(res, 1000)) // Timer to fix async issues with tests
    done();
  });
  
  afterAll(async (done) => {
    await server.close();
    await close();
    done();
  });

  test('should receive all seeded records in array from /workspaces', async (done) => {
    const response = await request(app).get('/workspace-api/workspaces');
    expect(Array.isArray(response.body)).toEqual(true);
    expect(response.body.length).toEqual(100);
    done();
  });

  test('should receive a single record in array from /workspace/:id', async (done) => {
    let id = 23;
    const response = await request(app).get(`/workspace-api/workspace/${id}`);
    expect(Array.isArray(response.body)).toEqual(true);
    expect(response.body.length).toEqual(1);

    expect(response.body[0].id).toEqual(23);
    let m_rate = response.body[0].membership_rate;
    expect(typeof m_rate).toBe('number');
    expect(m_rate < 1000 && m_rate > 100 || m_rate === 0).toBe(true);
    done();
  });

  test('should return 404 if id not found for /workspace/:id', async (done) => {
    let id = 50000;
    const response = await request(app).get(`/workspace-api/workspace/${id}`);
    expect(response.status).toEqual(400);
    expect(response.body).toEqual("ID not found");
    done();
  });

});