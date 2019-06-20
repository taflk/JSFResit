export class Pokemon {
  cards: [
    {
      id: "string";
      name: "string";
      nationalPokedexNumber: number;
      imageUrl: "string";
      imagerUrlHiRes: "string";
      types: any;
      supertype: "string";
      subtype: "string";
      hp: "string";
      retreatCost: any;
      convertedRetreatCost: number;
      number: "string";
      artist: "string";
      rarity: "string";
      series: "string";
      set: "string";
      setCode: "string";
      attacs: [
        {
          cost: any;
          name: "string";
          text: "string";
          damage: "string";
          convertedEnergyCost: number;
        }
      ];
      weaknesses: [
        {
          type: "string";
          value: "string";
        }
      ]
    }
  ];
}