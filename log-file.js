const { createLogger, transports, format, log } = require("winston");

const logger = createLogger({
  format: format.combine(format.timestamp(), format.json()),
  transports: [new transports.File({ filename: "file.log" })],
});

async function executeError(){
  try {
    throw new Error('Ops');
  } catch (error) {
    logger.error({ 
      message: error.message,
      name: error.name,
      stack: error.stack
    });
  }
} 

executeError();
