//JavaScript Basics and TDD:

describe('add', () => {
    it('adds the two numbers together', () => {
      expect(add(6, 4)).toEqual(10);
      expect(add(18, 55)).toEqual(73);
    });
  });


  describe('subtract', () => {
    it('subtracts the second number from the first', () => {
      expect(subtract(20, 1)).toEqual(19);
      expect(subtract(34, 40)).toEqual(-6);
    });
  });

  
  describe('multiply', () => {
    it('multiplies the two numbers together', () => {
      expect(multiply(25, 2)).toEqual(50);
      expect(multiply(-40, 5)).toEqual(-200);
      expect(multiply(-10, -9)).toEqual(90);
    });
  });


  describe('divide', () => {
    it('divides the first number by the second number', () => {
      expect(divide(100, 5)).toEqual(20);
      expect(divide(18, 2)).toEqual(9);
    });
  });
  
  

  describe('sumNumbers', () => {
    it('returns the sum of the numbers in the array', () => {
      expect(sumNumbers([2, 7, 10, 11, 4, 8])).toEqual(42);
      expect(sumNumbers([3, 9, 23])).toEqual(35);
    });
  });



  describe('findMax', () => {
    it('should return the maximum number in an array', () => {
        expect(findMax([1, 2, 3, 4, 5])).toBe(5);
    });
  }); 




  describe('findMin', () => {
    it('should return the minimum number in an array', () => {
        expect(findMax([1, 2, 3, 4, 5])).toBe(1);
    });
  }); 



  describe('reverseString', () => {
    it('should return the string reversed', () =>{
        expect(reverseString('Hello')).toEqual('olleH');
    });
  });



  describe('stringLength', () => {
    it('should return the length of a string', () => {
        expect(stringLength('hello')).toBe(5);
    });
});



describe('capitilizeWords', () => {
    it('makes every string in the array uppercase', () => {
      expect(uppercaseWordsInArray(['hello', 'bonjour'])).toEqual([
        'HELLO',
        'BONJOUR'
      ]);
    });
  });




  //Classes (OOP):

  describe('Rectangle', () => {
    it('should calculate the area', () => {
        const rectangle = new Rectangle(3, 30);
        expect(rectangle.area()).toBe(90);
    });
});




describe('Circle', () => {
it('should calculate the circumference', () => {
    const circle = new Circle(5);
    expect(circle.circumference()).toBeCloseTo(31.42);
});
});











  