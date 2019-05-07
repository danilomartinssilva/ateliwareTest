import { Sequelize, DataTypes } from "sequelize";
module.exports = (sequelize, DataTypes) => {
  const Repository = sequelize.define({
    id_internal: DataTypes.INTEGER,
    id: DataTypes.INTEGER,
    node_id: DataTypes.STRING,
    name: DataTypes.STRING,
    full_name: DataTypes.STRING,
    private: DataTypes.BOOLEAN,
    html_url: DataTypes.STRING,
    description: DataTypes.STRING,
    fork: DataTypes.STRING,
    url: DataTypes.STRING,
    forks_url: DataTypes.STRING,
    keys_url: DataTypes.STRING,
    collaborators_url: DataTypes.STRING,
    teams_url: DataTypes.STRING,
    hooks_url: DataTypes.STRING,
    issue_events_url: DataTypes.STRING,
    events_url: DataTypes.STRING,
    assignees_url: DataTypes.STRING,
    branches_url: DataTypes.STRING,
    tags_url: DataTypes.STRING,
    blobs_url: DataTypes.STRING,
    git_tags_url: DataTypes.STRING,
    git_refs_url: DataTypes.STRING,
    trees_url: DataTypes.STRING,
    statuses_url: DataTypes.STRING,
    stargazers_url: DataTypes.STRING,
    contributors_url: DataTypes.STRING,
    subscribers_url: DataTypes.STRING,
    subscription_url: DataTypes.STRING,
    commits_url: DataTypes.STRING,
    git_commits_url: DataTypes.STRING,
    comments_url: DataTypes.STRING,
    contents_url: DataTypes.STRING,
    issue_comment_url: DataTypes.STRING
  });
  //Repository.belongsToMany(Owner,{})

  return Repository;
};
