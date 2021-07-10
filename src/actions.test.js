import {
  CHANGE_SEARCHFIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
 } from './constants';
 import * as actions from './actions';
 import configureMockStore from 'redux-mock-store';
 import thunkMiddleware from 'redux-thunk';
 import nock from 'nock';

 describe('Actions File', () => {
     const mockStore = configureMockStore([thunkMiddleware]);
     it('should create an action to search robots', () => {
         const text = 'wooo';
         const expectedAction = {
             type: CHANGE_SEARCHFIELD,
             payload: text
         };
       expect(actions.setSearchField(text)).toEqual(expectedAction);
     });

    it('handles requesting robots API', () => {
        const store = mockStore();
        store.dispatch(actions.requestRobots()); 
        const action = store.getActions();
        const expectedAction = {
            type: REQUEST_ROBOTS_PENDING
        }
        expect(action[0]).toEqual(expectedAction);
    });

    it('handles requesting robots API success', async () => {
        expect.assertions(1);
        const store = mockStore();
        const scope = nock('https://jsonplaceholder.typicode.com')
        .get('/users')
        .query({})
        .reply(200,[{
                        "id": 1,
                        "name": "Leanne Graham",
                        "username": "Bret"
                    }]);
        const expectedAction = {
                        type: REQUEST_ROBOTS_SUCCESS,
                        payload: [{
                            "id": 1,
                            "name": "Leanne Graham",
                            "username": "Bret"
                        }]};

        return store.dispatch(actions.requestRobots()).then(() => {
            scope.done();
            const action = store.getActions();
            expect(action[1]).toEqual(expectedAction);
        }); 
    });

    it('handles requesting robots API failure', async () => {
        expect.assertions(1);
        const store = mockStore();
        const scope = nock('https://jsonplaceholder.typicode.com')
        .get('/users')
        .query({})
        .replyWithError({
            error: 'something awful happened'
          });
        const expectedAction = {
                        type: REQUEST_ROBOTS_FAILED,
                        payload: {
                            message: 'request to https://jsonplaceholder.typicode.com/users failed, reason: undefined',
                            type: 'system',
                            errno: undefined,
                            code: undefined
                        }
                    }

        return store.dispatch(actions.requestRobots()).then(() => {
            scope.done();
            const action = store.getActions();
            expect(action[1]).toEqual(expectedAction)
        }); 
    });
 });