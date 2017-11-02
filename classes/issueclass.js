class Issue {
    constructor(id, name, description, example) {

        this.id = id;
        this.name = name;
        this.description = description;
        this.example = example;
    }

    displayDescription() {
        return this.description;
    }

    displayId() {
        return this.id;
    }

    displayIssue() {
        return this.name;
    }

    displayExample() {
        return this.example;
    }

}

const issue = new Issue(0, 'first try', 'just a test', '');

