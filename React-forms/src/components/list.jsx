
function List({list}){
console.log(list);

    return(<>
    
    <ui>

        {list.map((li,index)=>{li})}
    </ui>
    
    </>)
}

export default List;