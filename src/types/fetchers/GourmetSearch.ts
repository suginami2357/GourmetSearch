export type GourmetSearch = {
  results: {
    shop: [
      {
        id: string;
        name: string;
        logo_image: string;
        name_kana: string;
        address: string;
        station_name: string;
        genre: {
          code: string;
          name: string;
        };
        urls: {
          pc: string;
        };
        photo: {
          pc: string;
        };
      }
    ];
  };
};
