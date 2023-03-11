export function Log(...logables) {
    logables.forEach(logable => console.log(logable.toPrettyString()));
}
