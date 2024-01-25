

type Person = {
    name: string,
    age: number,
    address?: string,
}


const p: Person = {
    name: 'John',
    age: 32,
}
p.address = 'Bangalore'


export default p