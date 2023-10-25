function levelWidth(root) {
  const arr = [root, null]; // Use null as the sentinel value
  const counters = [0];

  while (arr.length > 1) {
    const node = arr.shift();

    if (node === null) {
      counters.push(0);
      arr.push(null); // Push the sentinel value
    } else if (node && node.children) {
      arr.push(...node.children);
      counters[counters.length - 1]++;
    }
  }

  return counters;
}

module.exports = levelWidth;