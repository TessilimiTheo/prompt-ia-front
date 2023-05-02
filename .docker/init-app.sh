#!/bin/sh
[ ! -d "/app/node_modules" ] && npm install

if [ -z "${EXEC_ENV}" ]; then
  echo "Set Env = Prod"
  export  EXEC_ENV="production"
fi

if [ ${EXEC_ENV} == "production" ]; then
  echo "env de prod"
else
  echo "Env de Dev"
  if [ -f /app/logs/development.log ]; then
    ln -sf /dev/stderr /app/logs/development.log
  fi
  npm run start
fi
