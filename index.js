class MyArray{
    constructor(){
        this.length = 0;
        //реалізувати додавання елементів масиву при створенні екземпляру
       /* for (let i=0; i<arguments.length;i++){
            this[this.length] = arguments[i];
            this.length++;
        }*/
        this.push(...arguments);  
    }
    push(){
        for (let i=0; i<arguments.length;i++){
            this[this.length] = arguments[i];
            this.length++;
        }
    }
    pop(){
        let lastItem = this[this.length-1];
        delete this[this.length -1];
        this.length--;
        return lastItem;
    }
    forEach(fn){
        for (let i=0;i< this.length;i++){
            fn(this[i]);
        }
    }
    static isArray(item){
        return item instanceof MyArray;
    }

    map(fn){
        const arr=new MyArray();
        for (let i=0;i<this.length;i++){
            arr.push(fn(this[i],i,this));
        }
        return arr;
    }

    [Symbol.iterator]() {
        let i = 0;
        return { //повертає обєкт з методом next
            next:() => ({ 
                    done: i > this.length-1,
                    value: this[i++]
            })
         }
    }
    
    flat(nestlvl=1){
       // debugger;
        const arr=new MyArray();
        for (let i=0;i<this.length;i++){
            if (MyArray.isArray(this[i]))
            {arr.push(...this[i].flat());}
            else arr.push(this[i]);
        }
        return arr;     
    }
}
/// HOMEWORK flat() 
const homework = new MyArray(42, 2, 3, 1, new MyArray(3, 2, 1, 2, new MyArray(4, 2, 1, 2) ) );

const homework2 = new MyArray(42, 2, 3, 1, new MyArray(3, 2, 1, 2,new MyArray(4, 2, 1, 2) ,8 , 51, new MyArray(8,8,44,new MyArray(9,8,7,new MyArray(55,33),78),99),64),3333 );




