var expect = require("chai").expect;

//test suite
describe('sanityTest', function() {
	//test spec
	it("should run tests with npm", function() {
		function titleCase(title) {
			var titleCaseWords=[];
			var words = title.split(" ");
			words.forEach(function(word) {
				titleCaseWords.push(word[0].toUpperCase() + word.substring(1));
			});
			return titleCaseWords.join(" ");
		}

		expect(titleCase("the great mouse detective")).to.be.a('string');
		expect(titleCase("a")).to.equal("A");
		expect(titleCase("vertigo")).to.equal("Vertigo");
		expect(titleCase("the great mouse detective")).to.equal("The Great Mouse Detective");
	});
});
