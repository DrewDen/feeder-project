/* TODO: Write a new test suite named "The menu" */
describe('the menu', function(){
    let body = $('body');
    let callback = jasmine.createSpy("body", "toggleClass");
    let menuIconVisable = $(".menu-icon-list:visable");

    
    /* TODO: Write a test that ensures the menu element is
     * hidden by default. You'll have to analyze the HTML and
     * the CSS to determine how we're performing the
     * hiding/showing of the menu element.
     */
    it('menu element is hidden', function(){
        expect(body.hasClass('menu-hidden')).toBe(true);
        expect(callback).not.toHaveBeenCalled();
    });
});