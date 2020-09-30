import React, { useContext } from 'react';
import { ADD_OPERATION_LOGS, DELETE_EVENT } from '../actions/index.js'

import AppContext from '../contexts/AppContext'
import { timeCurrentIso8601 } from '../utils'


const Event = ({ event }) => {
    const id = event.id
    const { dispatch } = useContext(AppContext)
    const handleClickDeleteButton = () =>{
        const result = window.confirm(`${id}イベントを本当に削除しても良いですか？`)
        if (result){
            dispatch({ type: DELETE_EVENT, id })

            dispatch({
                type: ADD_OPERATION_LOGS,
                description: `イベントを(id=${id})を削除しました。`,
                operatedAt: timeCurrentIso8601()
            })
        }
    }

    return(
        <tr>
            <td>{id}</td>
            <td>{event.title}</td>
            <td>{event.body}</td>
            <td><button type="button" className="btn btn-danger" onClick={handleClickDeleteButton}>削除</button></td>
        </tr>
    )
}

export default Event


// {
//     // mapで同じ処理を回している。そうすると同じtrがなんども生成出力されるので、一個一個を識別できない。よって識別するためのkeyをつける必要がある。
//     // mapの仕様で決まっているindexを第二引数として受け取りそれを、keyとして利用する。
//     state.map((event, index) => {
//       //特別に関数を定義しない場合は、丸括弧で一括returnしてもいいが、関数を定義する場合は、ブラケットを開いて、関数定義とreturnを区別する必要がある。
//       const id = event.id
//       const handleClickDeleteButton = () =>{
//         dispatch({ type: 'DELETE_EVENT', id })
//       }

//       return(
//         <tr key={index}>
//           <td>{id}</td>
//           <td>{event.title}</td>
//           <td>{event.body}</td>
//           <td><button type="button" className="btn btn-danger" onClick={handleClickDeleteButton}>削除</button></td>
//       </tr>
//       )})
//   }