import { Billboard } from "@/types"


const Url=`${process.env.NEXT_PUBLIC_API_URL}/billboards`

const getBillBoards=async(id:string):Promise<Billboard>=>{

const res=await fetch(`${Url}/${id}`)

return res.json()
}

export default getBillBoards