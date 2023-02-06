import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Pagination, List, Card, Radio, Space } from 'antd';
import questionProvider from '../../../../data-access/question-provider';
import QuestionItem from './QuestionItem';
import "./Question.css";

const PageListQuestion = () => {
    let id = useParams();
    const [listQuestion, setListQuestion] = useState([]);
    useEffect(() => {
        getQuestion();
        console.log(listQuestion)
    }, [])

    const getQuestion = () => {
        let param = {
            page: 1,
            size: 10,
        }
        questionProvider.search(param).then(
            s => {
            if (s) {
                debugger
                setListQuestion(s);
            }
        }).catch(e => {
        })
    }

    return (
        <React.Fragment>
            <div className='page-one'>
                <div className='title-page'>Câu hỏi part {id.partId}</div>
                <List
                    grid={{
                        gutter: 16,
                        column: 2,
                    }}
                    dataSource={listQuestion}
                    renderItem={(item, index) => (
                        <List.Item>
                            <QuestionItem index={index} item={item} />
                        </List.Item>
                    )}
                />
                <Pagination 
                style ={{
                    position: "fixed",
                    bottom: 0,
                    right: 0,
                    paddingRight: 50,
                    backgroundColor: "#f5f5f5",
                    height: 50,
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}
                defaultCurrent={6} total={listQuestion ? listQuestion.length : 10} />
            </div>
        </React.Fragment>
    )
}

export default PageListQuestion;