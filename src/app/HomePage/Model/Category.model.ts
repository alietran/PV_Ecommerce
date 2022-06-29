export class Category
{

    name:string;
    description:string;
    image:string;
    slug:string;

    // id:number,
    constructor(name:string, description: string, image: string, slug: string){
      // this.id = id;
      this.name= name;
      this.description = description;
      this.image= image;
      this.slug = slug;

    }
}
