import {UserAdapter} from "./UserAdapter";

import axios from "axios";
import {iUser} from "../models/User";

export async function loadAllUsers(): Promise<iUser[]> {
    const res = await axios.get(`http://localhost:5001/api/users`);
    const transformedData = UserAdapter.transformArray(res);
    return (transformedData);

}
