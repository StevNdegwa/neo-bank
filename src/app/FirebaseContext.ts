import { createContext } from "react";
import Firebase from "../utils/firebase";

const FirebaseContext = createContext<Firebase | null>(null);

export default FirebaseContext;