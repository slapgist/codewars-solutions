function greetDevelopers(list) {
    return list.map(element => {
        return {
            ...element,
            greeting: `Hi ${element.firstName}, what do you like the most about ${element.language}?`
        };
    });
}
