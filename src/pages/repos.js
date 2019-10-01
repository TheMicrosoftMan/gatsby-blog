import React, { useState, useEffect } from "react"
import axios from "axios"
import GitHubRepo from "../components/GitHubRepo"

import Layout from "../components/Layout/layout"
import SEO from "../components/SEO/seo"

const ReposPage = () => {
  const [githubRepos, getGithubRepos] = useState([])

  useEffect(() => {
    axios
      .get("https://api.github.com/users/themicrosoftman/repos?sort=updated")
      .then(data => {
        getGithubRepos(
          data.data.map(repo => {
            return {
              id: repo.id,
              name: repo.name,
              description: repo.description,
              html_url: repo.html_url,
            }
          })
        )
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <Layout>
      <SEO title="Repos" />
      <div className="page f-column">
        <h2>GitHub repositories</h2>
        {githubRepos && githubRepos.length > 0 && (
          <div className="repos">
            {githubRepos.map((repo, index) => {
              return <GitHubRepo key={index} id={index + 1} repo={repo} />
            })}
          </div>
        )}
      </div>
    </Layout>
  )
}

export default ReposPage
