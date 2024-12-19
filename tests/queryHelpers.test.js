const { createInfraction } = require('../backend/db/queryHelpers');

test('Should create a new infraction and return its ID', async () => {
    const newInfractionId = await createInfraction(
        'Jane Doe',
        '12345678',
        'Cheating on an exam'
    );

    expect(newInfractionId).toBeDefined(); // Check if an ID is returned
    expect(typeof newInfractionId).toBe('number'); // Verify the ID is a number
});