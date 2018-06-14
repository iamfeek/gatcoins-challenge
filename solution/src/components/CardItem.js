import React from 'react';
import { string } from 'prop-types';
import {
	Card,
	Row,
	Col
} from 'antd';
import { Link } from 'react-router-dom';

const CardItem = props => {
	return (
			<Card style={{ cursor: "pointer", backgroundColor: "transparent"}}>
				<Link to={props.path} style={{ color: "#333"}}>
				<Row
						style={ {
							backgroundSize: "cover",
							backgroundImage: `url('${props.imagePath}')`,
							height: "350px"
						} }
						type='flex' justify='center' align='middle'>
					<Col>
						<strong style={ {
							color: "white",
							fontSize: "20px"
						} }>{ props.imageLabel.toUpperCase() }</strong>
					</Col>
				</Row>
				<Row style={{ padding: "8px", fontSize: "14px"}}>
					{ props.title }
				</Row>
				</Link>
			</Card>
	)
}

CardItem.propTypes = {
	title: string.isRequired,
	path: string,
	imageLabel: string.isRequired,
	imagePath: string
}

CardItem.defaultProps = {
	path: "#",
	imageLabel: ""
}

export default CardItem;