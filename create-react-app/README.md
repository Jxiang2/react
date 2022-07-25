Webpack is a "module bundler". On its own it does not change the source of a program (note: there are some caveats to this, e.g. minification), only join all the different bits of a large codebase together for easier and more efficient delivery over the Internet (depending on the use case; you may be bundling server-side code, in which case the benefits are mostly around being able to consolidate build tooling).


A webpack loader is used to process files during bundling. It is specific to webpack (you would not use babel-loader without webpack, except maybe in cases of interop with other build tools, but even then it would not used on its own).


In a webpack configuration one specifies a mapping of file extensions to webpack loaders. For example, a common case is to process .ts files using ts-loader. This way, webpack will pass off files with the .ts extension to the TypeScript compiler, and use the output of this compilation in the bundle, instead of the source program.


Babel is a compiler; it takes an ESNext JS program and produces an equivalent ES3+ compatible program.


babel-loader does what ts-loader does for TypeScript; passes off files to the Babel compiler, and returns the result to be used in the bundle in-place of the original source program.