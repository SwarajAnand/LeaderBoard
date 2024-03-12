const mainContainer = document.getElementById("mainContainer");
const addPlayer = document.getElementById("addPlayer");
const fName = document.getElementById("fName");
const lName = document.getElementById("lName");
const country = document.getElementById("country");
const pScore = document.getElementById("pScore");
const btn = document.getElementById("addPlayer");

let data = [
  {
    firstName: "Dhoni",
    lastName: "Maahi",
    country: "India",
    score: 1001,
  },
  {
    firstName: "Virat",
    lastName: "Kohli",
    country: "India",
    score: 1000,
  },
  {
    firstName: "Rohit",
    lastName: "Sharma",
    country: "India",
    score: 1000,
  },
];

btn.addEventListener("click", (e) => {
  e.preventDefault();

  if (
    fName.value == "" ||
    lName.value == "" ||
    country.value == "" ||
    pScore.value == ""
  ) {
    alert("Please fill all the fields");
    return;
  }

  console.log(typeof pScore.value);

  if (typeof pScore.value == "string") {
    alert("Score should be number");
    return;
  }
  let obj = {
    firstName: fName.value,
    lastName: lName.value,
    country: country.value,
    score: parseInt(pScore.value),
  };

  fName.value = "";
  lName.value = "";
  country.value = "";
  pScore.value = "";

  data.push(obj);
  updateData();
  //   console.log(obj, data);
});

const updateData = () => {
  mainContainer.innerHTML = "";
  data.sort((p1, p2) => {
    return p2.score - p1.score;
  });

  //   let eleData = "";
  data.forEach((item) => {
    let div = document.createElement("div");
    div.innerHTML = `
          <span>${item.firstName}</span>
          <span>${item.lastName}</span>
          <span>${item.country}</span>
          <span>${item.score}</span>

          <section class="buttonGroup">
            <i class="fa-solid fa-trash-can delete"></i>
            <span class="add">+ 5</span>
            <span class="sub">- 5</span>
          </section>

          `;

    mainContainer.append(div);
  });

  activeEvent();
  //   mainContainer.innerHTML = eleData;
};

const activeEvent = () => {
  document.querySelectorAll(".buttonGroup").forEach((ele, index) => {
    ele.addEventListener("click", (e) => {
      if (e.srcElement.classList.value == "add") {
        data[index].score += 5;
      } else if (e.srcElement.classList.value == "sub") {
        data[index].score -= 5;
      } else if (e.srcElement.classList[2] == "delete") {
        data.splice(index, 1);
        console.log(data);
      }

      updateData();
    });
  });
};

document.onload = updateData();
