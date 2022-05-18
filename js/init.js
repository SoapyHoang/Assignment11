
async function fetchEmployees() {
    try {
        const response = await fetch('data/employees.json'); 
        return await response.json();
    } catch (error) {
        console.log(error);
    }
}