let search = [];
let contRow = document.getElementById("api-row");
let input = document.getElementById("test");
let button = document.querySelector("button");
input.addEventListener("change", function () {
  displayPst(input.value);
});
function displayPost() {
  let row = "";
  for (let a = 0; a <= posts.length; a++) {
    row += `<div class="col-md-4">
                  <img src="${
                    posts[a]?.urlToImage
                  }" style="width:100%; height:250px;">
                    <h6 class="text-danger">${posts[a]?.title}</h6>
              
                    <p>${posts[a]?.description?.slice(0, 100)}</p>
                    <a href="${posts[a]?.url}" class="btn-danger btn">see more</a>
                    </div>`;
  }
  contRow.innerHTML = row;
}
async function displayPst(country) {
  let res = await fetch (
    `https://newsapi.org/v2/top-headlines?country=${country}&category=business&apiKey=c3d80d0f9960495b9d0a982757e3cabe`
  );
  let fin = await res.json();
  posts = fin.articles;
  displayPost();
  console.log(fin);
}
displayPst("us");

