/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */
//sdfdsf sdfsdf
/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */ 
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* The following test loops through each feed in the allFeeds object and checks that it has a URL defined and that the URL is not empty.*/

        it("each feed has a URL defined and is not empty",function(){
            allFeeds.forEach(function(feed){
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
             });

        });

        /* The following test loops through each feed in the allFeeds object and checks that it has a name defined and that the name is not empty.*/

         it("each feed has a name defined and is not empty",function(){
            allFeeds.forEach(function(feed){
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            });
         });
    });


    /* TODO: Write a new test suite named "The menu" */

    /* A new test suite named "The Menu"*/

    describe("The menu",function(){

        var body = document.body;

        /* The following test will check if the menu element is hidden by default */
        it("menu element should be hidden by default",function(){
             expect($(body).hasClass("menu-hidden")).toBe(true);
        });

        var menuIcon = $('.menu-icon-link');

        //The following test is checking that the visibility changes everytime the menu icon is clicked.
        it("menu changes visibility when the menu icon is clicked",function(){
            menuIcon.click();
            expect($(body).hasClass("menu-hidden")).toBe(false);

            menuIcon.click();
            expect($(body).hasClass("menu-hidden")).toBe(true);
        });
    });

    /* TODO: Write a new test suite named "Initial Entries" */

  //Test suite for Initial Entries
    describe("Initial Entries",function(){
         beforeEach(function (done) {
            loadFeed(0, done);
        });

    //The following test is checking if there is atleast one .entry element
         it("loadFeed completion creates atleast one single .entry element",function(){
            expect($('.feed .entry').length).toBeGreaterThan(0);
            });
         });

    //Test suite for New Feed Selection
        describe("New Feed Selection",function(){
            var oldContent, newContent;
            beforeEach(function (done) {
                loadFeed(0, function () {
                    oldContent = $('.feed').text();
                    done();
                });
            });

          //The test case will check that the new Content is different from the old Content.
             it("new feed is loaded by the loadFeed function",function(done){
                    loadFeed(1, function () {
                      newContent = $('.feed').text();
                      expect(newContent).not.toBe(oldContent);
                      done();
                });
             });
        });
}());
