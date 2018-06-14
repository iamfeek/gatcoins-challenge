import React from 'react';
import { string } from 'prop-types';
import { Layout, Menu, Row, Col, Button } from 'antd';
import { Link } from 'react-router-dom';

const { Header, Content } = Layout;

const MyLayout = props => {
	return (
			<Layout>
				<Header style={ { backgroundColor: "#0180FF" } }>
					<Row>
						<Col span={ 12 } style={ { textAlign: "left" } }>
							<Link to="/" style={ {
								color: "white", fontWeight: "bold", fontSize: "24px"
							} }>DEMO Streaming</Link>
						</Col>
						<Col span={ 12 }>
							<Menu
									theme="light"
									mode="horizontal"
									defaultSelectedKeys={ [ '2' ] }
									style={ { lineHeight: '64px', float: 'right' } }
							>
								<Menu.Item key="1">Log in</Menu.Item>
								<Menu.Item key="2">
									<Button
											style={ {
												backgroundColor: "black",
												color: "white"
											} }
									>
										Start your free trial
									</Button>
								</Menu.Item>
							</Menu>
						</Col>
					</Row>
				</Header>
				<Content style={ { minHeight: "calc(100vh - 64px)" } }>
					<Row style={ { backgroundColor: "#414141", padding: "16px 50px" } }>
						<h2 style={ { color: 'white' } }>{ props.bannerTitle }</h2>
					</Row>
					<Row style={ { padding: "16px 50px" } }>
						{ props.children }
					</Row>
				</Content>
			</Layout>
	)
}

MyLayout.propTypes = {
	bannerTitle: string.isRequired
}

export default MyLayout;