class Rule {
    constructor() {
        this.field = null; //email
        this.operator = null; //contains
        this.value = null; //hotmail.com
    }

    checkRule(value) {
        switch (this.operator) {
            case 'contains' : return value.contains(this.value);
        }
    }
}