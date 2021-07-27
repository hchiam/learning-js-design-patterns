const Model = {
  init: function () {
    // if (!localStorage.cats) {
    //   localStorage.cats = JSON.stringify([]);
    // }
  },

  cats: [
    {
      name: "Cat 1",
      picture:
        "https://lh3.ggpht.com/kixazxoJ2ufl3ACj2I85Xsy-Rfog97BM75ZiLaX02KgeYramAEqlEHqPC3rKqdQj4C1VFnXXryadFs1J9A=s0#w=640&h=496",
      clicks: 0,
      // photo cred: https://www.flickr.com/photos/chewie/2290467335
    },
    {
      name: "2 Cats",
      picture:
        "https://lh5.ggpht.com/LfjkdmOKkGLvCt-VuRlWGjAjXqTBrPjRsokTNKBtCh8IFPRetGaXIpTQGE2e7ZCUaG2azKNkz38KkbM_emA=s0#w=640&h=454",
      clicks: 2,
      // photo cred: https://www.flickr.com/photos/jetske
    },
    {
      name: "Cat 3",
      picture:
        "https://lh3.ggpht.com/nlI91wYNCrjjNy5f-S3CmVehIBM4cprx-JFWOztLk7vFlhYuFR6YnxcT446AvxYg4Ab7M1Fy0twaOCWYcUk=s0#w=640&h=426",
      clicks: 0,
      // photo cred: https://www.flickr.com/photos/poplinre/625069434/in/photostream/
    },
    {
      name: "Cat Anatomy",
      picture:
        "https://upload.wikimedia.org/wikipedia/commons/5/5a/Scheme_cat_anatomy.svg",
      clicks: -1,
    },
    {
      name: "Many Cats",
      picture:
        "https://upload.wikimedia.org/wikipedia/commons/0/0b/Cat_poster_1.jpg",
      clicks: 0,
    },
  ],
};

const View = {
  init: function () {
    const cats = Octopus.getCats();
    View.listCats(cats);
  },

  listCats: function (cats) {
    cats.forEach((cat) => {
      const catName = cat.name ?? "Cat";

      const button = document.createElement("button");
      button.innerText = catName;

      button.addEventListener("click", () => {
        View.showCats([cat]);
      });

      document.body.querySelector("section.buttons").appendChild(button);
    });
  },

  showCats: function (catsArray) {
    const main = document.body.getElementsByTagName("main")[0];
    main.querySelectorAll(".cat").forEach((cat) => cat.remove());

    main.classList.add("loading");

    catsArray.forEach((cat, i) => {
      const container = document.createElement("div");
      container.classList.add("cat");

      const catName = cat.name ?? "Cat";

      const img = document.createElement("img");
      img.src = cat.picture;
      img.alt = `${catName}: click to increase the count`;
      img.tabIndex = "0";
      img.title = img.alt;
      img.ariaLabel = img.alt;

      img.addEventListener("click", () => {
        const count = img.nextElementSibling.getElementsByClassName("count")[0];
        count.value = Number(count.value) + 1;
        cats[i].clicks = count.value;
      });

      container.appendChild(img);
      container.insertAdjacentHTML(
        "beforeend",
        `<p class="count-container">
        ${catName} Click Count:
        <input class="count" type="number" aria-label="count" value="${cat.clicks}" readonly />
      </p>`
      );

      main.appendChild(container);
    });

    main.classList.remove("loading");
  },
};

const Octopus = {
  init: function () {
    Model.init();
    View.init();
  },

  getCats: function () {
    return Model.cats;
  },
};

Octopus.init();
