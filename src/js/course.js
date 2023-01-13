"use strict";

class Course {
  title; //string
  subject; //string
  description; //string
  startDate; //Date
  endDate; //Date
  progress; //%
  certificate; //file
  key;

  constructor(
    title,
    subject,
    description,
    link,
    notes,
    startDate = "Not Started",
    endDate = "In Progress",
    progress = 50,
    certificate = "🔒",
    key
  ) {
    this.title = title,
    this.subject = subject,
    this.description = description,
    this.link = link,
    this.notes = notes,
    this.startDate = startDate,
    this.endDate = endDate,
    this.progress = progress,
    this.certificate = certificate;
    this.key = key;
    this.status = this.courseStatus();
  }
  courseStatus(){
    if (this.progress === 0) {
        return "Not Started";
    } else if (this.progress > 0 && this.progress < 99) {
        return "In Progress";
    }
    return "Complete";
  }
}

const js_1 = new Course(
  "The Complete JavaScript Course",
  "JavaScript",
  "Complete course from zero to expert, abordin all possible topics about JavaScript, its tools, language features and how it works behinde the scenes",
  "https://www.udemy.com/share/101Wfe3@1mQoI8kA5scivFjNEWi-JbpZLcztJ1qpkQgGjw2uWvNHKf8PQzpDPjaINLIP7fP1tg==/",
  "https://nostalgic-judge-413.notion.site/The-Complete-JavaScript-Course-8c76c6a65eee4faeb8fdcd0f30bdc3a4",
  new Date(2022, 6, 25),
  ...Array(3),
  'js1'
);

const cs_1 = new Course(
  "C# 10 Fundamentals",
  "C#",
  "Complete course from zero to expert, abordin all possible topics about JavaScript, its tools, language features and how it works behinde the scenes",
  "https://app.pluralsight.com/library/courses/c-sharp-10-fundamentals/table-of-contents",
  "https://nostalgic-judge-413.notion.site/C-10-Fundamentals-5d9e08c6d889425abfab6c53a8c36f27",
  new Date(2022, 11, 4),
  new Date(2022, 11, 19),
  100,
  "https://app.pluralsight.com/learner/user/courses/v2/d7680953-feb2-48a0-8f74-4d3185346656/certificate",
  'cs1'
);

const cs_2 = new Course(
  "Debugging C# 10",
  "C#",
  "Debugging is the process of identifying the root cause of an error and correcting it. In this course, Debugging C# 10, you’ll learn to debug applications written in C# using common tools and techniques. First, you’ll explore basic debugging features of Visual Studio and Visual Studio Code. Next, you’ll discover how to debug more complex defects involving data and logic errors. Finally, you’ll learn how to write code to assist with debugging your own applications and for working in a team environment. When you’re finished with this course, you’ll have the skills and knowledge of debugging needed to find and fix defects in existing code.",
  "https://app.pluralsight.com/library/courses/c-sharp-10-debugging",
  "https://nostalgic-judge-413.notion.site/Debugging-C-10-b06c5007b310431d833b141b857cbec8",
  new Date(2022, 11, 19),
  new Date(2022, 11, 21),
  100,
  "https://app.pluralsight.com/learner/user/courses/v2/c3cbe931-ebbb-49dd-b36e-f464ac7c2de3/certificate",
  'cs2'
);

const cs_3 = new Course(
    "Error Handling in C# 10",
    "C#",
    "Missing or incorrectly implemented error handling code can lead to data corruption, unnecessary crashes, annoyed end-users, out-of-hours support calls, and hard to maintain code. In this course, Error Handling in C# 10, you’ll learn to correctly handle runtime errors in your C# applications. First, you’ll explore what exceptions are and why we use them. Next, you’ll discover how to respond to errors that occur in your applications at runtime. Finally, you’ll learn how to throw exceptions in your own code and even how to define your own custom exception classes. When you’re finished with this course, you’ll have the skills and knowledge of C# exception handling needed to handle runtime errors in your C# applications.",
    "https://app.pluralsight.com/library/courses/error-handling-c-sharp-10",
    "https://nostalgic-judge-413.notion.site/Error-Handling-in-C-10-9cc0920845af49e6be9d85cdd92c13d0",
    new Date(2022, 11, 21),
    new Date(2022, 11, 25),
    100,
    "https://app.pluralsight.com/learner/user/courses/v2/4dc0d11e-a1bb-4e5e-90ea-895fc47fbeed/certificate",
    'cs3'
  );

const aspNet = new Course(
    "ASP.NET Core Path",
    "ASP.NET Core",
    "Complete course from zero to expert, abordin all possible topics about JavaScript, its tools, language features and how it works behinde the scenes",
    "https://www.udemy.com/share/101Wfe3@1mQoI8kA5scivFjNEWi-JbpZLcztJ1qpkQgGjw2uWvNHKf8PQzpDPjaINLIP7fP1tg==/",
    "https://nostalgic-judge-413.notion.site/The-Complete-JavaScript-Course-8c76c6a65eee4faeb8fdcd0f30bdc3a4",
    new Date(2022, 6, 25),...Array(3), 'asp1'
  );

const arrCourses = [js_1, cs_1, cs_2, cs_3, aspNet];

const allCoursesObject = {
  'js1': js_1,
  'cs1': cs_1,
  'cs2': cs_2,
  'cs3': cs_3,
  'asp1': aspNet
};

// console.log(allCoursesObject.js1)