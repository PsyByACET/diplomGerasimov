import { ModelAdapter } from "./ModelAdapter";
import axios from "axios";
import {iModel} from "../models/Model";

export async function loadAllModel(): Promise<iModel[]> {
  const res = await axios.get(`http://localhost:5001/api/model`);
  const transformedData = ModelAdapter.transformArray(res);
  return (transformedData);

}



// export async function loadOneProduct(productId: string) {
//     let res: Response = await fetch(
//         `http://localhost:5000/api/product/${productId}`
//     );
//     const data = await res.json();
//     const transformedData = FoodAdapter.transform(data);
//
//     return transformedData;
// }