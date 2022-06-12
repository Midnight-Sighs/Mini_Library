import GameList from '../../../Tools/API/__mocks__/GameList.mock'
jest.mock('../../../Tools/API/GameList')

describe('Game List Data Calls', ()=>{
    let data;
    const expectedValues = ['Warhammer 40K', 'Dungeons and Dragons']
    
    it('returns the game list mock data', async()=>{
        expect.assertions(1)
        data = await GameList.getGameList();
        expect(data).toBeDefined();
    });
    it('matches "expected values" even if there are others returned as well.',()=>{
        expect(data).toEqual(expect.arrayContaining(expectedValues));
    });
    it('has the string "Infinity"',()=>{
        expect(data).toContain("Infinity");
    });
});