const request = require ('supertest')
const app = require ('../server/server');

describe('Post Endpoints', () => {

  afterAll(done => {
    app.close();
    mongoose.connection.close();
    done();
  });

  it('should receive all seeded records in array from /workspaces', async (done) => {
    const response = await request(app).get('/workspace-api/workspaces');
    expect(Array.isArray(response.body)).toEqual(true);
    expect(response.body.length).toEqual(100);
    done();
  });

  it('should receive a single record in array from /workspace/:id', async (done) => {
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

  it('should return 404 if id not found for /workspace/:id', async (done) => {
    let id = 50000;
    const response = await request(app).get(`/workspace-api/workspace/${id}`);
    expect(response.status).toEqual(400);
    expect(response.body).toEqual("ID not found");
    done();
  });

});