var hierarkia = function (namespaceTexts, obj) {

    var dot = ".",
        tundefined = "undefined";

    add(namespaceTexts, obj);

    function add(namespaceText, objectToSet) {
        try{
            var rootObject = getRootObject();

            if (namespaceText) {
                var namespaceElementsTexts = namespaceText.split(dot);
    
                var objectNamespace = rootObject;
    
                for (var i = 0, len = namespaceElementsTexts.length; i < len; i++) {
                    var namespaceElementText = namespaceElementsTexts[i];
                    if (i == (len - 1)) {
                        objectNamespace = addNamespaceAndSet(objectNamespace, namespaceElementText, objectToSet);
                    }
                    else {
                        objectNamespace = addNamespace(objectNamespace, namespaceElementText);
                    }
                }
            }
        }
        catch(ex){
            //console.log("ERROR => namespace add");
        }
    }

    function getRootObject(){
        var outcome;
        if (typeof (window) != tundefined) {
            outcome = window;
        }
        else{
            outcome = global;
        }
        return outcome;
    }

    function addNamespace(obj, elementOfNamespace) {
        obj[elementOfNamespace] = obj[elementOfNamespace] || {};
        return obj[elementOfNamespace];
    }

    function addNamespaceAndSet(obj, elementOfNamespace, objectToSet) {
        var existingObject = obj[elementOfNamespace];

        if (existingObject) {
            var objectKeys = Object.keys(existingObject);
            if(objectKeys){
                for(var i=0,len=objectKeys.length; i<len; i++){
                    var key = objectKeys[i];
                    if(key){
                        objectToSet[key] = existingObject[key];
                    }
                }
            }
        }

        obj[elementOfNamespace] = objectToSet;
        existingObject = null;
        
        return obj[elementOfNamespace];
    }  
};

if (typeof module !== "undefined" && typeof module.exports !== "undefined"){
    module.exports = hierarkia;
}