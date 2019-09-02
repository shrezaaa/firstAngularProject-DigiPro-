export class Product{
    public name: string ;
    public imgUrl: string ;
    public description: string;
    public comment: string[];
    public price: number;
    public id : number;

    constructor(Name : string , ImgUrl : string , Description: string , Comment: string[] , Price : number ,ID : number){
        this.name = Name;
        this.imgUrl = ImgUrl;
        this.description = Description;
        this.comment = Comment;
        this.price = Price;
        this.id = ID;
    }
}