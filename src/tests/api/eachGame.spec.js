import { expect } from 'chai';
import got from 'got';
import games from '../../../assets/allgames.json';

let baseUrl;
const allGamesInArray = Object.keys(games).map((k) => games[k]);

describe('Suite tests of GET in /games/:game_id', function () {
  before(function () {
    baseUrl = process.env.API_URL;
  });

  allGamesInArray.forEach((game, index) => {
    const gameIndex = index + 1;

    it(`Should be possible to validate game ID: ${gameIndex}`, async function () {
      try {
        const { statusCode, statusMessage, body, headers } = await got.get(
          `${baseUrl}/games/${gameIndex}`,
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
        expect(body).to.include.any.keys(
          'hostname',
          'version',
          'total_kills',
          'players',
          'kills',
        );
        const { hostname, version, totalKills, players, kills } = body;

        expect(hostname).to.equal(game.hostname);
        expect(version).to.equal(game.version);
        expect(totalKills).to.equal(game.totalKills);
        expect(players).to.deep.equal(game.players);
        expect(kills).to.deep.equal(game.kills);
      } catch (err) {
        console.error('FAILED on CATCH of: list game');
        console.error(`ERROR: ${err}`);
      }
    });
  });
});
