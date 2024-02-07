/**
 * Types
 */

let helloText: string = 'Hello'

/**
 * JS에 존재하는 7 types
 */

const stringVar: string = 'String'
const numberVar: number = 3;
const bigIntVar: bigint = BigInt(9999999)
const boolean: boolean = true; // or false
const symbolVar: symbol = Symbol(1);
const nullVar: null = null;
const undefinedVar: undefined = undefined;


/**
 * TS에만 존재하는 타입
 */


// any - 아무 타임이나 입력 할 수 있는 치트키같은 타입
let anyVar: any;
anyVar = 100;
anyVar = '코드팩토리'
anyVar = true;

let testNumber: number = anyVar;
let testString: string = anyVar;
let testBoolean: boolean = anyVar;

// unknown - 알 수 없는타입
let unknownType: unknown;
unknownType = '코드팩토리'
unknownType = true;

// let testNumber2: number = unknownType; Syntax error
// let testString2: string = unknownType; Syntax error
// let testBoolean2: boolean = unknownType; Syntax error
let unknownType2: unknown = unknownType;
let anyVar2: any = unknownType



// never = 어떠한 타입도 저장되거나 반환되지 않을때 사용하는 타입
// let neverType: never = null;
// let neverType: never = undefined;
// let neverType: never = 'test'


/**
 * 리스트 타입
 */

const koreanGirlGroup : string[] = ['아이브', '레드벨셀', '블랙핑크'];
const booleanList: boolean[] = [true, false, false, true]

