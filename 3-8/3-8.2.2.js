const employees = new Map([
    ["Anton", "AQA"],
    ["Anya", "HR"],
    ["Ihar", "AQA"],
    ["Diana", "HR"]
]);

const departments = new Map();

employees.forEach((department, employee) => {
    if (!departments.has(department)) {
        departments.set(department, []);
    }
    departments.get(department).push(employee);
});

console.log(departments);
