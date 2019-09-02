export class Customer{

    public Fname : string;
    public Lname: string;
    public username: string;
    public password: string;
    public likedPro: number[];
    public addedPro: number[];
    public isSignin: boolean = false;
    
    constructor( fname : string, lname: string, Username: string, Password: string, LikedPro: number[],AddedPro: number[],IsSignin: boolean = false)
    {
            this.Fname = fname;
            this.Lname = lname;
            this.username = Username;
            this.password = Password;
            this.likedPro = LikedPro;
            this.addedPro = AddedPro;
            this.isSignin = IsSignin;
    }
}