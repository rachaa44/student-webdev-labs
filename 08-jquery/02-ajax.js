$(document).ready(() => {
  const url = "https://anapioficeandfire.com/api/books/";

  const app = document.querySelector("#books");
  app.style.paddingLeft = 0;
  const loading = document.querySelector("#loading");

  const addBookToDOM = (item) => {
    console.log(item);

    $("#books").append(
      $("<div>")
        .css({
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "20px",
        })
        .append($("<h3>").text(item.name))
        .append($("<p>").text(item.authors[0]))
        .append($("<p>").text(item.released.substr(0, 4)))
        .append($("<p>").text(`${item.numberOfPages} pages`))
    );

    // element.style.display = "flex";
    // element.style.flexDirection = "column";
    // element.style.alignItems = "center";
    // element.style.marginTop = "20px";

    // title.textContent = item.name;
    // author.textContent = `by ${item.authors[0]}`;
    // published.textContent = item.released.substr(0, 4);
    // pages.textContent = `${item.numberOfPages} pages`;
  };

  const fetchData = (url) => {
    $.ajax({
      type: "GET",
      url: url,
      success: (data) => {
        data.forEach((item) => {
          //console.log(item.name);
          addBookToDOM(item);
        });
      },
      error: (error) => {
        console.error(error);
        $("#books").append(
          $("<div>").text("An error occured. Please try again.")
        );
      },

      complete: () => {
        $("#loading").remove();
      },
    });

    // fetch(url)
    //   .then((response) => response.json())
    //   .then((data) => {
    //     data.forEach((item) => {
    //       addBookToDOM(item);
    //     });
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     let li = document.createElement("li");
    //     li.textContent = `An error occured. Please try again.`;
    //     app.append(li);
    //   })
    //   .finally(() => {
    //     app.removeChild(loading);
    //   });
  };

  fetchData(url);
});
