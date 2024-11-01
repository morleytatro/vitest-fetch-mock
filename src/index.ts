export async function testFunc() {
  return fetch('http://localhost:3000/test').then((res) => res.json());
}
