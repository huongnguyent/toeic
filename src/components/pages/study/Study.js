import { PictureOutlined, CustomerServiceOutlined, ProfileOutlined, ScheduleOutlined } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import React, {useState} from 'react';
import Lession from './lession/Lession';
import Question from './question/Question';
import Test from './test/Test';
import Vocabulary from './vocabulary/Vocabulary';
const { Header, Content, Footer, Sider } = Layout;
const item2 = [
{icon: PictureOutlined, label: "Question"},
{icon: CustomerServiceOutlined, label: "Lession"},
{icon: ProfileOutlined, label: "Vocabulary"},
{icon: ScheduleOutlined, label: "Test"}
].map((item) => {
    return {
        key: item.label,
        icon: React.createElement(item.icon),
        label: item.label
    }
})
const Study = () => {
    const [optionMenu, setOptionMenu] = useState("Question");
    return (
        <Layout>
            <Sider
                breakpoint="lg"
                collapsedWidth="0"
                onBreakpoint={(broken) => {
                    console.log(broken);
                }}
                onCollapse={(collapsed, type) => {
                    console.log(collapsed, type);
                }}
            >
                <div className="logo" style={{width: 150, height: 50}}/>
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['Question']}
                    items={item2}
                    onSelect={(e) => setOptionMenu(e.key)}
                />
            </Sider>
            <Layout>
                <Content
                    style={{
                        margin: '24px 16px 0',
                    }}
                >
                    <div
                        style={{
                            padding: 44,
                            minHeight: 700,
                        }}
                    >
                        {
                            optionMenu === "Question" && <Question /> ||
                            optionMenu === "Lession" && <Lession /> ||
                            optionMenu === "Vocabulary" && <Vocabulary /> ||
                            optionMenu === "Test" && <Test />
                        }
                    </div>
                </Content>
                <Footer
                    style={{
                        textAlign: 'center',
                    }}
                >
                    Ant Design ©2023 Created by Ant UED
                </Footer>
            </Layout>
        </Layout>
    )
}
export default Study;