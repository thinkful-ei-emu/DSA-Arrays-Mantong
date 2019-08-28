const  memory  = require ('./memory');
let Memory = new memory();

class myArray {
  constructor(){
    this.length = 0;
    this._capacity = 0;
    this.ptr = Memory.allocate(this.length);
  }
  push(value){
    if(this.length >= this._capacity){
      this._resize((this.length + 1) * myArray.SIZE_RATIO);
    }
    Memory.set(this.ptr + this.length, value);
    this.length++;
  }
  _resize(size){
    const oldPtr = this.ptr;
    this.ptr = Memory.allocate(size);
    if (this.ptr === null) {
      throw new Error('Out of memory');
    }
    Memory.copy(this.ptr, oldPtr, this.length);
    Memory.free(oldPtr);
    this._capacity = size;
  }
  pop() {
    if (this.length == 0) {
      throw new Error('Index error');
    }
    const value = Memory.get(this.ptr + this.length - 1);
    this.length--;
    return value;
  }
  get(index) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index error');
    }
    return Memory.get(this.ptr + index);
  }
}
myArray.SIZE_RATIO =3;
module.exports=myArray;

function main(){

  myArray.SIZE_RATIO = 3;

  // Create an instance of the Array class
  let arr = new myArray();

  // Add an item to the array
  // arr.push(3);//{length: 1, _capacity: 3, ptr: 0}
  // arr.push(5);//{length: 2, _capacity: 3, ptr: 0}
  // arr.push(15);// {length: 3, _capacity: 3, ptr: 0}
  // arr.push(19);//{length: 4, _capacity: 12, ptr: 3}
  // arr.push(45);//{length: 5, _capacity: 12, ptr: 3}
  // arr.push(10);//{length: 6, _capacity: 12, ptr: 3}

  // arr.pop();
  // arr.pop();
  // arr.pop();//{length: 3, _capacity: 12, ptr: 3}

  
  
  arr.push('tauhida');//{length: 1, _capacity: 3, ptr: 0}
  console.log(arr.get(0));//NaN, because tauhida is a string not a number
  console.log(arr);
  
}
main();

//length is 6 because pusing 5 more number in, capacity is 12 becase 3*4, ptr is 3 because
