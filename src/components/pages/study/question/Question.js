import React, { useEffect, useState } from 'react';
import PartItem from './PartItem';
import { Row } from 'antd';
import questionProvider from '../../../../data-access/question-provider';
import groupProvider from '../../../../data-access/group-provider';


const Question = () => {
    const [groupData, setGroupData] = useState([])

    useEffect(() => {
        getGroup();
    }, [])

    const getGroup = () => {
        let param = {
            page: 1,
            size: 3,
        }
        debugger
        groupProvider.search(param).then(
            s => {
            if (s) {
                setGroupData(s);
            }
        }).catch(e => {
        })
    }
    return (
        <React.Fragment>
            <Row gutter={16}>
                {
                    [1,2,3,4,5,6,7].map((x, index) => (
                        <PartItem index={index} part={x} data={groupData.filter(group => group.part === x.toString())} />
                    ))
                }
            </Row>
        </React.Fragment>
    )
}

export default Question;