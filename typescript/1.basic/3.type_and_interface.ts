/**
 * Type and Interface
 */

/**
 * Type
 * 
 * 타입은 쉭게 말해서 TS의 타입에 이름을 지어주는 역할을 한다.
 */


type newStringType = string;

type NewNullType = null;

type NewNumberType = number;

type MaleOrFemale = 'male' | 'female'

const stringVar : newStringType = 'test'

// year? is an Optional as a default argument
type IdolType = {
    name: string;
    year?: number
}

const yuJin: IdolType = {
    name: '안유진',
    // year: 2002,
}

/**
 * Interface
 */

interface IdolInterface {
    name: string;
    year: number;
}

const yuJin2: IdolInterface = {
    name: '안유진',
    year: 2002,
}


interface IdolIT{
    name: newStringType;
    year: NewNumberType;
}

const yuJin3: IdolIT = {
    name: '안유진',
    year: 2002
}


interface IdolOptional{
    name: string;
    year?: number;
}

const yuJin4: IdolOptional = {
    name: '안유진',
    // year: 2004
}