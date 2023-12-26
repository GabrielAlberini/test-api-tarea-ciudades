import { pathFile } from "../database/index";
import jsonfile from "jsonfile";

interface City {
  provincias: Provincia[];
}

interface Provincia {
  nombre: string;
  capital: string;
  habitantes: number;
  superficie_km2: number;
  lugares_turisticos: Tour[];
}

interface Tour {
  nombre: string;
  tipo: string;
  atracciones: string[];
}

const getAllInfo = (): City => jsonfile.readFileSync(pathFile);

const getCitiesBySurface = (surface: number) => {
  const data = getAllInfo();

  const filteredCitiesBySurface = data.provincias
    .filter((ciudad: any) => ciudad.superficie_km2 >= surface)
    .map((ciudad) => ({
      nombre: ciudad.nombre,
      superficie_km2: ciudad.superficie_km2,
      habitantes: ciudad.habitantes,
    }));

  return filteredCitiesBySurface;
};

const getToursByCapital = (capital: string) => {
  const data = getAllInfo();

  // La Plata

  const provincia = data.provincias.find((provincia) => {
    if (provincia.capital === capital) {
      return provincia;
    }
  });

  if (!provincia) {
    return;
  }

  const atracciones = provincia.lugares_turisticos.map((lugar_turistico) => {
    return lugar_turistico.atracciones;
  });

  return atracciones;
};

export { getCitiesBySurface, getToursByCapital };
