import produceData from '../../src/mockData/produce.json'

const POPULATE = 'POPULATE';

export const populateProduce = () => ({
    type: POPULATE,
    produce: produceData
});

export default function produceReducer(state = {}, action) {
    const nextState = Object.assign({}, state);

    switch (action.type) {
        case POPULATE:
            const populate = {};
            action.produce.forEach((fuckingGrocery) => {
                populate[fuckingGrocery.id] = fuckingGrocery;
            });
            // console.log(populate);
            return populate;

        default:
            return state;
    }
}