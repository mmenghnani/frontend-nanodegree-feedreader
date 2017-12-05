/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

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

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */

        /* The following test loops through each feed in the allFeeds object and checks that it has a URL defined and that the URL is not empty.*/

        it("each feed has a URL defined and is not empty",function(){
            for(var i = 0; i<allFeeds.length;i++){
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url.length).not.toBe(0);
                }
        });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */

        /* The following test loops through each feed in the allFeeds object and checks that it has a name defined and that the name is not empty.*/

         it("each feed has a name defined and is not empty",function(){
            for(var j = 0; j<allFeeds.length;j++){
                expect(allFeeds[j].name).toBeDefined();
                expect(allFeeds[j].name.length).not.toBe(0);
            }
         });
    });


    /* TODO: Write a new test suite named "The menu" */

    /* A new test suite named "The Menu"*/

    describe("The menu",function(){

        var body = document.body;

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */

        /* The following test will check if the menu element is hidden by default */
        it("menu element should be hidden by default",function(){
             expect(body.className).toContain("menu-hidden");
        });

        /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */

        var menuIcon = $('.menu-icon-link');

        //The following test is checking that the visibility changes everytime the menu icon is clicked.
        it("menu changes visibility when the menu icon is clicked",function(){
            menuIcon.click();
            expect(body.className).not.toContain("menu-hidden");

            menuIcon.click();
            expect(body.className).toContain("menu-hidden");
        });
    });

    /* TODO: Write a new test suite named "Initial Entries" */

  //Test suite for Initial Entries
    describe("Initial Entries",function(){
         beforeEach(function (done) {
            loadFeed(0, done);
        });

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
         //The following test is checking if there is atleast one .entry element
         it("loadFeed completion creates atleast one single .entry element",function(){
            expect($('.feed .entry').length).toBeGreaterThan(0);
            });
         });

    /* TODO: Write a new test suite named "New Feed Selection" */

    //Test suite for New Feed Selection
        describe("New Feed Selection",function(){
            var oldContent, newContent;
            beforeEach(function (done) {
                loadFeed(0, function () {
                    oldContent = $('.feed').text();
                    done();
                });
            });

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
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
