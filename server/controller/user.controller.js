const userServices = require("../services/user.services");

// module.exports.findAll = async (req, res) => {
//   try {
//     let data = await userServices.findAll();
//     let [rows] = data;
//     res.json({
//       message: "get all user",
//       users: rows,
//       currentUser: req.currentUser[0][0],
//     });
//   } catch (err) {
//     res.json({
//       message: err.message,
//     });
//   }
// };

// module.exports.findOne = async (req, res) => {
//   try {
//     const { id } = req.params;
//     let data = await userServices.findOne(id);
//     let [rows] = data;
//     res.json({
//       message: "get one user",
//       user: rows,
//     });
//   } catch (error) {
//     res.json({
//       message: error.message,
//     });
//   }
// };

// module.exports.findOneByUserName = async (req, res) => {
//   try {
//     const { userName } = req.params;
//     let data = await userServices.findOneByUserName(userName);
//     let [rows] = data;
//     res.json({
//       status: 200,
//       message: "get one user",
//       user: rows,
//     });
//   } catch (error) {
//     res.json({
//       status: 400,
//       message: error.message,
//     });
//   }
// };

// module.exports.create = async (req, res) => {
//   let { email, password, fullName, userName, avatarURL } = req.body;
//   try {
//     let data = await userServices.create(
//       email,
//       password,
//       fullName,
//       userName,
//       avatarURL
//     );
//     if (data[0].affectedRows > 0) {
//       res.json({
//         message: "create success",
//       });
//     } else {
//       res.json({
//         message: "create fail",
//       });
//     }
//   } catch (error) {
//     res.json({
//       message: error.message,
//     });
//   }
// };

// module.exports.update = async (req, res) => {
//   try {
//     const { id } = req.params;
//     let { mobile, birthday, gender, intro, profile, avatarURL } = req.body;
//     console.log(id, mobile, birthday, gender, intro, profile, avatarURL);
//     let data = await userServices.update(
//       id,
//       mobile,
//       birthday,
//       gender,
//       intro,
//       profile,
//       avatarURL
//     );

//     if (data[0].affectedRows > 0) {
//       res.json({
//         message: "update success",
//       });
//     } else {
//       res.json({
//         message: "update fail",
//       });
//     }
//   } catch (error) {
//     res.json({
//       message: error.message,
//     });
//   }
// };

// module.exports.remove = async (req, res) => {
//   try {
//     const { id } = req.params;
//     let data = await userServices.remove(id);
//     if (data[0].affectedRows > 0) {
//       res.json({
//         message: "delete success",
//       });
//     } else {
//       res.json({
//         message: "delete fail",
//       });
//     }
//   } catch (error) {
//     res.json({
//       message: error.message,
//     });
//   }
// };

// module.exports.search = async (req, res) => {
//   try {
//     const { keyword } = req.params;
//     let data = await userServices.search(keyword);
//     let [rows] = data;
//     res.json({
//       message: "search success",
//       users: rows,
//     });
//   } catch (error) {
//     res.json({
//       message: error.message,
//     });
//   }
// };
// module.exports.follow = async (req, res) => {
//   try {
//     const { followerId, followingId } = req.body;

//     let data = await userServices.follow(followerId, followingId);
//     if (data[0].affectedRows > 0) {
//       res.json({
//         message: "follow success",
//       });
//     } else {
//       res.json({
//         message: "follow fail",
//       });
//     }
//   } catch (err) {
//     res.json({
//       message: err.message,
//     });
//   }
// };

// module.exports.getFollowers = async (req, res) => {
//   try {
//     let data = await userServices.getFollowers();
//     let [rows] = data;
//     res.json({
//       message: "get followers success",
//       followers: rows,
//     });
//   } catch (err) {
//     res.json({
//       message: err.message,
//     });
//   }
// };
