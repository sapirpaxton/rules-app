class RuleManager {
    constructor() {
        this.rules = [];
    }

    update(rules) {
        foreach(rules) {
            let ruleDetails = [];
            rules.rulesDetails.forEach(rule => {
                let newRule = new Rule(rule.field, rule.operator, rule.value);
                ruleDetails.push(newRule);
            });
            this.rules.push({ruleDetails: ruleDetails, operator: rules.operator});
        }
    }

    validateRules(orderDetails) {
        // return true/false;
        let result = null;
        this.rules.forEach(rule => {
            let hasViolated = rule.operator === 'AND';
            rule.ruleDetails.forEach(ruleDetail => {
                let violate = ruleDetail.checkRule(orderDetails[ruleDetail.field])  ;
                hasViolated = rule.operator === 'OR' ? violate || hasViolated : violate && hasViolated;
            });
        });
        return result;
    }
}