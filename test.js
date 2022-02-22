let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

function topSalary(salaries) {
    let topsalary = 0
    let topsalaryman = []
    for (const [aa, bb] of Object.entries(salaries)) {

        if (bb > topsalary) {
            topsalary = bb
            topsalaryman = aa
        }
    }
    return console.log(topsalaryman);
}

topSalary(salaries)