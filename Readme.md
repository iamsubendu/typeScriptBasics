Typescript
Built on top of javascript
Address shortcoming of JS
TS is superset of JS
i.e, it has everything of JS and also
have additional features

benefits:-
1.Static typing(c++,c3,java)
=>defined variable can't change its type
2.Code completion
3.Refactoring
4.Shorthand notations

Drawbacks:-
1.Compilation
=>browser don't understand typescript
So,its first translated to JS and this process
is called
Transpilation

TS use ES5 features of JS

npm i -g typescript
tsc -v => to check typescript version
tsc fileName.ts => to compile to JS
tsc --init=> to create config file
tsc => will compile all files

in config:-
"target": "ES2016" => can change by pressing ctrl + space
// "rootDir": "./", => uncomment this and use accordingly
// "outDir": "./", => uncomment this to add all compiled js files here
// "removeComments": true, => removes all comments in complied JS file
// "noEmitOnError": true, => if error on our code,TS files will still be
complied to JS files,so uncomment to make it not happen
// "sourceMap": true, =>this enables how each line of TS code maps
generated JS code
if used, compile again
// "noUnusedParameters": true, => uncomment so that it gives waring
any parameter is not used
// "noImplicitReturns": true, => uncomment so it won't return
undefined or anything by own
// "noUnusedLocals": true, => uncomment for not using any defined
variables
