// // Defining object
// let person = {
// 	first_name: 'Mukul',
// 	last_name: 'Latiyan',

// 	//method
// 	getFunction: function () {
// 		return (`The name of the person is 
// 		${person.first_name} ${person.last_name}`)
// 	},
// 	//object within object
// 	phone_number: {
// 		mobile: '12345',
// 		landline: '6789'
// 	}
// }
// console.log(person.getFunction());
// console.log(person.phone_number.landline);





// function person(first_name, last_name){
//     this.first_name = first_name;
//     this.last_name = last_name;
// }

// let person1 = new person ('Redon', 'Mehmeti');
// let person2 = new person ('Redon', 'Mehmeti');

// console.log(person1.first_name);
// console.log(person2.last_name);






// function kerri(kerri_1, kerri_2){
//     this.kerri_1 = kerri_1;
//     this.kerri_2 = kerri_2;
// }

// let vozitsi1 = new kerri ('Audi', 'A8');
// let vozitsi2 = new kerri ('Audi', 'A8');

// console.log(vozitsi1.kerri_1);
// console.log(vozitsi2.kerri_2);





function libri(libri1, libri2){
    this.libri1 = libri1;
    this.libri2 = libri2;
}

let lexusi1 = new libri('Pipi', 'Qorapgjata');
let lexusi2 = new libri('Pipi', 'Qorapgjata');

console.log(lexusi1.libri1);
console.log(lexusi2.libri2);



function prezantimi(emri, mbiemri){
    this.emri = emri;
    this.mbiemri = mbiemri;
}

let prezantusi1 = new prezantimi('Redon', 'Mehmeti');
let prezantusi2 = new prezantimi('Redon', 'Mehmeti');

console.log(prezantusi1.emri);
console.log(prezantusi2.mbiemri);


