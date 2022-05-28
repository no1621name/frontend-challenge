function returnData (response: any) {
  return response.data
}
export default function initAxios (axios: any) {
  axios.interceptors.response.use(returnData)
}
