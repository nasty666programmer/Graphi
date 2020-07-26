import { CREATE_NAME } from "./types";


 function createName(name) {
    return {
        type: CREATE_NAME,
        payload: name
    }
}

 

export default createName ;