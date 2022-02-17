const { add, format } = require("date-fns");
const EST = 5; // EST is 5 hours ahead of GMT.

module.exports = {
  format_date: (date) =>
    format(add(new Date(date), { hours: EST }), "MMM d, yyyy"),
};
