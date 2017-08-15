function findMinDistance(array) {
  // 반환용 배열
  var shortests = [];
  // 최단 거리 (첫 배열 순회 때, distance 값으로 초기화)
  var minDistance = Number.MAX_VALUE;

  array.reduce(function (pre, cur) {
    // 두 점 사이 거리
    var distance = Math.abs(pre - cur);

    // 최단 거리이면 배열에 추가한다.
    if (distance === minDistance) {
      shortests.push([pre, cur]);
    }

    // 최단 거리 갱신 시, 배열 초기화.
    if (distance < minDistance) {
      minDistance = distance;

      shortests = [[pre, cur]];
    }
    
    return cur;
  });
 
  return shortests;
 }

 var array = [1, 3, 4, 8, 13, 17, 20, 23, 24];
 console.log(findMinDistance(array));

