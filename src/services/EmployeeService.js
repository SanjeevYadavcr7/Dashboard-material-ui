
export const getDepartmentCollection = () => ([
    { id: '1', title: 'Development' },
    { id: '2', title: 'Marketing' },
    { id: '3', title: 'Accounting' },
    { id: '4', title: 'HR' },
])

export const getDepartmentName = (departmentId) => {
    const empList = getDepartmentCollection();
    let depName = "N/A";
    empList.some(item => {
        if(item.id === departmentId){
            depName = item.title;
            return true;    
        }
        return false;
    })
    return depName;
}


///////////////  Employee Registration  /////////////////////////////

const KEYS = {
    employees: 'employees',
    employeeId: 'employeeId'
}

// Using LocalStorage for submitting the form
export function insertEmployee(data){

    let employees = getAllEmployees();
    data['id'] = generateEmpId();
    employees.push(data);
    localStorage.setItem(KEYS.employees, JSON.stringify(employees));
}

export function generateEmpId(){

    // for first employee key will not be set hence setting the key
    if(localStorage.getItem(KEYS.employeeId) == null)
        localStorage.setItem(KEYS.employeeId, '0');
    
    var id = parseInt(localStorage.getItem(KEYS.employeeId));
    localStorage.setItem(KEYS.employeeId, (++id).toString());
    
    return id;
}

export function getAllEmployees(){
    
    // if no employees are present then returning empty array
    if(localStorage.getItem(KEYS.employees) == null)
        localStorage.setItem(KEYS.employees, JSON.stringify([]));
    
    return JSON.parse(localStorage.getItem(KEYS.employees));
}

///////////////////////////////////////////////////////////////
