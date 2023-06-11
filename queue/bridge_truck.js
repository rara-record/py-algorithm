function solution(bridgeLength, weight, truckWeights) {
  const bridge = new Array(bridgeLength).fill(0);
  let answer = 0;
  let currentWeight = 0;

  while (truckWeights.length > 0) {
    answer++;
    let remove_truck = bridge.shift();
    currentWeight -= remove_truck;

    if (currentWeight + truckWeights[0] <= weight) {
      truck = truckWeights.shift();
      bridge.push(truck);
      currentWeight += truck;
    } else {
      bridge.push(0);
    }
  }

  return answer + bridgeLength;
}

solution(2, 10, [7, 4, 5, 6]);
