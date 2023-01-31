module.exports = {
  branches: ["master"],
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/github"
  ],
  repositoryUrl: "https://github.com/juanjo44/react-app-learning-github-actions"
};
