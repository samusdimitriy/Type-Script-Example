type Employee = {
  name: string;
  id: number;
};

type Manager = {
  employees: Employee[];
};

type CEO = {
  name: "Tom";
  id: 1;
  employees: [
    {
      name: "John";
      id: 2;
      employees: [
        {
          name: "Jack";
          id: 3;
          employees: [];
        }
      ];
    }
  ];
};

export type Company = Employee | Manager | CEO;
