function mergeIntervals(intervals) {
  if (intervals.lenght === 0) return [];
  intervals.sort((a, b) => a[0] - b[0]);
  const mergedInterval = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    const currentInterval = intervals[i];
    const previousInterval = mergedInterval[mergedInterval.length - 1];
    if (currentInterval[0] <= previousInterval[1]) {
      previousInterval[1] = Math.max(currentInterval[1], previousInterval[1]);
    } else {
      mergedInterval.push(currentInterval);
    }
  }

  return mergedInterval;
}

module.exports =  mergeIntervals;
