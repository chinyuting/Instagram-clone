import Mock from 'mockjs' 

Mock.mock('/getPost', 'post', {
    status:200, 
    dataList:[
        {
            postId: '1',
            postOwnerName: 'shelly',
            postOwnerPic: 'src/assets/images/test.jpg',
            imgs: ['src/assets/images/test.jpg','src/assets/images/test1.jpg','src/assets/images/test1.jpg'],
            thumbNum:1000,
            description:'文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容.文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容.',
            isThumb: true,
            postDateTime: 1706007150829,
        },
        {
            postId: '2',
            postOwnerName: 'shelly123',
            postOwnerPic: 'src/assets/images/test.jpg',
            imgs: ['src/assets/images/test.jpg'],
            thumbNum:50,
            description:'this is the second post!',
            isThumb: false,
            postDateTime: 1706007226706,
        },
        ] 
})
Mock.mock('/getStories', 'post', {
    status:200, 
    dataList:[
        {
            storyId: '1',
            storyOwnerName: 'shelly',
            storyOwnerId: '1',
            img: 'src/assets/images/test.jpg',
            storyDateTime: 1706007150829,
            duration: 1000,
            isWatched: false,
        },
        {
            storyId: '2',
            storyOwnerName: 'shellychiu',
            storyOwnerId: '2',
            img: 'src/assets/images/test1.jpg',
            storyDateTime: 1706007226706,
            duration: 6000,
            isWatched: false,
        },
    ] 
})
Mock.mock('/getStoryOwner', 'post', {
    status:200, 
    dataList:[
        {
            storyOwnerId: '1',
            storyOwnerName: 'shelly',
            storyOwnerPic: 'src/assets/images/test.jpg',
            isWatched: true,
        },
        {
            storyOwnerId: '2',
            storyOwnerName: 'shellychiu',
            storyOwnerPic: 'src/assets/images/test1.jpg',
            isWatched: false,
        },
        ] 
})