const { Feeds } = require("./models");
// SELECT

// const getAllFeeds = async()=>{
//     const data = await Feeds.findByPk('07307568-3d49-4f3b-ab20-2c28fb5a7767');
//     console.log(data);
// }

// getAllFeeds();
// Feeds.findAll().then((data)=> {console.log(data)}).catch((err)=>{console.log(err)});


// INSERT 
//inset belum selesai dites !!!!!
// Feeds.bulkCreate([
//     { id: uuidv4(), title: 'New 2', content: 'New', category: 'New', createdAt: new Date(), updatedAt: new Date() },
//     { id: uuidv4(), title: 'New 3', content: 'New', category: 'New', createdAt: new Date(), updatedAt: new Date() }
// ]).then((data) => { console.log(data) }).catch((err) => { console.log(err) })


//UPDATE

// Feeds.update(
//     { title: 'title updated', content: 'content uodate', category: 'category updated' },
//     { where: { id: '03f3ad9d-1e69-4bd6-8123-0c26d073707b' } })
//     .then((data) => { console.log(data) })
//     .catch((err) => { console.log(err) });


// DELETE

// Feeds.destroy({where:{id:'d51d1456-fb8f-48a1-84ef-2df87ace15b5'}})
//     .then((data) => { console.log(data) })
//     .catch((err) => { console.log(err) });