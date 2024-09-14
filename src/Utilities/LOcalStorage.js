const getVisited = ()=>{
    const visited =localStorage.getItem("visited")
    if(visited){
        return JSON.parse(visited)
    }else{
        return []
    }
}

const saveVisited = (name)=>{
    const visited = getVisited()
    visited.push(name)
    const str = JSON.stringify(visited)
    localStorage.setItem("visited", str)
}

export {getVisited, saveVisited}
