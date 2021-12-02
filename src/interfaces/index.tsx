interface IStock {
  Name: string;
  Description: string;
  MarketCapitalization: number;
  Address: string;
}

interface IMatches {
  [key: string]: string;
}

interface IBestMatches {
  bestMatches: IMatches[];
}

export type { IBestMatches, IStock, IMatches };
