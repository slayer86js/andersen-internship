const transform = str => {
    console.log(str.split('.').reduceRight((acc, item) =>  ({ [item]: acc }),  null))
}

transform('a.b.c.d') // { a: { b: { c: { d: null }}}}