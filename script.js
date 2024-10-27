let tableContainer = document.getElementById("emoji_container");
let search_field = document.getElementById("search_field");

function displayEmoji(searchQuery) {
  let filteredEmoji = emojiList.filter((emoji) => {
    return (
      !searchQuery ||
      emoji.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      emoji.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      emoji.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  });

  console.log(filteredEmoji);

  tableContainer.innerHTML = "";

  filteredEmoji.forEach((emoji) => {
    let new_row = document.createElement("tr");
    let new_emoji = document.createElement("td");
    let new_aliases = document.createElement("td");
    let new_description = document.createElement("td");

    new_description.innerText = emoji.description;
    new_emoji.innerText = emoji.emoji;
    new_aliases.innerText = emoji.aliases.join(", ");

    new_row.appendChild(new_emoji);
    new_row.appendChild(new_aliases);
    new_row.appendChild(new_description);

    tableContainer.appendChild(new_row);
  });
}

window.addEventListener("load", () => displayEmoji());

search_field.addEventListener("keyup", function () {
  let searchValue = search_field.value;
  displayEmoji(searchValue);
});

let buttons = document.querySelectorAll(".btn");
buttons.forEach((button) => {
  button.addEventListener("click", function () {
    displayEmoji(button.innerText);
  });
});
