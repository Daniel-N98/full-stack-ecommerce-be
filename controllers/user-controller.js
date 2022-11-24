import {
  fetchUserByID,
  fetchUsers,
  patchUser,
  postUser,
} from "../models/user-model.js";

const getUsers = (request, response, next) => {
  fetchUsers()
    .then((users) => {
      response.status(200).send({ users });
    })
    .catch((error) => {
      next(error);
    });
};

const getUserByID = (request, response, next) => {
  fetchUserByID(request.params.user_id)
    .then((user) => {
      response.status(200).send({ user });
    })
    .catch((error) => {
      next(error);
    });
};

const insertUser = (request, response, next) => {
  postUser(request.body)
    .then((user) => {
      response.status(201).send({ user });
    })
    .catch((error) => next(error));
};

const updateUser = (request, response, next) => {
  patchUser(request.params.user_id, request.body)
    .then((user) => {
      response.status(200).send({ user });
    })
    .catch((error) => next(error));
};
export { getUsers, getUserByID, insertUser, updateUser };
