import React from 'react';
import _ from 'lodash';
import Layout from '../components/Layout';
import withFeedData from '../hoc/withFeedData';
import CardItem from "../components/CardItem";
import { Col, Row } from 'antd';

const Movies = props => {
	return (
			<Layout bannerTitle="Popular Series">
				<Row gutter={ 16 }>
					{
						_.map( props.data, ( item, index ) => {
							const title = item.title;
							const imagePath = item.images[ "Poster Art" ].url;
							
							return <Col span={ 4 }><CardItem key={ index } title={ title } imagePath={ imagePath }/></Col>
						} )
					}
				</Row>
			</Layout>
	)
}

export default withFeedData( Movies, "movie" );