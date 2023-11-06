function printDetails(obj) {
    console.log(`Name: ${obj.name}`);
    if ("privileges" in obj) {
        console.log(`Privileges: ${obj.privileges.join(", ")}`);
    }
    if ("startDate" in obj) {
        console.log(`Start Date: ${obj.startDate.toISOString()}`);
    }
}
export {};
//# sourceMappingURL=2.js.map