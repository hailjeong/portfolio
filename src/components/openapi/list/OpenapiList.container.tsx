import axios from "axios";
import { useEffect, useState } from "react";
import OpenapiListUI from "./OpenapiList.presenter";

export default function OpenapiList() {
  const [imgUri, setImgUri] = useState<string[]>([])

  useEffect(() => {
    const getImg = async() => {
      new Array(9).fill(1).map(async (_) => {
        const result:any = await axios.get(
          "https://dog.ceo/api/breeds/image/random"
        )
        setImgUri((prev) => [...prev, result.data.message])
      })
    }
    getImg()
  }, [])

  return <OpenapiListUI imgUri={imgUri} />
}
