import User from '../../../Tools/API/__mocks__/User.mock'
jest.mock('../../../Tools/API/User')


describe('The User API call',()=>{
    let data;
    it('returns a list of users', async()=>{
        expect.assertions(1)
        data = await User.getUsers();
        expect(data).toBeDefined();
    });
    it('has two users in its array',()=>{
        expect(data).toHaveLength(2);
    });
    it('has the user with an Id of 2',()=>{
        expect(data[1]).toHaveProperty('id', 2)
    });
    it('on user id:1 has more than 2 pure_paints',()=>{
        expect(data[0].pure_paints.length).toBeGreaterThan(2);
    });
    it('has the first_name "Tim" on user id:2',()=>{
        expect(data[1].first_name).toEqual("Tim");
    });
})