// 1. we could do typecast in js as follows

// i. string type
// let convertThis = 78;
/* These values will converted into string and give same output as we declared

// let converted = String(convertThis);
// let converted = String("ada" + 78);
// let converted = String(true);
// let converted = String(null);
// let converted = String(undefined);
*/
// let converted = String({Number: 78});//[object Object] string

//we don't know what is symbol yet but is gives: function Symbol() { [native code] }
// let converted = String(Symbol); 


// 2. Number
// let convertThis = 78;
// let converted = Number(convertThis);
// let converted = Number("Hello"); //NaN(Not a Number)
// let converted = Number("78NN"); //NaN(Not a Number)
// let converted = Number(true); // 1 & it is a Number
// let converted = Number(false); // 0 & it is a Number
// let converted = Number(7878n); // it is a Number
// let converted = Number(null); //0 it is a Number
// let converted = Number(undefined); //NaN 
// let converted = Number({Number: 78}); //NaN 
// let converted = Number(Symbol); //NaN



// 3. BigInt
// let convertThis = 78;
// let converted = BigInt(convertThis);//78n bigint
// let converted = BigInt("Hello"); //error
// let converted = BigInt("78NN"); //error
// let converted = BigInt(true); // 1n bigint
// let converted = BigInt(false); // 0n bigint
// let converted = BigInt(null); //error
// let converted = BigInt(undefined); //error
// let converted = BigInt({Number: 78}); //error 
// let converted = BigInt(Symbol); //error


// 4. object
// let convertThis = 78;
// let converted = Object(convertThis); // [Number: 78] object
// let converted = Object("Hello"); //[String: 'Hello']
// let converted = Object("78NN"); //[String: '78NN']
// let converted = Object(true); // [Boolean: true]
// let converted = Object(false); // [Boolean: false]
// let converted = Object(7878n); // [BigInt: 7878n]
// let converted = Object(null); //{} object
// let converted = Object(undefined); //{} object
// let converted = Object(Symbol); 
/*value: type is function
[Function: Symbol] {
  dispose: Symbol(nodejs.dispose),
  asyncDispose: Symbol(nodejs.asyncDispose)
}
*/


// 5.Boolean
let convertThis = 78;
let converted = Boolean(convertThis);//true
// let converted = Boolean(0);//false
// let converted = Boolean("Hello"); //true
// let converted = Boolean("78NN"); //true
// let converted = Boolean(7878n); // true
// let converted = Boolean(null); //false
// let converted = Boolean(undefined); //false
// let converted = Boolean({Number: 78}); //true
// let converted = Boolean(Symbol); //true

// 6. Symbol
// let converted = Symbol(convertThis); //Symbol(78) symbol
// let converted = Symbol("Hello"); //Symbol(Hello) symbol
// let converted = Symbol("78NN"); //Symbol(78NN)
// let converted = Symbol(true); // Symbol(true)
// let converted = Symbol(false); // Symbol(false)
// let converted = Symbol(7878n); // Symbol(7878)
// let converted = Symbol(null); //Symbol(null)
// let converted = Symbol(undefined); //Symbol()
// let converted = Symbol({Number: 78}); //Symbol([object Object])


console.log(converted);
console.log(typeof (converted));
