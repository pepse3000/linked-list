import LinkedList from "./linkedlist.js";

let list = new LinkedList();
list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

list.toString();

list.prepend("cow");