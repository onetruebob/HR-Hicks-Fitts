export const HICKS_DEMO_TEST_COMPLETED = 'hicks-demo/TEST-COMPLETED';
export const HICKS_DEMO_TEST_STARTED = 'hicks-demo/TEST-STARTED';

const demoTerms = [
    // {
    //     category: 'Cephalopods',
    //     terms: ['Octopus', 'Squid']
    // },
    {
        category: 'Crustaceans',
        terms: ['Barnacle', 'Crab', 'Krill', 'Limpet', 'Lobster', 'Nautilus', 'Shrimp']
    },
    {
        category: 'Fish',
        terms: ['Clownfish', 'Cod', 'Flounder', 'Salmon', 'Sardine', 'Stergeon', 'Triggerfish', 'Trumpet', 'Tuna']
    },
    {
        category: 'Mammals',
        terms: ['Dolphin', 'Manatee', 'Otter', 'Seal', 'Walrus', 'Whale']
    },
    // {
    //     category: 'Sharks',
    //     terms: ['Bull', 'Lemon', 'Hammerhead', 'Zebra']
    // },
    {
        category: 'Birds',
        terms: ['Albatross', 'Gull', 'Penguin', 'Petrel', 'Tern']
    }
];

const initialState = {
    demoTimings: [],
    demoTerms,
    termToFind: 'Otter',
    testStartTime: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case HICKS_DEMO_TEST_COMPLETED:
            const { testName, testEnd } = action.payload;
            const demoResult = { testName, totalTime: testEnd - state.testStartTime };
            const demoTimings = [...state.demoTimings, demoResult];
            return Object.assign({}, state, { demoTimings });

        case HICKS_DEMO_TEST_STARTED:
            return Object.assign({}, state, { testStartTime: action.payload });

        default:
            return state;
    }
};

export const startTestTimer = _ => {
    return dispatch => {
        const nowMs = new Date().getTime();
        dispatch({ type: HICKS_DEMO_TEST_STARTED, payload: nowMs });
    };
};

export const endTestTimer = testName => {
    return dispatch => {
        const nowMs = new Date().getTime();
        dispatch({ type: HICKS_DEMO_TEST_COMPLETED, payload: { testName, testEnd: nowMs } });
    };
};
