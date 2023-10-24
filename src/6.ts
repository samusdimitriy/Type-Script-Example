type AdminType = {
  type: "admin";
  name: string;
  privileges: string[];
};

type UserType = {
  type: "user";
  name: string;
  registrationDate: Date;
};

function checkUser(name: string, type: "user"): UserType;
function checkUser(
  name: string,
  type: "admin",
  privileges: string[]
): AdminType;
function checkUser(
  name: string,
  type: "admin" | "user",
  privilegesOrRegistrationDate?: string[]
): AdminType | UserType {
  if (type === "admin") {
    return {
      type,
      name,
      privileges: privilegesOrRegistrationDate as string[],
    };
  } else {
    return {
      type,
      name,
      registrationDate: new Date(),
    };
  }
}

const user = checkUser("John", "user");
const admin = checkUser("John", "admin", ["create-server"]);

console.log(user); //
console.log(admin); // {}

export {};
