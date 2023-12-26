import * as controller from "./controller/controller";

//   Para ejecutar el modulo 1 debería escribir por la terminar  npm run dev m1
//   Para ejecutar el modulo 2 debería escribir por la terminar  npm run dev m2 "temperatura"

const processParams = (params: string[]) => {
  switch (params[0]) {
    case "m1":
      return controller.getCitiesBySurface(Number(params[1]));
    case "m2":
      return controller.getToursByCapital(String(params[1]));
    default:
      return "Parametros incorrectos...";
  }
};

const main = (): void => {
  const params = process.argv.splice(2);

  const response = processParams(params);
  if (typeof response !== "string") {
    console.table(response.data);
  } else {
    console.log(response);
  }
};

main();
