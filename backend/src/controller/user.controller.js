import {getTest} from "../model/user.model.js";

export const getTesting = async (req, res) => {
  const result = await getTest();
  return res.json(result);
}

export const getUserDetails = async (req, res) => {
  const { userId } = req.params;
  try {
    const userDetails = await getUserDetailsById(userId);
    if (!userDetails) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.json(userDetails);
  } catch (error) {
    console.error("Error fetching user details:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}