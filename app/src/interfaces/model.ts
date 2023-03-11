import { Logable } from "../utils/Logable";
import { Comparable } from "./comparable";

export interface Model<T> extends Logable, Comparable<T> {

}