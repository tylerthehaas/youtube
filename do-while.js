const moment = require("moment");

const getDatesToHighlight = date => {
  const startDate = moment(date).startOf("week");
  const endDate = moment(date).endOf("week");
  let dates = [];

  do {
    dates.push(startDate.clone().toDate());
  } while (startDate.add(1, "day").diff(endDate) < 1);

  return dates;
};

console.log(getDatesToHighlight(new Date()));
