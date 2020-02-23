import React, { Component } from 'react';


class TodoItem extends Component {
	// eslint-disable-next-line no-useless-constructor
	constructor(props) {
		super(props);
		this.handleClickItem = this.handleClickItem.bind(this);
	}

	// eslint-disable-next-line react/require-render-return
	render() {
		const { content } = this.props;
		return ( 
			<li 
				onClick = { this.handleClickItem } 
				dangerouslySetInnerHTML={{__html:content}}
			> 
			</li>
		)
	}

	handleClickItem(){
		const { deleteItem,index } = this.props;
		deleteItem(index);
	}
}

export default TodoItem;