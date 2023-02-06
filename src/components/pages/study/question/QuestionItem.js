import React, { useState, useEffect } from "react";
import { Pagination, List, Card, Radio, Space } from 'antd';
import "./Question.css";

const QuestionItem = ({ item, index }) => {
    const abc = ["A", "B", "C", "D", "E", "F"];

    const [valueAnswer, setValueAnswer] = useState("");
    const [flag, setFlag] = useState(false);

    const onChose = (e) => {
        setValueAnswer(e.target.value);
        setFlag(true);
    }
    return (<Card title={<>
        {`${index + 1}. ${item.question}`}
        {flag === true && <div className="sub-text">{item.sub_question}</div>}
    </>}>
        <Radio.Group onChange={onChose} disabled={flag} value={valueAnswer}>
            <Space direction="vertical">
                {item.choices.map((ans, ind) => (
                    <Radio key={ind} value={ind}>{`${abc[ind]}. ${ans}`}</Radio>
                ))}
            </Space>
        </Radio.Group>
    </Card>)
}
export default QuestionItem;