export class Product{
    public name: string ;
    public imgUrl: string ;
    public description: string;
    public comment: string[];

    constructor(Name : string , ImgUrl : string , Description: string , Comment: string[]){
        this.name = Name;
        this.imgUrl = ImgUrl;
        this.description = Description;
        this.comment = Comment;
    }
}