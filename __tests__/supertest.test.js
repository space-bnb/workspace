const request = require ('supertest')
const app = require ('../server');

describe('Post Endpoints', () => {
  it('should receive seeded records', async (done) => {
    const response = await request(app).get('/workspace-api/workspaces')
    expect(response.body.length).toEqual(100);
    done();
  });
});
