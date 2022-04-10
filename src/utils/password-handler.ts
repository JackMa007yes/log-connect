// eslint-disable-next-line @typescript-eslint/no-var-requires
const crypto = require('crypto');

export const md5password = (password) => {
  const md5 = crypto.createHash('md5');
  const result = md5.update(password).digest('hex');

  return result;
};
