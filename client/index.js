axios({
  url: "http://localhost:9000/graphql",
  method: "POST",
  data: {
    query: `

      query userList{
        users{
          name
          email
          password
        }
      }

      `,
  },
  headers: {
    token: "asdjnaskdjashkj",
  },
})
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
