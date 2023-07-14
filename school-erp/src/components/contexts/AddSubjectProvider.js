import { createContext, useEffect, useState } from "react";
import { message } from "antd";

export const addSubContext = createContext();

function AddSubjectProvider(props) {
    const [subject,setSub] = useState(() =>{
    const localData = localStorage.getItem("subject");
    return localData ? JSON.parse(localData) : [];
    });

    const addSub = (title) =>{
        setSub([
            ...subject,
            {
            title: title,
            id: Math.random()
            }
        ]);
    };

    const removeSub = (id) => {
        setSub(subject.filter((sub) => sub.id !== id));
        message.success('Subject deleted successfully');

    };

    useEffect(()=>{
        localStorage.setItem("subject", JSON.stringify(subject));
    }, [subject]);

    return(
        <addSubContext.Provider value={{subject, addSub, removeSub}}>
            {props.children}
        </addSubContext.Provider>
    )
}
export default AddSubjectProvider;
