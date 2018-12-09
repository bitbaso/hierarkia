var assert = require('assert');
const hierarkia = require('../src/hierarkia');

describe('Namespace', function() {
  describe('Namespace create', function() {
    it('should has element when add one element to namespace', function() {
      hierarkia("animals", {});
      var hasProperty = global.hasOwnProperty("animals");
      assert.ok(hasProperty);
    });

    it('should has 2 elements when add elements to namespace', function() {
      hierarkia("animals.dog", {});
      var hasProperty = global.animals.hasOwnProperty("dog");
      assert.ok(hasProperty);
    });

    it('should has 2 subelements when add 2 namespaces', function() {
      hierarkia("animals.dog", {});
      hierarkia("animals.cat", {});
      var hasCatProperty = global.animals.hasOwnProperty("cat");
      var hasDogProperty = global.animals.hasOwnProperty("dog");
      assert.ok(hasCatProperty && hasDogProperty);
    });

    it('should has 3 subelements when add namespace with 3 elements', function() {
      hierarkia("animals.dog.leg", {"count":1});
      var hasProperty = global.animals.dog.hasOwnProperty("leg");
      var hasCountProperty = global.animals.dog.leg.hasOwnProperty("count");
      assert.ok(hasProperty && hasCountProperty);
    });

    it('should has 3 subelements with 2 properties when add namespace with 3 elements', function() {
      hierarkia("animals.dog.leg", {"count":1});
      hierarkia("animals.dog.leg", {"size":1});
      var hasProperty = global.animals.dog.hasOwnProperty("leg");
      var hasCountProperty = global.animals.dog.leg.hasOwnProperty("count");
      var hasSizeProperty = global.animals.dog.leg.hasOwnProperty("size");
      assert.ok(hasProperty && hasCountProperty && hasSizeProperty);
    });

  });
});