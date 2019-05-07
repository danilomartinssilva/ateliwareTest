"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("repositorys", {
      id_internal: {
        allowNull: false,
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      id: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      node_id: {
        allowNull: false,
        type: Sequelize.STRING
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      full_name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      private: {
        allowNull: false,
        type: Sequelize.STRING
      },
      html_url: {
        allowNull: false,
        type: Sequelize.STRING
      },
      description: {
        allowNull: false,
        type: Sequelize.STRING
      },
      fork: {
        allowNull: false,
        type: Sequelize.STRING
      },
      url: {
        allowNull: false,
        type: Sequelize.STRING
      },
      forks_url: {
        allowNull: false,
        type: Sequelize.STRING
      },
      keys_url: {
        allowNull: false,
        type: Sequelize.STRING
      },
      collaborators_url: {
        allowNull: false,
        type: Sequelize.STRING
      },
      teams_url: {
        allowNull: false,
        type: Sequelize.STRING
      },
      hooks_url: {
        allowNull: false,
        type: Sequelize.STRING
      },
      issue_events_url: {
        allowNull: false,
        type: Sequelize.STRING
      },
      events_url: {
        allowNull: false,
        type: Sequelize.STRING
      },
      assignees_url: {
        allowNull: false,
        type: Sequelize.STRING
      },
      branches_url: {
        allowNull: false,
        type: Sequelize.STRING
      },
      tags_url: {
        allowNull: false,
        type: Sequelize.STRING
      },
      blobs_url: {
        allowNull: false,
        type: Sequelize.STRING
      },
      git_tags_url: {
        allowNull: false,
        type: Sequelize.STRING
      },
      git_refs_url: {
        allowNull: false,
        type: Sequelize.STRING
      },
      trees_url: {
        allowNull: false,
        type: Sequelize.STRING
      },
      statuses_url: {
        allowNull: false,
        type: Sequelize.STRING
      },
      stargazers_url: {
        allowNull: false,
        type: Sequelize.STRING
      },
      contributors_url: {
        allowNull: false,
        type: Sequelize.STRING
      },
      subscribers_url: {
        allowNull: false,
        type: Sequelize.STRING
      },
      subscription_url: {
        allowNull: false,
        type: Sequelize.STRING
      },
      commits_url: {
        allowNull: false,
        type: Sequelize.STRING
      },
      git_commits_url: {
        allowNull: false,
        type: Sequelize.STRING
      },
      comments_url: {
        allowNull: false,
        type: Sequelize.STRING
      },
      contents_url: {
        allowNull: false,
        type: Sequelize.STRING
      },
      issue_comment_url: {
        allowNull: false,
        type: Sequelize.STRING
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("repositorys");
  }
};
