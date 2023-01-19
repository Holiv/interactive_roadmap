"use strict";

const getPopupPosition = (position) => {
  let mobilePositionX;
  let mobilePositionY;

  mobilePositionX = (pageWidth - 320) / 2;
  mobilePositionY = pageHeight / 2;

  switch (position) {
    case "X":
      return mobilePositionX;
    case "Y":
      return mobilePositionY;
  }
};

const close_popUpInfo = () => {
  const open_popup = document.querySelector(".pop_up");
  if (open_popup) {
    open_popup.remove();
  }
};

const courseTagMatch = (course) => {
  coursesOrderedBySubject.includes(course) ||
    coursesOrderedBySubject.push(course);
};

const formatDate = (courseStatus) => {
  if (courseStatus.progress === 0) {
    return courseStatus.status;
  } else if (courseStatus.progress < 100) {
    return courseStatus.startDate.toLocaleDateString("pt-BR");
  }
  return courseStatus.endDate.toLocaleDateString("pt-BR");
};

const courseStatus = (course) => {
  if (course.status === "Not Started") {
    return "notstarted.png";
  } else if (course.status === "In Progress") {
    return "inprogress.png";
  }
  return "complete.png";
};
