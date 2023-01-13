"use strict";

//getting HTML elements
const body = document.querySelector("body");
const tree = document.querySelector(".main_tree-view");

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
const asp_Net = [];

//Set to store the existing subjects
const subjects = new Set();
const subjectsTags = [];

//array of courses ordered by subjects to iterate and create the HTML elements
const coursesOrderedBySubject = [javascript, csharp, asp_Net];
//array of HTML elements ordered by subject after iteration
const coursesOrderedBySubject_HtmlList = [];

// ------ organizing the code by function/scope

const filteringCoursesToSpecificArray = (arrayOfCourses) => {
  arrayOfCourses.forEach((element) => {
    switch (element.subject) {
      case "JavaScript":
        javascript.push(element);
        subjects.add(element.subject);
        break;
      case "C#":
        csharp.push(element);
        subjects.add(element.subject);
        break;
      case "ASP.NET Core":
        asp_Net.push(element);
        subjects.add(element.subject);
        break;
      default:
        console.log("incorrect element");
    }
  });
  //array of subjects tags
  subjects.forEach((element) => {
    subjectsTags.push(element);
  });
};

const generatingHtmlListForEachCourse = () => {
  const numberOfSubject = coursesOrderedBySubject.length;

  for (let i = 0; i < numberOfSubject; i++) {
    let htmlListCourses = [];
    for (let j = 0; j < coursesOrderedBySubject[i].length; j++) {
      htmlListCourses += `<li class="course_link" onclick="popUpInfo('${coursesOrderedBySubject[i][j].key}')"></a target=blank href="${coursesOrderedBySubject[i][j].link}">"${coursesOrderedBySubject[i][j].title}"</a><img src="../src/img/icons/${courseStatus(coursesOrderedBySubject[i][j])}"></li>`;
    }
    coursesOrderedBySubject_HtmlList.push(htmlListCourses);
  }
};

const popUpInfo = (key) => {
  const course = allCoursesObject[key];
  console.log(course);
  console.log(positionX);
  console.log(positionY);
};

const courseStatus = (course) => {
  if (course.status === "Not Started") {
    return "notstarted.png";
  } else if (course.status === "In Progress") {
    return "inprogress.png"
  }
  return "complete.png";
};

const printTree = (subjectsArray, allSubjectList) => {
  for (let i = 0; i < subjectsArray.length; i++) {
    const treeList = `
                    <details ${i < 2 ? "open" : ""}>
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
