import { Action } from "./constants"

export const dispatchGetData=(data:any)=>{

    return{
        type:Action.GETDATA,
        payload:data
    }
}


export const dispatchGetDataLoading=()=>{

    return{
        type:Action.GETDATALOADING,
        
        
    }
}

export const dispatchGetDataLoaded=(data:any)=>{

    return{
        type:Action.GETDATALOADED,
        payload:data
        
    }
}

export const dispatchGetDataLoadedError=()=>{

    return{
        type:Action.GETDATALOADING_ERROR,
       
        
    }
}


