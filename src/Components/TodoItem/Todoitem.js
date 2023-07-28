import React from 'react'


const Todoitem = ({item, upShow, downShow, updateCheckBox, deleteitem,upitem , downitem }) => {
    const updateCheckboxHandler = (ev)=>{
        let class_name = ev.target.className;
        let id = ev.target.parentElement.id;
        // console.log(class_name);

        if(class_name === 'checkbox'){
            updateCheckBox(id);
        }
        if(class_name === 'deleteItem'){
            deleteitem(id);
        }
        if(class_name === "upArrow"){
            upitem(id);
        }
        if(class_name === "downArrow"){
            downitem(id);
        }
    }
    let strike = item.checked ? 'line-through':'none';
    return (
        <div className="item" id={item.id} onClick={updateCheckboxHandler}>
            <input className="checkbox" type="checkbox"/>
            <span className="task" style={{'text-decoration':strike}}>{item.name}</span>
            {upShow && <button className="upArrow">⬆️</button>}
            {downShow && <button className="downArrow">⬇️</button>}
            <button className="deleteItem">❌</button>
        </div>
    )
}

export default Todoitem