import { io } from 'socket.io-client'

/**
 * 
 * @param {String} url 
 */
export const connectWithServer = (url) => {
  //let conectionStatus = false
  const connection = io.connect(url, {
    caches: false,
    Headers: { 'contant/type': 'aplication/json' }
  })
  // io.on('connect', ()=>{
  //   console.log(`socket is connected to server with id: ${io.id}`)
  //   // conectionStatus = true
  // })

  return connection;
}

export const receiveData = (socket) =>{
  socket.on("data", (data) =>{
    
  })
}