//Getting List elements
const listParent = document.querySelector(".schedule-list-wrap");

//Getting table elements
const tableHeadRow = document.querySelector(".table-head-row");
const tableBodu = document.querySelector(".table-body");

// Schedule List data
const listData = [
  {
    id: "list_1",
    level: "Beginner",
    bulletOne: "Stand with your feet hip-width apart.",
    bulletTwo:
      "Push your hips back and bend your knees until the tops of your thighs are at least parallel to the floor. Bring your arms in front of you, keep your back flat, your chest high, and your weight on your heels.",
    bulletThree:
      "Return to the standing position as quickly and powerfully as possible. Repeat for one minute and record the number of reps completed.",
  },
  {
    id: "list_2",
    level: "Intermediate",
    bulletOne:
      "Assume a push-up position, but with your weight on your forearms instead of your hands (your elbows should be directly beneath your shoulders).",
    bulletTwo:
      "Squeeze your glutes and brace your core to lock your body into a straight line from head to heels.",
    bulletThree: " Hold for as long as possible and record your max time.",
  },
  {
    id: "list_3",
    level: "Advanced",
    bulletOne: "Now explode up, reaching overhead as you jump off the floor.",
    bulletTwo:
      "Repeat as many times as you can in one minute. Record the number of reps completed.",
    bulletThree:
      "Jump your feet back into a push-up position, and then back into to a squat position.",
  },
];

// Schedule table data

const tableData = [
  {
    id: "td_1",
    headingOne: "Week Days",
    headingTwo: "Exercise Name",
    headingThree: "Exercise Duration",
    headingFour: "About Exercise",
    day: "Monday",
    title: "Upper-body strength training ",
    duration: "45 to 60 minutes",
    description:
      " Try this upper-body dumbbell workout or incorporate HIIT into your upper body training with this at-home bodyweight workout. When it comes to following an A+ weekly workout plan, just remember to change up your strength routine every three to four weeks to keep seeing results, suggests Holly Rilinger, celebrity trainer and Founder of LIFTED. ",
  },
  {
    id: "td_2",
    headingOne: "Week Days",
    headingTwo: "Exercise Name",
    headingThree: "Exercise Duration",
    headingFour: "About Exercise",
    day: "Tuesday",
    title: "Lower-body strength training ",
    duration: "30 to 60 minutes",
    description:
      "Focus on lower body strength on day two to give your upper body muscles a rest. Try this lower body fat-burning workout that uses a resistance band and dumbbells as part of your weekly workout plan.",
  },
  {
    id: "td_3",
    headingOne: "Week Days",
    headingTwo: "Exercise Name",
    headingThree: "Exercise Duration",
    headingFour: "About Exercise",
    day: "Wednesday",
    title:
      "Yoga or a low-impact activity like barre, light cycling, or swimming",
    duration: "30 to 60 minutes",
    description:
      " A low-impact workout will ensure you give your muscles time to recover before you hit the heavy weights again, but can still be a great way to burn major calories.",
  },
  {
    id: "td_4",
    headingOne: "Week Days",
    headingTwo: "Exercise Name",
    headingThree: "Exercise Duration",
    headingFour: "About Exercise",
    day: "Thursday",
    title: "HIIT ",
    duration: "20 minutes",
    description:
      '"HIIT could take dozens of forms, but a good start would be to pick something you like, like running, cycling, rowing, or dancing," says Rosante. /"Then, do it for intervals of time. Short bursts of full effort work coupled with lower-intensity work of the same move."/ (Here, score six HIIT moves from Rosane that tone in 30 seconds.)',
  },
  {
    id: "td_5",
    headingOne: "Week Days",
    headingTwo: "Exercise Name",
    headingThree: "Exercise Duration",
    headingFour: "About Exercise",
    day: "Friday",
    title: " Total-body strength training",
    duration: "30 to 60 minutes",
    description:
      "Focus on heavier compound lifts (which work tons of muscle groups) such as the deadlift, hip thrust, squat, bench press and weighted rowing movements — plus, anti-movement exercises for your core).",
  },
  {
    id: "td_6",
    headingOne: "Week Days",
    headingTwo: "Exercise Name",
    headingThree: "Exercise Duration",
    headingFour: "About Exercise",
    day: "Saturday",
    title: "Steady-state cardio ",
    duration: "Optional",
    description:
      "Steady-state cardio is still important for your health, so make sure it's a part of your workout schedule on a weekly basis",
  },
  {
    id: "td_7",
    headingOne: "Week Days",
    headingTwo: "Exercise Name",
    headingThree: "Exercise Duration",
    headingFour: "About Exercise",
    day: "Sunday",
    title: "Rest ",
    duration: "(Don't forget to foam roll and stretch!)",
    description:
      " Giving your body the time it needs to recover means you can stay in the game longer. (FYI, here's how to hack your rest day to get the most out of your exercises, including those that make up your weekly gym workout plan.)",
  },
];

let listhtml = "";
//Generate html elements based on data

async function generateList() {
  listData.map((data) => {
    listhtml += `
    <div class="schedule-list-card">
         <div class="list-btn">
          <h3>Level: ${data.level}</h3>
          <h3 class="listmore-plus">+</h3>
        </div>
        <ul class="schedule-list">
          <li>${data.bulletOne}</li>
          <li>${data.bulletTwo}</li>
          <li>${data.bulletThree}</li>
        </ul>
    </div>
    `;
  });

  listParent.innerHTML += listhtml;
}

async function addListEvent() {
  const listBtns = document.querySelectorAll(".list-btn");
  const lists = document.querySelectorAll(".schedule-list");
  //list btn handler
  listBtns.forEach((listBtn, id) => {
    listBtn.addEventListener("click", () => {
      lists[id].classList.toggle("expand-list");
    });
  });
}

let bodyhtml = "";
async function generateTableData() {
  tableData.map((data) => {
    bodyhtml += `
             <tr>
                <td> ${data.day} </td>
                <td> ${data.title} </td>
                <td> ${data.duration} </td>
                <td> ${data.description} </td>
             </tr>
        `;
  });
  tableBodu.innerHTML += bodyhtml;
}

async function callAll() {
  await generateList();
  await addListEvent();
  await generateTableData();
}

callAll();
