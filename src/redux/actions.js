import  { DATA_UPDATE }  from './constant';
export function updateData(data) {
return {
type: DATA_UPDATE,
payload: data
}
}