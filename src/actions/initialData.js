export const initialData = {
	boards: [
		{
			id: 'board-1',
			columnsOrder: [
				'column-1', 'column-2', 'column-3'
			],
			columns: [
				{
					id: 'column-1',
					boardId: 'board-1',
					title: 'to do column',
					cardOrder: ['card-1', 'card-2', 'card-3', 'card-4', 'card-5', 'card-6', 'card-7'],
					cards: [
						{
							id: 'card-1',
							boardId: 'board-1',
							columnId: 'column-1',
							title: 'Title of card 1',
							cover: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png'
						},
						{
							id: 'card-2',
							boardId: 'board-1',
							columnId: 'column-1',
							title: 'Title of card 2',
							cover: null
						},
						{
							id: 'card-3',
							boardId: 'board-1',
							columnId: 'column-1',
							title: 'Title of card 3',
							cover: null
						},
						{
							id: 'card-4',
							boardId: 'board-1',
							columnId: 'column-1',
							title: 'Title of card 4',
							cover: null
						},
						{
							id: 'card-5',
							boardId: 'board-1',
							columnId: 'column-1',
							title: 'Title of card 5',
							cover: null
						},
						{
							id: 'card-6',
							boardId: 'board-1',
							columnId: 'column-1',
							title: 'Title of card 6',
							cover: null
						},
						{
							id: 'card-7',
							boardId: 'board-1',
							columnId: 'column-1',
							title: 'Title of card 7',
							cover: null
						}
						,
						{
							id: 'card-8',
							boardId: 'board-1',
							columnId: 'column-1',
							title: 'Title of card 8',
							cover: null
						}

					]
				},
				{
					id: 'column-2',
					boardId: 'board-1',
					title: 'process column',
					cardOrder: ['card-8', 'card-9', 'card-10'],
					cards: [
						{
							id: 'card-8',
							boardId: 'board-1',
							columnId: 'column-1',
							title: 'Title of card 8',
							cover: null
						},
						{
							id: 'card-9',
							boardId: 'board-1',
							columnId: 'column-1',
							title: 'Title of card 9',
							cover: null
						},
						{
							id: 'card-10',
							boardId: 'board-1',
							columnId: 'column-1',
							title: 'Title of card 10',
							cover: null
						}

					]
				}

			]
		}

	]
}