function prom() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Hey, sou uma promise');
      resolve();
    }, 2000);
  });
}

export default async function asyn() {
  await prom();
  console.log('Terminou');
}
