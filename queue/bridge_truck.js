function solution(bridgeLength, weight, truckWeights) {
  const onBridge = new Array(bridgeLength).fill(0);
  let answer = 0;
  let bridgeWeight = 0;

  while (truckWeights.length > 0 || onBridge.length > 0) {
    answer++
    const truckLeavingBridge = onBridge.shift();
    bridgeWeight -= truckLeavingBridge;

    if (truckWeights.length > 0) {  // 대기 중인 트럭이 있을 경우 에만 실행
      const nextTruckWeight = truckWeights[0];

      if (bridgeWeight + nextTruckWeight <= weight) {
        const truckEnteringBridge = truckWeights.shift();
        onBridge.push(truckEnteringBridge);
        bridgeWeight += truckEnteringBridge;
      } else {
        onBridge.push(0)
      }

    }
  }

  return answer

}

console.log(solution(2, 10, [7, 4, 5, 6]));
