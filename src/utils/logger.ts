import logger from "pino";
import dayjs from "dayjs";

const log = logger({
  prettyPrint: true,
  base: {
    pid: false,
  },
  timestamp: () => `,"time":"${dayjs().format("HH:mm:ss, DD-MM-YYYY")}"`,
});

export default log;
