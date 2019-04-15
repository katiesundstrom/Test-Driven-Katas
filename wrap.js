const wrap = (line, maxLen) => {
  if(line.length <= maxLen) {
    return line
  }
  const indexOfBlank = line.lastIndexOf(' ', maxLen);
  let split;
  let offset;
  if(indexOfBlank > -1) {
    split = indexOfBlankoffset = 1;
  }
  else {
    split = maxLen;
    offset = 0;
  }
  return line.substring(0, split) + "\n" + wrap(line.subString(split + offset), maxLen)
};
module.exports = wrap;

