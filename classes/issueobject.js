function Issue(id, name, description, example) {

    this.id = id;
    this.name = name;
    this.description = description;
    this.example = example;


    // Methods in object

    this.displayDescription = function() {
        return this.description;
    }

    this.displayId = function() {
        return this.id;
    }

}

Issue.prototype = {

    displayIssue: function() {
        return this.name;
    },

    displayExample: function() {
        return this.example;
    }
}

const issue = new Issue(0, 'first try', 'just a test', '');
