export function pretty_date(date){
  date = new Date(date)
  let month = date.getMonth()+1
  if (month < 10) month = `0${month}`  
  return `${date.getDate()}.${month}.${date.getFullYear()}`
}

export function standard_date(date){
  date = new Date(date)
  let month = date.getMonth()+1
  if (month < 10) month = `0${month}`
  return `${date.getFullYear()}-${month}-${date.getDate()}`
 
}
