// 快速排序
const  { Compare, defaultCompare, swap } = 	require('../util');

// 把数组分成以“基准”分成两边, 一边大于“基准”, 一边小于“基准”, 最后返回基准的索引, 用于做下一次的数组切割
function partition(array, left, right, compareFn) {
  const pivot = array[Math.floor((right + left) / 2)];
  let i = left;
  let j = right;

  while (i <= j) {
	// 左边的值小于“基准”, 则移动左边的索引
    while (compareFn(array[i], pivot) === Compare.LESS_THAN) {
      i++;
    }
	// 右边的值大于“基准”, 则移动右边的索引
    while (compareFn(array[j], pivot) === Compare.BIGGER_THAN) {
      j--;
    }
	// 不是上面两种, 就交换 两边的值
    if (i <= j) {
      swap(array, i, j);
      i++;
      j--;
    }
  }
  return i;
}
function quick(array, left, right, compareFn) {
  let index;
  if (array.length > 1) {
    index = partition(array, left, right, compareFn);
    if (left < index - 1) {
      quick(array, left, index - 1, compareFn);
    }
    if (index < right) {
      quick(array, index, right, compareFn);
    }
  }
  return array;
}
function quickSort(array, compareFn = defaultCompare) {
  return quick(array, 0, array.length - 1, compareFn);
}

console.log(quickSort([1,4,25,5,34,8]))
