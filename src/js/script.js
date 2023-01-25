"use strict";
import { Course } from "./course.js";
import {
  formatDate,
  courseTagMatch,
  close_popUpInfo,
  courseStatus,
  getPopupPosition,
} from "./side_functions.js";
//#region
const js_1 = new Course(
  "The Complete JavaScript Course",
  "JavaScript",
  "Complete course from zero to expert, abordin all possible topics about JavaScript, its tools, language features and how it works behinde the scenes",
  "https://www.udemy.com/share/101Wfe3@1mQoI8kA5scivFjNEWi-JbpZLcztJ1qpkQgGjw2uWvNHKf8PQzpDPjaINLIP7fP1tg==/",
  "https://nostalgic-judge-413.notion.site/The-Complete-JavaScript-Course-8c76c6a65eee4faeb8fdcd0f30bdc3a4",
  new Date(2022, 6, 25),
  undefined,
  55,
  undefined,
  "js1"
);
//#endregion
//#region
const js_2 = new Course(
  "JavaScript FullStack Developer Bootcamp",
  "JavaScript",
  "StartSe - TechAcademy Bootcamp focused on JavaScript stack.",
  "https://www.startse.com/techacademy/",
  "https://nostalgic-judge-413.notion.site/e3500ca6f0874b578eda65ee8f8a0e17?v=514ef2972c2f48a0b189d68fa2cd2bae",
  new Date(2022, 4, 4),
  new Date(2022, 6, 8),
  100,
  "https://drive.google.com/file/d/1TnEnpndXo6PMqO1t4i77BiNCJuL0xfvG/view",
  "js2"
);
//#endregion
//#region
const cs_1 = new Course(
  "C# 10 Fundamentals",
  "C#",
  "Complete course from zero to expert, abordin all possible topics about JavaScript, its tools, language features and how it works behinde the scenes",
  "https://app.pluralsight.com/library/courses/c-sharp-10-fundamentals/table-of-contents",
  "https://nostalgic-judge-413.notion.site/C-10-Fundamentals-5d9e08c6d889425abfab6c53a8c36f27",
  new Date(2022, 11, 4),
  new Date(2022, 11, 19),
  100,
  "https://drive.google.com/file/d/1PF2VDm3Bl5N2k5nGYu3Bweq7lc5ViSL1/view?usp=share_link",
  "cs1"
);
//#endregion
//#region
const cs_2 = new Course(
  "Debugging C# 10",
  "C#",
  "Debugging is the process of identifying the root cause of an error and correcting it. In this course, Debugging C# 10, you’ll learn to debug applications written in C# using common tools and techniques. First, you’ll explore basic debugging features of Visual Studio and Visual Studio Code. Next, you’ll discover how to debug more complex defects involving data and logic errors. Finally, you’ll learn how to write code to assist with debugging your own applications and for working in a team environment. When you’re finished with this course, you’ll have the skills and knowledge of debugging needed to find and fix defects in existing code.",
  "https://app.pluralsight.com/library/courses/c-sharp-10-debugging",
  "https://nostalgic-judge-413.notion.site/Debugging-C-10-b06c5007b310431d833b141b857cbec8",
  new Date(2022, 11, 19),
  new Date(2022, 11, 21),
  100,
  "https://drive.google.com/file/d/1_237kUqVodMTfeB_-sQrxHOrS4dUwBfC/view?usp=share_link",
  "cs2"
);
//#endregion
//#region
const cs_3 = new Course(
  "Error Handling in C# 10",
  "C#",
  "Missing or incorrectly implemented error handling code can lead to data corruption, unnecessary crashes, annoyed end-users, out-of-hours support calls, and hard to maintain code. In this course, Error Handling in C# 10, you’ll learn to correctly handle runtime errors in your C# applications. First, you’ll explore what exceptions are and why we use them. Next, you’ll discover how to respond to errors that occur in your applications at runtime. Finally, you’ll learn how to throw exceptions in your own code and even how to define your own custom exception classes. When you’re finished with this course, you’ll have the skills and knowledge of C# exception handling needed to handle runtime errors in your C# applications.",
  "https://app.pluralsight.com/library/courses/error-handling-c-sharp-10",
  "https://nostalgic-judge-413.notion.site/Error-Handling-in-C-10-9cc0920845af49e6be9d85cdd92c13d0",
  new Date(2022, 11, 21),
  new Date(2022, 11, 25),
  100,
  "https://drive.google.com/file/d/10-JrZ4f02NhLjMid4EWp7lS4n05gDW5z/view?usp=share_link",
  "cs3"
);
//#endregion
//#region
const cs_4 = new Course(
  "Collections and Generics in C# 10",
  "C#",
  "Working with multitudes of objects and using generics requires understanding of programming theory and textbook algorithms. This course will teach you effective use of .NET collections and power of generalization through generic classes and methods.",
  "https://app.pluralsight.com/library/courses/c-sharp-10-collections-generics/",
  "https://nostalgic-judge-413.notion.site/Collections-and-Generics-in-C-10-5efb07bdeeb4469196f56b76f0a3475a",
  new Date(2022, 11, 25),
  new Date(2022, 11, 28),
  100,
  "https://drive.google.com/file/d/1x6L4B9eikAmAb9ep0wJPTKQh0tvtN1sE/view?usp=share_link",
  "cs4"
);
//#endregion
//#region
const cs_5 = new Course(
  "C# 10 Advanced Language Features",
  "C#",
  "Learn how to best use the advanced language features of C# . This course will teach you how to apply each of them in a real application, as well as where they are best suited.",
  "https://app.pluralsight.com/library/courses/c-sharp-10-language-features-advanced/",
  "https://nostalgic-judge-413.notion.site/C-10-Advanced-Language-Features-9d30b2d4d0634067a163b41770bf1610",
  new Date(2022, 11, 28),
  new Date(2023, 0, 17),
  100,
  "https://drive.google.com/file/d/1xBmyFBSZE4s5joQKL37Ev_p1dth8iDWH/view?usp=share_link",
  "cs5"
);
//#endregion
//#region
const cs_6 = new Course(
  "LINQ Fundamentals in C# 10",
  "C#",
  "This course teaches you how to use the LINQ syntax to select, filter, extract, partition, identify, union, join, group, and aggregate data contained in C# collections.",
  "https://app.pluralsight.com/library/courses/linq-fundamentals-csharp-10/",
  "https://nostalgic-judge-413.notion.site/LINQ-Fundamentals-in-C-10-37d69ad8d3c94fb7a31e2177c5ff15ab",
  new Date(2023, 0, 17),
  new Date(2023, 0, 21),
  100,
  "https://drive.google.com/file/d/181QJ0jNIRxb0tBVS5q0T6MebBIo_5jkR/view?usp=share_link",
  "cs6"
);
//#endregion
//#region
const cs_7 = new Course(
  "Asynchronous Programming in C# 10",
  "C#",
  "This course will teach you how to get started with asynchronous programming in .NET. You will learn how to apply these patterns in new and existing applications and you will see how to avoid the common mistakes.",
  "https://app.pluralsight.com/library/courses/c-sharp-10-asynchronous-programming/",
  ...Array(5),
  "cs7"
);
//#endregion
//#region
const cs_8 = new Course(
  "Data Access in C# 10 Fundamentals",
  "C#",
  "Learn how to consume, persist and work with data stored in a database in any type of C# application. This course will teach you the different ways to work with data access in C# and what to keep in mind when applying this in your real-world",
  "https://app.pluralsight.com/library/courses/c-sharp-10-data-access-fundamentals",
  ...Array(5),
  "cs8"
);
//#endregion
//#region
const cs_9 = new Course(
  "Working with Files in C# 10",
  "C#",
  "Reading and writing data to streams and files is central to many .NET applications, but it can be confusing. This course will teach you how to perform essential file operations and read and write text, binary, and CSV data to streams and files",
  "https://app.pluralsight.com/library/courses/c-sharp-10-working-files/",
  ...Array(5),
  "cs9"
);
//#endregion
//#region
const aspNet_1 = new Course(
  "ASP.NET Core 6 Fundamentals",
  "ASP.NET Core",
  "This course will teach you how to build modern web applications using ASP.NET Core 6.",
  "https://app.pluralsight.com/library/courses/asp-dot-net-core-6-fundamentals/",
  ...Array(5),
  "asp1"
);
//#endregion
//#region
const aspNet_2 = new Course(
  "ASP.NET Core 6 Web API Fundamentals",
  "ASP.NET Core",
  "In this course, you'll learn how to build an API with ASP.NET Core that connects to a database via Entity Framework Core from scratch.",
  "https://app.pluralsight.com/library/courses/asp-dot-net-core-6-web-api-fundamentals/",
  ...Array(5),
  "asp2"
);
//#endregion
//#region
const aspNet_3 = new Course(
  "Debugging and Error Handling in ASP.NET Core 6",
  "ASP.NET Core",
  "Code is bound to run into exceptional circumstances, which is why having effective error handling in your code is key. This course will teach you how to leverage error handling and debugging skills to make your code comprehensible and resilient.",
  "https://app.pluralsight.com/library/courses/asp-dot-net-core-6-debugging-error-handling/",
  ...Array(5),
  "asp3"
);
//#endregion
//#region
const aspNet_4 = new Course(
  "ASP.NET Core 6 Web API Deep Dive",
  "ASP.NET Core",
  "This course will teach you how to build a truly RESTful API, using deep-dive ASP.NET Core 6 concepts.",
  "https://app.pluralsight.com/library/courses/asp-dot-net-core-6-web-api-deep-dive/",
  ...Array(5),
  "asp4"
);
//#endregion
//#region
const aspNet_5 = new Course(
  "Logging and Monitoring in ASP.NET Core 6",
  "ASP.NET Core",
  "Good logging and monitoring is critical to enable support for your web applications. This course will teach you how to create helpful log entries, write them to places to support analysis, and use logs and health checks to monitor your application.",
  "https://app.pluralsight.com/library/courses/logging-monitoring-aspdotnet-core-6/",
  ...Array(5),
  "asp4"
);
//#endregion
//#region
const sql_1 = new Course(
  "Introduction to SQL",
  "SQL",
  "The vast majority of applications that use data, are backed by a good relational database system. This course will help to establish a base to those who want to begin learning Structured Query Language (SQL).",
  "https://app.pluralsight.com/library/courses/introduction-to-sql",
  ...Array(5),
  "sql1"
);
//#endregion
//#region
const ef_1 = new Course(
  "EF Core 6 Fundamentals",
  "EF Core",
  "This course will teach you how to use Entity Framework Core 6 to perform data access in your .NET applications.",
  "https://app.pluralsight.com/library/courses/ef-core-6-fundamentals/table-of-contents",
  ...Array(5),
  "ef1"
);
//#endregion
//#region
const solid_1 = new Course(
  "SOLID Principles for C# Developers",
  "SOLID",
  "Every C# developer, or any developer using an object-oriented programming language, needs a good understanding of the SOLID principles. These principles guide your design toward more loosely coupled and maintainable software.",
  "https://app.pluralsight.com/library/courses/csharp-solid-principles",
  ...Array(5),
  "solid1"
);
//#endregion
//#region
const ddd_1 = new Course(
  "Clean Architecture: Patterns, Practices, and Principles",
  "DDD",
  "In this course, you will learn about Clean Architecture, a set of modern patterns, practices, and principles for creating software architecture that is simple, understandable, flexible, testable, and maintainable.",
  "https://app.pluralsight.com/library/courses/clean-architecture-patterns-practices-principles/",
  ...Array(5),
  "solid1"
);
//#endregion
//#region
const computerScience = new Course(
  "Harvard CS50x - Int. to Computer Science",
  "Computer Science",
  "Harvard University’s introduction to the intellectual enterprises of computer science and the art of programming, for concentrators and non-concentrators alike, with or without prior programming experience. This course teaches you how to solve problems, both with and without code, with an emphasis on correctness, design, and style. Topics include computational thinking, abstraction, algorithms, data structures, and computer science more generally.",
  "https://cs50.harvard.edu/x/2023/",
  "https://nostalgic-judge-413.notion.site/6d6d8441b4594e40b206fb5eb53ab74f?v=eca4f79430cd446e88a8458d2c7b7fe9",
  new Date(2022, 3, 1),
  undefined,
  40,
  undefined,
  "ccs"
);

const arrCourses = [
  computerScience,
  js_1,
  js_2,
  cs_1,
  cs_2,
  cs_3,
  cs_4,
  cs_5,
  cs_6,
  cs_7,
  cs_8,
  cs_9,
  aspNet_1,
  aspNet_2,
  aspNet_3,
  aspNet_4,
  aspNet_5,
  sql_1,
  ef_1,
  solid_1,
  ddd_1,
];

const allCoursesObject = {
  js1: js_1,
  js2: js_2,
  cs1: cs_1,
  cs2: cs_2,
  cs3: cs_3,
  cs4: cs_4,
  cs5: cs_5,
  cs6: cs_6,
  cs7: cs_7,
  cs8: cs_8,
  cs9: cs_9,
  asp1: aspNet_1,
  asp2: aspNet_2,
  asp3: aspNet_3,
  asp4: aspNet_4,
  asp5: aspNet_5,
  ccs: computerScience,
  sql1: sql_1,
  ef1: ef_1,
  solid1: solid_1,
  ddd1: ddd_1,
};

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
export const coursesOrderedBySubject = [];
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
