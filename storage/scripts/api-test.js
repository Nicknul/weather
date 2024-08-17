const key = 'n8uIBadsqMx4UqYvGKL7l7l2Gkut99sQyvUHXQJdNhOo0pQQRE0vwEgMMYsptCZ91a4L%2Fna8hWLVrGmNkOQS5w%3D%3D';
const url = `http://apis.data.go.kr/1360000/MidFcstInfoService/getMidTa?serviceKey=${key}&numOfRows=10&pageNo=1&dataType=JSON&regId=11C20401&tmFc=202408150600`;

async function data() {
  const response = await fetch(url, { method: 'GET' });
  const b = await response.json();
  console.log(JSON.stringify(b, null, 2));
}
data();
