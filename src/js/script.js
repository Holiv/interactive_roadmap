"use strict";

//getting HTML elements
const body = document.querySelector("body");
const tree = document.querySelector(".main_tree-view");

//getting screen size
const pageWidth = window.innerWidth;
const pageHeight = window.innerHeight;

//getting mouse click coordinates
let positionX;
let positionY;
document.onmousedown = handleMousePosition;
function handleMousePosition(event) {
  positionX = event.clientX;
  positionY = event.clientY;
}

//arrays to group courses by subject
const javascript = [];
const csharp = [];
const computer_science = [];
const asp_Net = [];
const sql = [];
const ef_core = [];
const solid = [];
const ddd = [];

//Set to store the existing subjects
const subjects = new Set();
const subjectsTags = [];

//array of courses ordered by subjects to iterate and create the HTML elements
const coursesOrderedBySubject = [];
//array of HTML elements ordered by subject after iteration
const coursesOrderedBySubject_HtmlList = [];

// ------ organizing the code by function/scope

const filteringCoursesToSpecificArray = (arrayOfCourses) => {
  arrayOfCourses.forEach((element) => {
    switch (element.subject) {
      case "JavaScript":
        javascript.push(element);
        subjects.add(element.subject);
        courseTagMatch(javascript);
        break;
      case "C#":
        csharp.push(element);
        subjects.add(element.subject);
        courseTagMatch(csharp);
        break;
      case "ASP.NET Core":
        asp_Net.push(element);
        subjects.add(element.subject);
        courseTagMatch(asp_Net);
        break;
      case "Computer Science":
        computer_science.push(element);
        subjects.add(element.subject);
        courseTagMatch(computer_science);
        break;
      case "SQL":
        sql.push(element);
        subjects.add(element.subject);
        courseTagMatch(sql);
        break;
      case "EF Core":
        ef_core.push(element);
        subjects.add(element.subject);
        courseTagMatch(ef_core);
        break;
      case "SOLID":
        solid.push(element);
        subjects.add(element.subject);
        courseTagMatch(solid);
        break;
      case "DDD":
        ddd.push(element);
        subjects.add(element.subject);
        courseTagMatch(ddd);
        break;
      default:
        console.log("incorrect element");
    }
  });
  subjectsTags.push(...Array.from(subjects));
};

const generatingHtmlListForEachCourse = () => {
  const numberOfSubject = coursesOrderedBySubject.length;

  for (let i = 0; i < numberOfSubject; i++) {
    let htmlListCourses = [];
    for (let j = 0; j < coursesOrderedBySubject[i].length; j++) {
      htmlListCourses += `<li class="course_link" onclick="popUpInfo('${
        coursesOrderedBySubject[i][j].key
      }')"></a target=blank href="${coursesOrderedBySubject[i][j].link}">"${
        coursesOrderedBySubject[i][j].title
      }"</a><img src="./src/img/icons/${courseStatus(
        coursesOrderedBySubject[i][j]
      )}"></li>`;
    }
    coursesOrderedBySubject_HtmlList.push(htmlListCourses);
  }
};

const popUpInfo = (key) => {
  const course = allCoursesObject[key];

  const certificate_ok = "./src/img/icons/certificate-ok.png";
  const certificate_no = `<img style="height: 16px" src="./src/img/icons/certificate-no.png">`;
  const download_certificate = `<a href="${course.certificate}" target="blank_"><img src="${certificate_ok}"></a>`;

  close_popUpInfo();

  const popup = `
  <div class="window pop_up" style="width: 320px; top: ${
    pageWidth <= 480 ? getPopupPosition("Y") : positionY
  }px; left: ${pageWidth <= 480 ? getPopupPosition("X") : positionX}px">
    <div class="title-bar">
        <div class="title-bar-text">${course.title}</div>
        <div class="title-bar-controls">
        <button aria-label="Close" onclick="close_popUpInfo()"></button>
      </div>
    </div>
    <div class="window-body">
        <p style="margin-bottom: 8px;">${course.description}</p>
        <ul>
            <li><a href="${course.link}" target="blank_">Course Page</a></li>
            <li><a href="${
              course.notes
            }" target="blank_">Course Study Notes</a></li>
        </ul>
    </div>
        <div class="status-bar">

            <p class="status-bar-field status-bar-text">${
              formatDate(course) +
              `<img style="margin-left: 4px; height: 14px" src="./src/img/icons/${courseStatus(
                course
              )}">`
            }</p>

            <p class="status-bar-field status-bar-text progress"><span style="width: ${
              course.progress
            }%; color: ${
    course.progress < 5 ? "black" : "#c0c0c0"
  }; padding-left: 4px">${course.progress}%</span></p>

            <p class="status-bar-field status-bar-text certificate">${
              course.status === "Complete"
                ? download_certificate
                : certificate_no
            }</p>

        </div>
    </div>
  `;

  body.insertAdjacentHTML("afterend", popup);
};

const printTree = (subjectsArray, allSubjectList) => {
  for (let i = 0; i < subjectsArray.length; i++) {
    const treeList = `
                    <details ${i < 5 ? "open" : ""}>
                        <summary>${subjectsArray[i]}</summary>
                        <ul>
                            ${allSubjectList[i]}
                        </ul>
                    </details>
        `;
    tree.insertAdjacentHTML("beforeend", treeList);
  }
};

const renderApplication = () => {
  filteringCoursesToSpecificArray(arrCourses);
  generatingHtmlListForEachCourse();
  printTree(subjectsTags, coursesOrderedBySubject_HtmlList);
};

renderApplication();
