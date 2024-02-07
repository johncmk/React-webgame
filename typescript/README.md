### To execute a Typescript file do the following:
$ ts-node <typscript-file>
Example:
$ $ts-node add.ts 

### To enable BigInt type in TS
open 'tsconfig.json'
update the target field from "es2016" to "es2020"s

"target": "es2016", -->  "target": "es2020", 

### In case the TS wanrs for invalid variable names errors for the 
### variables that exists in different files.

i.e. test.ts has "const var: string = 'test'
and test2.ts has "const var: string = 'test'

open 'tsconfig.json'
update the moduleDetection field from 'auto' to 'force'

"moduleDetection": "auto", -->  "moduleDetection": "force",