"use strict";
export class Course {
  /*
  @Holiv: Typically in OOP we provide access modifiers to fields. In JS, the private modifier is "#"
  If you were to pursue this path, you would have to add getters and setters for each field. This would mean making changes in 
  script.js as well
  */
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
    startDate,
    endDate,
    progress = 0,
    certificate = "🔒",
    key
  ) {
    (this.title = title),
      (this.subject = subject),
      (this.description = description),
      (this.link = link),
      (this.notes = notes),
      (this.startDate = startDate),
      (this.endDate = endDate),
      (this.progress = progress),
      (this.certificate = certificate);
    this.key = key;
    this.status = this.courseStatus();
  }
  courseStatus() {
    if (this.progress === 0) {
      return "Not Started";
    } else if (this.progress > 0 && this.progress < 99) {
      return "In Progress";
    }
    return "Complete";
  }
}
