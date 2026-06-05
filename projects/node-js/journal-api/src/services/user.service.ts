import { getDB } from "../config/db";
import { User } from "../interfaces/User";

function getCollection() {
  return getDB().collection("users");
}

async function getUserByUsername(username: string) {
  return getCollection().findOne({
    username,
  });
}

async function createUser(user: User) {
  return getCollection().insertOne(user);
}
export { getUserByUsername, createUser };
