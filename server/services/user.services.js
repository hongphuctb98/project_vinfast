const db = require("../utils/database");

// module.exports.findAll = () => {
//   return db.execute("SELECT * FROM user");
// };

// module.exports.findOne = (id) => {
//   return db.execute(`select * from user where userId = ${id}`);
// };

module.exports.findOneByEmail = (email) => {
  return db.execute(`select * from user where email = '${email}'`);
};

module.exports.create = (email, password, fullName, phoneNumber) => {
  // let date = new Date();
  // let registeredAt = date.toISOString().split("T")[0];
  return db.execute(
    "insert into user(email, fullName, password, phoneNumber) values(?,?,?,?)",
    [email, fullName, password, phoneNumber]
  );
};

// module.exports.update = (
//   id,
//   mobile,
//   birthday,
//   gender,
//   intro,
//   profile,
//   avatarURL
// ) => {
//   console.log(id, mobile, birthday, gender, intro, profile, avatarURL);
//   return db.execute(
//     "update user set mobile = ?, birthday = ?, gender = ?, intro = ?, profile = ?, avatarURL= ? where userId = ?",
//     [mobile, birthday, gender, intro, profile, avatarURL, id]
//   );
// };

// module.exports.remove = (id) => {
//   return db.execute(`delete from user where userId = ${id}`);
// };

// module.exports.search = (keyword) => {
//   return db.execute(`select * from user where userName like '%${keyword}%'`);
// };

// module.exports.follow = (followerId, followingId) => {
//   return db.execute(
//     "insert into followers (followerId, followingId) values(?,?)",
//     [followerId, followingId]
//   );
// };

// module.exports.getFollowers = () => {
//   return db.execute("select * from followers");
// };
