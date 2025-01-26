// src/services/api.js
import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/users";

export const fetchUsers = async () => {
  try {
    const response = await axios.get(API_URL);
    const transformedUsers = response.data.map((user) => ({
      id: user.id,
      firstName: user.name.split(" ")[0],
      lastName: user.name.split(" ")[1] || "",
      email: user.email,
      department: user.department || "",  // Ensure department exists or is empty
    }));
    return transformedUsers;
  } catch (error) {
    throw new Error("Error fetching users");
  }
};
