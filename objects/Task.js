export default class Task{

    title: string;
    description: string;
    dueDate: string;
    amount: string;

    constructor(title, description, dueDate, amount){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.amount = amount;
    }

}