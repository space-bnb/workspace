const request = require ('supertest')
const app = require ('../server/server');

describe('Post Endpoints', () => {

  afterAll(done => {
    app.close();
    mongoose.connection.close();
    done();
  });

  it('should receive all seeded records from /workspaces', async (done) => {
    try {
      const response = await request(app).get('/workspace-api/workspaces');
      expect(Array.isArray(response.body)).toEqual(true);
      expect(response.body.length).toEqual(100);
      done();
    }
    catch (err) { done(err) }
  });

  it('should receive a single record from /workspace/:id', async (done) => {
    let id = 23;
    const response = await request(app).get(`/workspace-api/workspace/${id}`);
    try {
      expect(Array.isArray(response.body)).toEqual(true);
      expect(response.body[0].id).toEqual(23);
      let m_rate = response.body[0].membership_rate;
      expect(typeof m_rate).toBe('number');
      expect(m_rate < 1000 && m_rate > 100 || m_rate === 0).toBe(true);
      done();
    }
    catch (err) { done(err) }
    
  });

  it('should return empty array if id not found for /workspace/:id', async (done) => {
    let id = 50000;
    const response = await request(app).get(`/workspace-api/workspace/${id}`);
    try {
      expect(Array.isArray(response.body)).toEqual(true);
      expect(response.body.length).toEqual(0);
      done();
    }
    catch (err) { done(err) }
  });

});
