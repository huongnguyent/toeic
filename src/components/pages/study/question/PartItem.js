import React from "react";
import { useNavigate } from "react-router-dom";
import { Col, Card, List, Button, Popconfirm } from 'antd';

const PartItem = ({ part, data }) => {
    const navigate = useNavigate();
    const confirmMakeQues = (groupId) => {
        debugger
        navigate(`/question-list/part/${part}/${groupId}`);

    }
    return (
        <Col span={8}>
            <Card title={`Part ${part}`} style={{ margin: 6, height: 280, overflow: "auto" }}>
                <List
                    grid={{
                        gutter: 18,
                        column: 2
                    }}
                    dataSource={data}
                    renderItem={(item) => (
                        <List.Item>
                            <Popconfirm
                                placement="top"
                                title={`Bạn có muốn làm thử phần ${item.group_name} của part ${part} không?`}
                                description="Nếu đã sẵn sàng, hãy click Yes."
                                onConfirm={() => confirmMakeQues(item.id)}
                                okText="Yes"
                                cancelText="No"
                            >
                                <Button style={{
                                    width: 170,
                                    height: 40,
                                    writeSpace: "nowrap",
                                    overflow: "hidden",
                                    textOverflow: "ellipsis"
                                }}>{item.group_name}</Button></Popconfirm>
                        </List.Item>
                    )}
                />
            </Card>
        </Col>
    )
}
export default PartItem;