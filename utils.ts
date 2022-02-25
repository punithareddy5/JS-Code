import { BaseItem } from "./interfaces"

function phonenumber(inputtxt:any)
{
  var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  if (inputtxt.value.match(phoneno)){
      return true;
  }
  else{ 
      return false;
  }
}
export const sendMsg = async (payload: BaseItem): Promise<any> => {
  if (phonenumber(payload.MobileNum)){
    return {
        status: 200,
        message: `success OK GO !.....${payload.MobileNum}`
    }
}
else{
    return {
        status: 500,
        message: `Please enter a valid phone number`
    }
}
} 