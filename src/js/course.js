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
    progress = "0%",
    certificate = "🔒",
    key
  ) {
    (this.title = title),
      (this.subject = subject),
      (this.description = description),
      (this.link = link);
    this.notes = notes;
    (this.startDate = startDate),
      (this.endDate = endDate),
      (this.progress = progress),
      (this.certificate = certificate);
    (this.key = key);
  }
}

const JavaScript = new Course(
  "The Complete JavaScript Course",
  "JavaScript",
  "Complete course from zero to expert, abordin all possible topics about JavaScript, its tools, language features and how it works behinde the scenes",
  "https://www.udemy.com/share/101Wfe3@1mQoI8kA5scivFjNEWi-JbpZLcztJ1qpkQgGjw2uWvNHKf8PQzpDPjaINLIP7fP1tg==/",
  "https://nostalgic-judge-413.notion.site/The-Complete-JavaScript-Course-8c76c6a65eee4faeb8fdcd0f30bdc3a4",
  new Date(2022, 6, 25), ...Array(3),'js1'
);

const JavaScript2 = new Course(
  "The Complete JavaScript Course",
  "JavaScript",
  "Complete course from zero to expert, abordin all possible topics about JavaScript, its tools, language features and how it works behinde the scenes",
  "https://www.udemy.com/share/101Wfe3@1mQoI8kA5scivFjNEWi-JbpZLcztJ1qpkQgGjw2uWvNHKf8PQzpDPjaINLIP7fP1tg==/",
  "https://nostalgic-judge-413.notion.site/The-Complete-JavaScript-Course-8c76c6a65eee4faeb8fdcd0f30bdc3a4",
  new Date(2022, 6, 25), ...Array(3), 'js2'
);

const csharp10 = new Course(
  "C#10 Path",
  "C#",
  "Complete course from zero to expert, abordin all possible topics about JavaScript, its tools, language features and how it works behinde the scenes",
  "https://www.udemy.com/share/101Wfe3@1mQoI8kA5scivFjNEWi-JbpZLcztJ1qpkQgGjw2uWvNHKf8PQzpDPjaINLIP7fP1tg==/",
  "https://nostalgic-judge-413.notion.site/The-Complete-JavaScript-Course-8c76c6a65eee4faeb8fdcd0f30bdc3a4",
  new Date(2022, 6, 25),...Array(3), 'cs1'
);

const aspNet = new Course(
    "ASP.NET Core Path",
    "ASP.NET Core",
    "Complete course from zero to expert, abordin all possible topics about JavaScript, its tools, language features and how it works behinde the scenes",
    "https://www.udemy.com/share/101Wfe3@1mQoI8kA5scivFjNEWi-JbpZLcztJ1qpkQgGjw2uWvNHKf8PQzpDPjaINLIP7fP1tg==/",
    "https://nostalgic-judge-413.notion.site/The-Complete-JavaScript-Course-8c76c6a65eee4faeb8fdcd0f30bdc3a4",
    new Date(2022, 6, 25),...Array(3), 'asp1'
  );

const arrCourses = [JavaScript, JavaScript2, csharp10, aspNet];

const allCoursesObject = {
  'js1': JavaScript,
  'js2': JavaScript2,
  'cs1': csharp10,
  'asp1': aspNet
};

// console.log(allCoursesObject.js1)