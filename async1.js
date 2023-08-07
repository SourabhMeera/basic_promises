console.log('person1: shows ticket');
console.log('person2: shows ticket');

const preMovie = async () => {
    const promiseWifeBringTicks = new Promise((resolve, reject) => {
        setTimeout(() => resolve('ticket'), 3000);
    });

    const getPopcorn = new Promise((resolve, reject) =>  resolve(`popcorn`) );
    const addButter = new Promise((resolve, reject) =>  resolve(`butter`) );
    const getColdrink = new Promise((resolve, reject) =>  resolve(`coke`) );
  let ticket = await promiseWifeBringTicks;

    console.log(`wife: I have the ${ticket}`);
    console.log('husband: we should go in');
    console.log('wife: no i am hungry');

  let popcorn = await getPopcorn;

    console.log(`husband: I got some ${popcorn}`);
    console.log('husband: we should go in');
    console.log('wife: I need butter on my popcorn');
  
  let butter = await addButter;

  console.log(`husband: I got some ${butter} on popcorn`);
  console.log(`husband: anything else ?`);
  console.log(`wife: lets go we are getting late`);
  console.log(`husband: thank you for the reminder *grins*`);

  let coke = await getColdrink;

  console.log(`husband: I got some ${coke} also`);
  console.log(`husband: anything else ?`);
  console.log(`wife: no we get all we wnant`);



return ticket;
}

preMovie().then((m) => console.log(`person3: shows ${m}`));

console.log('person4: shows ticket');
console.log('person5: shows ticket');

