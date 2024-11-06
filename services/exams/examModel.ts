import apiProvider from "./apiProvider";
const ApiProvider = new apiProvider()

export default class examModel {

 fetchList = async (): Promise<any> => {
  try {
   const listRes = await ApiProvider.list();
   const list = await listRes.json();
   if(list.status==='success'){
    const data = list?.data
    function routesCreatedData(id:any, examName:string){
     return {id, examName}
    }
    const examList = data && data.map((val:any)=>{
     return routesCreatedData(val._id, val.exam_name)
    })
    return {examList}
   }
  } catch (error) {
   console.log(error)
  }
 }

 

}