import { createContext, useEffect, useState } from "react";

export const addStudContext = createContext();

function AddStudentProvider(props) {
    const [student,setStudent] = useState(()=>{
    const studentData = localStorage.getItem("student");
    return studentData ? JSON.parse(studentData) : [];
    })

    const [marks,setMarks] = useState(()=>{
        const studentMarks = localStorage.getItem("marks");
        return studentMarks ? JSON.parse(studentMarks) : [];
    })

    const addStud = (name, roll)=>{
        setStudent([
            ...student,
            {
                name:name,
                roll:roll,
                id:Math.random(),
                std : window.localStorage.getItem("dynamic")

            }
        ]);
        console.log(student);
    };

    const addStudDetails = (stdname,subname,marksget)=>{
        setMarks([
            ...marks,
            {
                stdname:stdname,
                subname:subname,
                marksget: marksget,
                id:Math.random(),
                std : window.localStorage.getItem("dynamic")

            }
        ])

    }

    useEffect(()=>{
        localStorage.setItem("student", JSON.stringify(student));
    },[student])

    useEffect(()=>{
        localStorage.setItem("marks", JSON.stringify(marks));
    },[marks])

    return(
        <addStudContext.Provider value={{student, marks, addStud, addStudDetails}}>
            {props.children}    
        </addStudContext.Provider>
    )
    
}

export default AddStudentProvider;
