
const getContracts = () => {
  const dataResult = fetch('https://be6p23ysj7.execute-api.us-east-1.amazonaws.com/dev/projects/76bde480-70de-484b-4b87-c993642d8130-008c/contracts')
  .then(response => response.json())
  .then(jSONdata => {
    console.log("soy JSON DATA de getcontracts", jSONdata)
    return jSONdata
  })
  .catch(error => console.log("Fetch error", error))

  return dataResult
}

export default getContracts

