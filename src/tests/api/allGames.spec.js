import { expect } from 'chai';
import got from 'got';

let baseUrl;
describe('Suite tests of GET in /games', function () {
  before(function () {
    baseUrl = process.env.API_URL;
  });

  it('Should be possible to list all games', async function () {
    try {
      const { statusCode, statusMessage, body, headers } = await got.get(
        `${baseUrl}/games`,
        {
          responseType: 'json',
        },
      );

      expect(statusCode).to.equal(200);
      expect(statusMessage).to.equal('OK');
      expect(headers['content-type']).to.equal(
        'application/json; charset=utf-8',
      );
      expect(body).to.not.equal(null);
      expect(body).to.include.any.keys('game_1', 'game_2');
      expect(body.game_1).to.include.any.keys(
        'total_kills',
        'players',
        'kills',
      );
    } catch (err) {
      console.error('FAILED on CATCH of: list all games');
      console.error(`ERROR: ${err}`);
    }
  });
});
