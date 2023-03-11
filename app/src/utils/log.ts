import { Logable } from './Logable.js'

export function Log(...logables: Logable[]) {
    logables.forEach(logable => console.log(logable.toPrettyString()))
}