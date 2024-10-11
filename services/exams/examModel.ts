import apiProvider from "./apiProvider";
const ApiProvider = new apiProvider()

export default class examModel {

 fetchAll = async (): Promise<any> => {
  try {
   const listRes = await ApiProvider.list();
   const list = await listRes.json();
   if(list.status==='success'){
    const data = list?.data
    function routesCreatedData(key:any, title:string){
     return {key, title}
    }
    const routes = data && data.map((val:any)=>{
     return routesCreatedData(val._id, val.exam_name)
    })
    return {routes}
   }
  } catch (error) {
   console.log(error)
  }
 }

 

}