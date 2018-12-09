# Hierarkia

Hierarkia is a Javascript code to avoid namespace pollution. The easy way to create namespaces hierarchy.

## Usage


```javascript
hierarkia("animals.cat", function() {
    return {
        "legs": 4
    };
}());

hierarkia("animals.getCount", function() {

    function count(){}

    return {
        count: count
    };
});

hierarkia("animals.dog", function() {

    function count(){}

    return {
        count: count
    };
}());
```

## Result


![browser result](https://github.com/bitbaso/hierarkia/blob/master/screenshot/hierarkiaBrowser.jpg)

## License
[MIT](https://choosealicense.com/licenses/mit/)