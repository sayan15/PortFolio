export class Tag{
    static readonly ANGULAR=new Tag('Angular','red');
    static readonly TYPESCRIPT = new Tag('TypeScript', 'darkred');
    static readonly PYTHON = new Tag('Python', 'pink');
    static readonly CSHARP = new Tag('C#', 'green');
    static readonly JAVA = new Tag('Java', 'orange');
    static readonly NODEJS = new Tag('Node.JS', 'brown');
    static readonly ASPNET = new Tag('ASP.NET', 'purple');
    static readonly JAVASCRIPT = new Tag('JavaScript', 'orange');
    static readonly REACT = new Tag('React', 'blue');
    static readonly Bootstrap = new Tag('Bootstrap', 'orange');
    static readonly Kotlin = new Tag('Kotlin', 'grey');
    private constructor(private readonly key:string,private readonly color:string){

    }

    toString(){
        return this.key;
    }
}