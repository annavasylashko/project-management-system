const baseUrl = "https://powerful-bayou-25482.herokuapp.com";

export const login = (user) =>
  fetch(`${baseUrl}/auth/local`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => response.json())
    .then((body) => {
      window.localStorage.setItem("token", body.jwt);
      window.localStorage.setItem("username", body.user.username);
      window.location.href = "/";
    })
    .catch((err) => console.log(err));

export const register = (user) =>
  fetch(`${baseUrl}/auth/local/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => response.json())
    .then((body) => {
      window.localStorage.setItem("token", body.jwt);
      window.localStorage.setItem("username", body.user.username);
      window.location.href = "/";
    })
    .catch((err) => console.log(err));

export const getCards = () =>
  fetch(`${baseUrl}/cards`, {
    method: "GET",
    mode: "cors",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${window.localStorage.getItem("token")}`,
    },
  })
    .then((response) => response.json())
    .catch((err) => console.log(err));

export const createCard = (data) =>
  fetch(`${baseUrl}/cards`, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${window.localStorage.getItem("token")}`,
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .catch((err) => console.log(err));

export const updateCard = (data) =>
  fetch(`${baseUrl}/cards/${data.id}`, {
    method: "PUT",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${window.localStorage.getItem("token")}`,
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .catch((err) => console.log(err));

export const deleteCard = (id) =>
  fetch(`${baseUrl}/cards/${id}`, {
    method: "DELETE",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${window.localStorage.getItem("token")}`,
    },
  }).catch((err) => {
    console.error(err);
  });
