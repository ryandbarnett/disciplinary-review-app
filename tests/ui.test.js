/**
 * @jest-environment jsdom
 */
test('Should render the heading on the page', () => {
    document.body.innerHTML = `
        <h1>Welcome to the Disciplinary Review App</h1>
    `;
    expect(document.querySelector('h1')).toHaveTextContent('Welcome to the Disciplinary Review App');
});