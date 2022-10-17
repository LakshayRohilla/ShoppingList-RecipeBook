//How a recipe should look like.
//We`ll be talking a lot about recipe so to make sure to talk about same structure(object).
export class Recipe {
  name: string = "";
  description: string = "";
  imagePath: string = "";

  constructor(name: string, desc: string, imagePath: string) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
  }
}
