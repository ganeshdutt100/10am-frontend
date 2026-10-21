// async function fun(){
//     await
// }
async function loadUserValue() {
  console.log("Hello - User value - 1");
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const user = await res.json();
    console.log(user);
  } catch (err) {
    console.log(err.messaege);
  }
  console.log("final  value ");
}
loadUserValue();
