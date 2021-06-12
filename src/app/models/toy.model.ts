export class Toy {
  public toyName: string;
  public toyType: string;
  public toyAvailable: boolean;
  public toyYearRelease: number;
  public toyUrlImage: string;

  constructor(name: string,
              type: string,
              toyAvailable: boolean,
              toyYearRelease: number,
              toyUrlImage: string
              ){
    this.toyName = name;
    this.toyType = type;
    this.toyAvailable = toyAvailable;
    this.toyYearRelease = toyYearRelease;
    this.toyUrlImage = toyUrlImage;
  }
}
