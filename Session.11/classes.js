class Animal {
    constructor(name) {
      this.name = name;
    }
  
    speak() {
      return `${this.name} makes a noise.`;
    }
  }
  
  class Dog extends Animal {
    constructor(name) {
      super(name); // Call parent constructor
    }
  
    speak() {
      return `${super.speak()} ${this.name} barks!`;
    }
  }

  class Cat extends Animal {
    constructor(name) {
      super(name); // Call parent constructor
    }
  
    speak() {
      return `${super.speak()} ${this.name} Meows!`;
    }
  }
  const cat = new Cat("Loki");
  const dog = new Dog("Rex");
  console.log(dog.speak()); // "Rex makes a noise. Rex barks!"
  console.log(cat.speak()); // "Rex makes a noise. Loki Meows!"