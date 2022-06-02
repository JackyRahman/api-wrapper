import { apiClientRequest } from "./index";

export async function getLocation(url: string, key: string, auth: any, country = undefined, region = undefined, city = undefined) { 
  let param = {}
  if(country){
    param["country"] = country
  }
  if(country){
    param["region"] = region
  }
  if(country){
    param["city"] = city
  }
  const result = await apiClientRequest(url, key, auth)
    .get("/gcs/signed-url", {
      params: param
    })
  return result
}