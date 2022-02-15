 // 1씩 증가시켜서 전달할 변수
// 메시지 수신
var a = 0;

// 호출한 페이지에 1씩 증가시킨 i를 1초마다 전달한다.

setInterval(()=>postMessage (++a),300)

console.log('test');

setInterval(()=>postMessage(++a),1000);

