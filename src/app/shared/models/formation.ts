export class Formation {
    public id?: number;
    public title: string;
    public description?: string;

    public mapToFormation(model){
 //       let formation = new Formation();
        this.id = model.id;
        this.title = model.title;
        this.description = model.description;
        //return this;
    }
}
