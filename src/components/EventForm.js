import React, { useState, useContext } from 'react';
import {CREATE_EVENT, DELETE_ALL_EVENTS, DELETE_ALL_OPERATION_LOGS, ADD_OPERATION_LOGS } from '../actions/index.js'
import AppContext from '../contexts/AppContext'

import { timeCurrentIso8601 } from '../utils'

//App.jsからpropsとして渡ってきたstate,dispatchを受け取り利用する。
//ブラケットや丸括弧の理由を考えろ、なぜ、カーリーなのか、なぜカーリーであれば動くのか
const EventForm = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const {state, dispatch} = useContext(AppContext)

    const addEvent = e => {
        //reloadを防止している。このeはeventである。
        e.preventDefault()
        dispatch({
            type: CREATE_EVENT,
            title,
            body
        })

        dispatch({
            type: ADD_OPERATION_LOGS,
            description: 'イベントを作成しました。',
            operatedAt: timeCurrentIso8601()
        })

        setTitle('')
        setBody('')
    }

    const deleteAllEvents = e => {
        e.preventDefault()
        const result = window.confirm('全てのイベントを本当に削除しても良いですか？')
        if (result){ 
            dispatch({ type: DELETE_ALL_EVENTS })

            dispatch({
                type: ADD_OPERATION_LOGS,
                description: '全てのイベントを削除しました。',
                operatedAt: timeCurrentIso8601()
            })
        }
    }

    //非活性化の判定 apiの二重送信防止とかにも使える
    const unCreatable = title ==='' || body === ""
    const deleteAllOperationLogs = e => {
        e.preventDefault()
        const result = window.confirm('全ての操作ログを本当に削除しても良いですか？')
        if(result) {
            dispatch ({
                type: DELETE_ALL_OPERATION_LOGS
            })
        }
    }

    return (
        <>
            <h4>イベント作成フォーム</h4>
            <form>
                <div className="form-group">
                    <label htmlFor="formEventTitle">タイトル</label>
                    {/* htmlForとidの値が同じであれば、ラベルをタップした時に、フォーカスされる。 */}
                    <input className="form-control" id="formEventTitle" value={title} onChange={e => setTitle(e.target.value)}/>
                </div>

                <div className="form-group">
                    <label htmlFor="formEventTitle">ボディー</label>
                    <textarea className="form-control" id="formEventTitle" value={body} onChange={e => setBody(e.target.value)}/>
                </div>
                
                <button className="btn btn-primary" onClick={addEvent} disabled={unCreatable}>イベントの作成する</button>
                {/* ここの動き重要 */}
                <button className="btn btn-danger" onClick={deleteAllEvents} disabled={state.events.length === 0}>全てのイベントを削除する</button>
                <button className="btn btn-danger" onClick={deleteAllOperationLogs} disabled={state.operationLogs.length === 0}>全ての操作ログを削除する</button>
            </form>
        </>
    )
}

export default EventForm