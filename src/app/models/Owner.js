module.exports = (sequelize, DataTypes) => {
  const Owner = sequelize.define({
    login: DataTypes.STRING,
    id: DataTypes.INTEGER,
    node_id: DataTypes.STRING,
    avatar_url: DataTypes.STRING,
    gravatar_id: DataTypes.STRING,
    url: DataTypes.STRING,
    html_url: DataTypes.STRING,
    followers_url: DataTypes.STRING,
    following_url: DataTypes.STRING,
    gists_url: DataTypes.STRING,
    starred_url: DataTypes.STRING,
    subscriptions_url: DataTypes.STRING,
    repos_url: DataTypes.STRING,
    events_url: DataTypes.STRING,
    received_events_url: DataTypes.STRING,
    type: DataTypes.STRING,
    site_admin: DataTypes.BOOLEAN
  });
  return Owner;
};
