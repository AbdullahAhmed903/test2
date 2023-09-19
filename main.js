const host = "http://localhost:3300";
let products = [];
function getData() {
  axios({
    method: "get",
    url: `${host}/data`,
    headers: { "Content-Type": "application/json; charset=UTF-8" },
  })
    .then(function (response) {
      const { message, posts } = response.data;
      showData(posts);
    })
    .catch(function (error) {
      console.log(error);
    });
}

function showData(posts) {
  let cartonna = ``;
  console.log(posts[0]);
  for (let index = 0; index < posts.length; index++) {
    cartonna += `  <tr>
             <td>${posts[index].name}</td>
            //  <td>${posts[index].base_unit}</td>
            //  <td>${posts[index].buy}</td>
            //  <td>${posts[index].last}</td>
            //  <td>${posts[index].sell}</td>
            //  <td>${posts[index].volume}</td>
            //  <td>${posts[index].quote_unit}</td>
             <td>
             </td>
         </tr>`;
  }
  document.getElementById("tttt").innerHTML = cartonna;
}

getData();
