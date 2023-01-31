module.exports = {
  branches: "master",
  repositoryUrl: "https://github.com/juanjo44/react-app-learning-github-actions.git",
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/github"
  ]
};
