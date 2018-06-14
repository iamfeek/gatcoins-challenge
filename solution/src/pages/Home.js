import React from 'react';
import Layout from '../components/Layout';
import _ from 'lodash';
import CardItem from "../components/CardItem";

import {
	Row,
	Col
} from 'antd';

const HomeMenuItems = [
	{
		title: "Popular Series",
		imageLabel: "SERIES",
		path: "/series",
		imagePath: "/assets/menu-background.png"
		
	},
	{
		title: "Popular Movies",
		imageLabel: "MOVIES",
		path: "/movies",
		imagePath: "/assets/menu-background.png"
	}
]

const Home = props => {
	return (
			<Layout bannerTitle="Popular Titles">
				<Row gutter={ 16 }>
					{
						_.map( HomeMenuItems, ( item, index ) => {
							const {
								title, imageLabel, path,
								imagePath
							} = item;
							
							return (
									<Col span={ 4 }>
										<CardItem key={ index }
															imagePath={ imagePath }
															title={ title } path={ path } imageLabel={ imageLabel }/>
									</Col>
							)
						} )
					}
				</Row>
			</Layout>
	)
}

export default Home;