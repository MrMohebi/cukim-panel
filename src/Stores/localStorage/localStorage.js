
const lSNameToken = "resOwnerToken_010312"



export const setLSToken = (token) =>{
    localStorage.setItem(lSNameToken, token)
}
export const getLSToken = () =>{
    let lSToken = localStorage.getItem(lSNameToken)
    return (lSToken !== null && lSToken !== undefined) ? lSToken : ""
}
export const removeCacheToken = () =>{
    localStorage.removeItem(lSNameToken)
}

